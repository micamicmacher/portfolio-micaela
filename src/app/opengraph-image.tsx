import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { imagenComoDataUrl } from "@/lib/archivos";

// Imagen de vista previa al compartir el enlace (LinkedIn, WhatsApp, etc.).
// Se genera al compilar con los datos de site.ts. Si está la foto en
// "public", la usa; si no, muestra las iniciales.

export const alt = site.seo.imagenAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fondo = "#fbf7f2";
const texto = "#1f1a17";
const textoSuave = "#57504a";
const acento = "#b4472a";
const acentoClaro = "#f6e4dc";

export default function Image() {
  const foto = imagenComoDataUrl(site.foto.archivo);
  const [rol, ...especialidades] = site.titular.split("|").map((p) => p.trim());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: fondo,
          color: texto,
        }}
      >
        <div style={{ width: 24, height: "100%", background: acento }} />
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 80px",
            gap: 56,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                fontSize: 26,
                color: textoSuave,
              }}
            >
              <div style={{ width: 16, height: 16, borderRadius: 999, background: acento }} />
              {site.disponibilidad}
            </div>
            <div style={{ fontSize: 88, fontWeight: 700, marginTop: 28, lineHeight: 1.05 }}>
              {site.nombre}
            </div>
            <div style={{ fontSize: 44, fontWeight: 700, color: acento, marginTop: 20 }}>
              {rol}
            </div>
            <div style={{ fontSize: 30, color: textoSuave, marginTop: 12, lineHeight: 1.35 }}>
              {especialidades.join(" · ")}
            </div>
            <div style={{ fontSize: 26, color: textoSuave, marginTop: 36 }}>{site.ubicacion}</div>
          </div>

          {foto ? (
            <img
              src={foto}
              alt=""
              width={300}
              height={300}
              style={{
                flexShrink: 0,
                borderRadius: 999,
                objectFit: "cover",
                border: `10px solid ${acentoClaro}`,
              }}
            />
          ) : (
            <div
              style={{
                width: 300,
                height: 300,
                flexShrink: 0,
                borderRadius: 999,
                background: acentoClaro,
                color: acento,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 120,
                fontWeight: 700,
              }}
            >
              {site.iniciales}
            </div>
          )}
        </div>
      </div>
    ),
    size,
  );
}
