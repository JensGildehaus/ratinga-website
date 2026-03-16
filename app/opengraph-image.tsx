import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const lion = readFileSync(join(process.cwd(), "app/icon.png"));
  const lionSrc = `data:image/png;base64,${lion.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0px",
        }}
      >
        {/* Lion head */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={lionSrc} width={110} height={110} alt="" />

        {/* Claim */}
        <div
          style={{
            marginTop: "28px",
            fontSize: "52px",
            fontWeight: "700",
            color: "#0a0a0a",
            letterSpacing: "-1px",
            display: "flex",
            gap: "12px",
          }}
        >
          <span>built with</span>
          <span style={{ color: "#D12B2B" }}>AI.</span>
          <span>made to work.</span>
        </div>

        {/* Domain */}
        <div
          style={{
            marginTop: "20px",
            fontSize: "22px",
            color: "#9ca3af",
            letterSpacing: "1px",
          }}
        >
          ratinga.de
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
