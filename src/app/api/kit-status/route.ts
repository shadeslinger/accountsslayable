import { NextResponse } from "next/server";

/**
 * Debug route to verify Kit env vars are loaded on Vercel.
 * Gated behind KIT_DEBUG_TOKEN env var — returns 404 in production
 * unless ?token=<KIT_DEBUG_TOKEN> is provided.
 * GET /api/kit-status?token=<KIT_DEBUG_TOKEN>
 */
export async function GET(request: Request) {
  const debugToken = process.env.KIT_DEBUG_TOKEN;
  if (!debugToken) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  const { searchParams } = new URL(request.url);
  if (searchParams.get("token") !== debugToken) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const hasFormId = Boolean(process.env.KIT_FORM_ID);
  const hasApiKey = Boolean(process.env.KIT_API_KEY);
  const configured = hasFormId && hasApiKey;
  const formId = String(process.env.KIT_FORM_ID ?? "");
  const apiKey = String(process.env.KIT_API_KEY ?? "");
  const formIdLooksNumeric = /^\d+$/.test(formId);

  let formIdExistsForApiKey: boolean | null = null;
  let formsCount: number | null = null;
  let apiReachable = false;
  let apiStatus: number | null = null;
  let apiError: string | null = null;

  if (configured) {
    try {
      const formsRes = await fetch(`https://api.convertkit.com/v3/forms?api_key=${apiKey}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      });

      apiStatus = formsRes.status;
      apiReachable = formsRes.ok;

      const text = await formsRes.text();
      if (formsRes.ok) {
        const parsed = JSON.parse(text) as { forms?: Array<{ id?: number }> };
        const formIds = (parsed.forms ?? []).map((form) => String(form.id ?? ""));
        formsCount = formIds.length;
        formIdExistsForApiKey = formIds.includes(formId);
      } else {
        apiError = text.slice(0, 200);
      }
    } catch (err) {
      apiError = err instanceof Error ? err.message : "Unknown Kit API error";
    }
  }

  return NextResponse.json({
    configured,
    hasFormId,
    hasApiKey,
    formIdLooksNumeric,
    formIdPrefix: hasFormId ? `${formId.slice(0, 4)}...` : null,
    apiReachable,
    apiStatus,
    formsCount,
    formIdExistsForApiKey,
    apiError,
  });
}
