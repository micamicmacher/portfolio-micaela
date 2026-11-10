import Image from "next/image";
import { site } from "@/content/site";
import { existeEnPublic } from "@/lib/archivos";
import {
  botonPrimario,
  botonSecundario,
  EnlaceExterno,
  enlaceWhatsapp,
} from "@/components/comunes";
import {
  IconoChat,
  IconoDescarga,
  IconoLinkedin,
  IconoUbicacion,
} from "@/components/iconos";

function Foto() {
  const clase =
    "size-28 shrink-0 rounded-full ring-4 ring-superficie shadow-md sm:size-36 md:size-64";

  if (existeEnPublic(site.foto.archivo)) {
    return (
      <Image
        src={site.foto.archivo}
        alt={site.foto.alt}
        width={512}
        height={512}
        sizes="(min-width: 768px) 256px, 144px"
        preload
        className={`${clase} object-cover`}
      />
    );
  }

  // Sin foto: se muestran las iniciales. Es decorativo porque el nombre
  // ya está escrito al lado.
  return (
    <div
      aria-hidden="true"
      className={`${clase} flex items-center justify-center bg-acento-claro font-serif text-4xl font-semibold text-acento-oscuro sm:text-5xl md:text-8xl`}
    >
      {site.iniciales}
    </div>
  );
}

export function Inicio() {
  const { inicio } = site;
  const [rol, ...especialidades] = site.titular.split("|").map((p) => p.trim());
  const hayCv = existeEnPublic(site.cv);

  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div className="aparecer mx-auto flex max-w-5xl flex-col gap-8 px-5 sm:px-8 md:flex-row-reverse md:items-center md:justify-between md:gap-12">
        <Foto />

        <div className="min-w-0">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-borde bg-superficie px-4 py-1.5 text-sm font-medium">
            <span aria-hidden="true" className="latido size-2.5 shrink-0 rounded-full bg-acento" />
            {site.disponibilidad}
          </p>

          <h1
            id="inicio-titulo"
            className="mt-6 font-serif text-[2.75rem] leading-tight font-semibold tracking-tight text-balance sm:text-6xl"
          >
            {site.nombre}
          </h1>

          <p className="mt-4 text-xl font-semibold text-acento sm:text-2xl">{rol}</p>
          {especialidades.length > 0 && (
            <p className="mt-1 text-lg text-texto-suave">{especialidades.join(" · ")}</p>
          )}

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty">
            {inicio.presentacion}
          </p>

          <p className="mt-4 inline-flex items-center gap-1.5 text-texto-suave">
            <IconoUbicacion />
            {site.ubicacion}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <EnlaceExterno href={enlaceWhatsapp} className={botonPrimario}>
              <IconoChat />
              {inicio.botones.whatsapp}
            </EnlaceExterno>
            <EnlaceExterno href={site.contacto.linkedin} className={botonSecundario}>
              <IconoLinkedin />
              {inicio.botones.linkedin}
            </EnlaceExterno>
            {hayCv && (
              <a href={site.cv} download className={botonSecundario}>
                <IconoDescarga />
                {inicio.botones.cv}
                <span className="sr-only"> (PDF)</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
