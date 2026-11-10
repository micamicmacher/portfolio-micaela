import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

function rutaEnPublic(ruta: string) {
  return join(process.cwd(), "public", ruta.replace(/^\/+/, ""));
}

/**
 * Indica si un archivo existe dentro de la carpeta "public".
 * Se evalúa al compilar el sitio, así que después de agregar un archivo
 * hay que volver a compilar (en `npm run dev` alcanza con recargar).
 */
export function existeEnPublic(ruta: string): boolean {
  if (!ruta) return false;
  return existsSync(rutaEnPublic(ruta));
}

/**
 * Devuelve una imagen de "public" como data URL para la vista previa.
 * Detecta el formato por el contenido del archivo (no por la extensión),
 * y devuelve null si no existe o no es JPG/PNG, así el build nunca falla.
 */
export function imagenComoDataUrl(ruta: string): string | null {
  if (!existeEnPublic(ruta)) return null;
  const datos = readFileSync(rutaEnPublic(ruta));
  let tipo: string | null = null;
  if (datos[0] === 0xff && datos[1] === 0xd8) tipo = "image/jpeg";
  else if (datos.subarray(0, 4).toString("hex") === "89504e47") tipo = "image/png";
  if (!tipo) return null;
  return `data:${tipo};base64,${datos.toString("base64")}`;
}
