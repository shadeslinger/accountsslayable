import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";

/**
 * Dynamic OpenGraph image generator.
 *
 * Query params (all optional):
 *   title    — main headline (default: "Accounts Slayable")
 *   subtitle — secondary line (default: "Personal finance, unfiltered")
 *   accent   — "sage" | "coral" (default: "sage")
 *   pillar   — pillar number like "04" (renders top-right badge if set)
 *
 * Referenced from page metadata:
 *   openGraph.images = [{ url: "/api/og?title=...&subtitle=...&accent=coral" }]
 *
 * Note: Satori (which `ImageResponse` uses under the hood) requires every
 * non-leaf element to have `display: "flex"` explicitly. Do not use
 * `display: block`.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = (
    searchParams.get("title") ?? "Accounts Slayable"
  ).slice(0, 140);
  const subtitle = (
    searchParams.get("subtitle") ?? "Personal finance, unfiltered"
  ).slice(0, 200);
  const accentParam = searchParams.get("accent");
  const accent = accentParam === "coral" ? "#FF6B6B" : "#87A96B";
  const accentDark = accentParam === "coral" ? "#E85555" : "#6B8A53";
  const pillar = searchParams.get("pillar");

  const SAGE = "#87A96B";
  const CREAM = "#F7F5F3";
  const CHARCOAL = "#2D2D2D";
  const CHARCOAL_LIGHT = "#555555";
  const MUTED = "#999999";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: CREAM,
          fontFamily:
            '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
          position: "relative",
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            display: "flex",
            width: 28,
            height: "100%",
            backgroundColor: accent,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            padding: "72px 80px",
            justifyContent: "space-between",
          }}
        >
          {/* Top row: wordmark + optional pillar badge */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 24,
                letterSpacing: 4,
                color: SAGE,
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Accounts Slayable
            </div>
            {pillar && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 18,
                  color: accentDark,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  padding: "10px 18px",
                  borderRadius: 9999,
                  backgroundColor: `${accent}22`,
                }}
              >
                Topic {pillar} / 06
              </div>
            )}
          </div>

          {/* Middle: title + subtitle */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 40,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: title.length > 60 ? 62 : 76,
                color: CHARCOAL,
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: -1,
                maxWidth: 1000,
              }}
            >
              {title}
            </div>
            {subtitle && (
              <div
                style={{
                  display: "flex",
                  marginTop: 28,
                  fontSize: 30,
                  color: CHARCOAL_LIGHT,
                  lineHeight: 1.35,
                  maxWidth: 960,
                }}
              >
                {subtitle}
              </div>
            )}
          </div>

          {/* Bottom: URL + tagline */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 40,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: MUTED,
                fontWeight: 500,
              }}
            >
              accountsslayable.com
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                color: MUTED,
                fontStyle: "italic",
              }}
            >
              Slay your accounts, not your sanity
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
