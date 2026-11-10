import type { ReactNode } from "react";
import { site } from "@/content/site";
import { EnlaceExterno, enlaceEmail, enlaceWhatsapp, Seccion } from "@/components/comunes";
import { IconoChat, IconoLinkedin, IconoMail } from "@/components/iconos";

function Tarjeta({ icono, medio, dato }: { icono: ReactNode; medio: string; dato: string }) {
  return (
    <>
      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-acento-claro text-acento-oscuro transition-colors group-hover:bg-acento group-hover:text-white">
        {icono}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-texto-suave">{medio}</span>
        <span className="block font-semibold break-words">{dato}</span>
      </span>
    </>
  );
}

const claseTarjeta =
  "group flex h-full items-center gap-4 rounded-2xl border border-borde bg-superficie p-5 transition-colors hover:border-acento";

export function Contacto() {
  const { contacto, contactoSeccion } = site;

  return (
    <Seccion
      id="contacto"
      titulo={contactoSeccion.titulo}
      bajada={contactoSeccion.bajada}
      className="border-t border-borde"
    >
      <ul className="grid gap-4 lg:grid-cols-[1fr_1.4fr_1fr]">
        <li>
          <EnlaceExterno href={enlaceWhatsapp} className={claseTarjeta}>
            <Tarjeta icono={<IconoChat />} medio="WhatsApp" dato={contacto.whatsappVisible} />
          </EnlaceExterno>
        </li>
        <li>
          <a href={enlaceEmail} className={claseTarjeta}>
            <Tarjeta icono={<IconoMail />} medio="Email" dato={contacto.email} />
          </a>
        </li>
        <li>
          <EnlaceExterno href={contacto.linkedin} className={claseTarjeta}>
            <Tarjeta icono={<IconoLinkedin />} medio="LinkedIn" dato={site.nombre} />
          </EnlaceExterno>
        </li>
      </ul>

      <p className="mt-8 text-texto-suave">
        {site.ubicacion} · {site.disponibilidad}
      </p>
    </Seccion>
  );
}
