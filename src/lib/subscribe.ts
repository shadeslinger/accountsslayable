"use server";

export async function subscribe(email: string): Promise<{ ok: boolean; error?: string }> {
  const formId = process.env.KIT_FORM_ID;
  const apiKey = process.env.KIT_API_KEY;

  if (!formId || !apiKey) {
    return { ok: false, error: "Email signup is not configured yet. Check back soon!" };
  }

  try {
    // Kit v4 API: https://developers.kit.com/api-reference/forms/add-subscriber-to-form-by-email-address
    const url = `https://api.kit.com/v4/forms/${formId}/subscribers`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Kit-Api-Key": apiKey,
      },
      body: JSON.stringify({ email_address: email }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`Kit form error: ${res.status} ${res.statusText}`, body);
      return { ok: false, error: "Signup failed. Please try again." };
    }

    return { ok: true };
  } catch (err) {
    console.error("Kit form fetch error:", err);
    return { ok: false, error: "Could not reach the signup service. Please try again." };
  }
}
