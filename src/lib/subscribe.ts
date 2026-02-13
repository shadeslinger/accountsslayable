"use server";

type SubscribeResult =
  | { ok: true; state: "active" | "inactive" }
  | { ok: false; error: string };

export async function subscribe(email: string): Promise<SubscribeResult> {
  const formId = process.env.KIT_FORM_ID;
  const apiKey = process.env.KIT_API_KEY;
  const normalizedEmail = email.trim();

  if (!normalizedEmail) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (!formId || !apiKey) {
    return { ok: false, error: "Email signup is not configured yet. Check back soon!" };
  }
  if (!/^\d+$/.test(formId)) {
    return {
      ok: false,
      error: "Signup is temporarily unavailable. Please contact support while we fix our form settings.",
    };
  }

  try {
    // Kit v3 API — form subscribe (api_key in body, not header)
    // https://developers.kit.com/api-reference/v3/forms
    // V3 key from: app.kit.com → Settings → Developer → V3 Key section
    const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        api_key: apiKey,
        email: normalizedEmail,
      }),
    });

    const body = await res.text();
    let data: { subscription?: unknown; error?: string; message?: string } = {};
    try {
      data = JSON.parse(body) as typeof data;
    } catch {
      /* ignore parse errors */
    }

    if (!res.ok) {
      const kitMessage = data.message ?? data.error ?? body;
      console.error(`Kit v3 form error: ${res.status}`, kitMessage);
      const normalizedMessage =
        typeof kitMessage === "string" ? kitMessage.toLowerCase() : "";
      if (
        normalizedMessage.includes("entity you were trying to find doesn't exist") ||
        normalizedMessage.includes("form not found")
      ) {
        return {
          ok: false,
          error: "Signup is temporarily unavailable. Please contact support while we fix our form settings.",
        };
      }
      // Surface Kit's error when useful (e.g. "Invalid API key", "Form not found")
      const userError =
        typeof kitMessage === "string" && kitMessage.length < 120
          ? kitMessage
          : "Signup failed. Please try again.";
      return { ok: false, error: userError };
    }

    if (data.error) {
      console.error("Kit v3 response error:", data.error);
      return { ok: false, error: data.error };
    }

    const subscriptionState = (() => {
      if (data.subscription && typeof data.subscription === "object") {
        const maybeState = (data.subscription as { state?: unknown }).state;
        if (maybeState === "active" || maybeState === "inactive") {
          return maybeState;
        }
      }
      return "active";
    })();

    return { ok: true, state: subscriptionState };
  } catch (err) {
    console.error("Kit form fetch error:", err);
    return { ok: false, error: "Could not reach the signup service. Please try again." };
  }
}
