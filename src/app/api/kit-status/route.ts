import { NextResponse } from "next/server";

/**
 * Debug route to verify Kit env vars are loaded on Vercel.
 * Remove or restrict in production once signup works.
 * GET /api/kit-status
 */
export async function GET() {
  const hasFormId = Boolean(process.env.KIT_FORM_ID);
  const hasApiKey = Boolean(process.env.KIT_API_KEY);
  const configured = hasFormId && hasApiKey;

  return NextResponse.json({
    configured,
    hasFormId,
    hasApiKey,
    formIdPrefix: hasFormId ? `${String(process.env.KIT_FORM_ID).slice(0, 4)}...` : null,
  });
}
