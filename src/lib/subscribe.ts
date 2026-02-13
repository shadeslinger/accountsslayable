"use server";

export async function subscribe(email: string): Promise<{ ok: boolean; error?: string }> {
  const formId = process.env.KIT_FORM_ID;
  const apiKey = process.env.KIT_API_KEY;

  if (!formId || !apiKey) {
    return { ok: false, error: "Email signup is not configured yet. Check back soon!" };
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
        email,
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

    return { ok: true };
  } catch (err) {
    console.error("Kit form fetch error:", err);
    return { ok: false, error: "Could not reach the signup service. Please try again." };
  }
}
