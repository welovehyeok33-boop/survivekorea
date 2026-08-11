import { ImageResponse } from "next/og";

export const alt = "한국에서 살아남기 — 중장년에게 꼭 필요한 정보들";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Load only the glyphs we actually render, so the font subset stays small.
async function loadKoreanFont(text: string) {
  const url = `https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@800&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/
  );
  if (resource) {
    const res = await fetch(resource[1]);
    if (res.status === 200) return res.arrayBuffer();
  }
  throw new Error("failed to load font");
}

export default async function Image() {
  const brand = "한국에서 살아남기";
  const headline = "중장년에게 꼭 필요한 정보들";
  const subtitle = "기초연금 · 국민연금 · 정부지원 · 건강 · 스마트폰 · 재취업";
  const glyphs = brand + headline + subtitle;

  let fontData: ArrayBuffer | null = null;
  try {
    fontData = await loadKoreanFont(glyphs);
  } catch {
    fontData = null;
  }

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
          fontFamily: fontData ? "Noto Sans KR" : "sans-serif",
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
            {brand}
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            marginTop: "44px",
            fontSize: "72px",
            fontWeight: 800,
            color: "#111111",
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          {headline}
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            fontSize: "30px",
            color: "#6b7280",
          }}
        >
          {subtitle}
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
    {
      ...size,
      ...(fontData
        ? {
            fonts: [
              {
                name: "Noto Sans KR",
                data: fontData,
                weight: 800 as const,
                style: "normal" as const,
              },
            ],
          }
        : {}),
    }
  );
}
