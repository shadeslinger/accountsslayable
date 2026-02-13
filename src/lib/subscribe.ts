"use server";

export async function subscribe(email: string): Promise<{ ok: boolean; error?: string }> {
  const formId = process.env.KIT_FORM_ID;
  const apiKey = process.env.KIT_API_KEY;

  if (!formId || !apiKey) {
    return { ok: false, error: "Email signup is not configured yet. Check back soon!" };
  }

  try {
    const url = `https://api.kit.com/v4/forms/${formId}/subscribers`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ email_address: email }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`Kit API error: ${res.status} ${res.statusText}`, body);
      return { ok: false, error: `Signup failed (${res.status}). Please try again.` };
    }

    return { ok: true };
  } catch (err) {
    console.error("Kit API fetch error:", err);
    return { ok: false, error: "Could not reach the signup service. Please try again." };
  }
}
