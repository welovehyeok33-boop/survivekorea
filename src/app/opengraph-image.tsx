import { ImageResponse } from "next/og";

export const alt =
  "SurviveKorea — the honest guide to living long-term in Korea";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#ffffff",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              display: "flex",
              borderRadius: "9999px",
              overflow: "hidden",
              border: "3px solid #e5e7eb",
            }}
          >
            <div style={{ width: "32px", height: "64px", background: "#1B4FA0" }} />
            <div style={{ width: "32px", height: "64px", background: "#CD2E3A" }} />
          </div>
          <div
            style={{
              marginLeft: "22px",
              fontSize: "42px",
              fontWeight: 800,
              color: "#111111",
            }}
          >
            SurviveKorea
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            marginTop: "44px",
            fontSize: "70px",
            fontWeight: 800,
            color: "#111111",
            lineHeight: 1.12,
            letterSpacing: "-2px",
          }}
        >
          The honest guide to living in Korea
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            fontSize: "32px",
            color: "#6b7280",
          }}
        >
          Housing · Visas · Banking · Health · Transport · Daily life
        </div>

        {/* Accent bars */}
        <div style={{ display: "flex", marginTop: "60px" }}>
          <div
            style={{
              width: "190px",
              height: "12px",
              background: "#CD2E3A",
              borderRadius: "9999px",
            }}
          />
          <div
            style={{
              width: "90px",
              height: "12px",
              background: "#1B4FA0",
              borderRadius: "9999px",
              marginLeft: "12px",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
