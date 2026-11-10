import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Ícono para iPhone/iPad (por ejemplo, al agregar el sitio a la pantalla de inicio).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#b4472a",
          color: "#ffffff",
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        {site.iniciales}
      </div>
    ),
    size,
  );
}
