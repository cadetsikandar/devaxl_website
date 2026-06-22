import { ImageResponse } from "next/og";

export const alt = "Devaxl — We design, build, and scale SaaS & AI products";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Generated on-demand at runtime (Vercel) rather than prerendered at build —
// avoids @vercel/og's file-path resolution choking on spaces in a local path.
export const dynamic = "force-dynamic";

// Simple branded OG card: near-black canvas, single amber accent.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0C",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -120,
            width: 720,
            height: 720,
            display: "flex",
            background:
              "radial-gradient(circle, rgba(255,182,0,0.20) 0%, transparent 70%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              width: 46,
              height: 46,
              borderRadius: 11,
              background: "#18181E",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFB600",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            X
          </div>
          <div style={{ display: "flex", color: "#9A9A98", fontSize: 24, letterSpacing: 4 }}>
            AI-NATIVE PRODUCT STUDIO
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#F4F4F1",
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            We design, build, and scale
          </div>
          <div
            style={{
              display: "flex",
              color: "#FFB600",
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            SaaS &amp; AI products.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", color: "#F4F4F1", fontSize: 32, fontWeight: 700 }}>
              Devaxl
            </div>
            <div style={{ display: "flex", color: "#9A9A98", fontSize: 20, marginTop: 4 }}>
              Development accelerated
            </div>
          </div>
          <div style={{ display: "flex", color: "#9A9A98", fontSize: 26 }}>devaxl.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
