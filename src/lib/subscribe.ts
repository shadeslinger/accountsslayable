"use server";

export async function subscribe(email: string): Promise<{ ok: boolean; error?: string }> {
  const formId = process.env.KIT_FORM_ID;
  const apiKey = process.env.KIT_API_KEY;

  if (!formId || !apiKey) {
    return { ok: false, error: "Email signup is not configured yet. Check back soon!" };
  }

  try {
    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: apiKey, email }),
      }
    );

    if (!res.ok) {
      return { ok: false, error: "Something went wrong. Please try again." };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Something went wrong. Please try again." };
  }
}
