import { site } from "@/content/site";
import { enlaceWhatsapp } from "@/components/comunes";
import { IconoChat } from "@/components/iconos";

export function WhatsappFlotante() {
  return (
    <a
      href={enlaceWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
      title={site.contacto.whatsappFlotante}
      className="fixed right-4 bottom-4 z-30 inline-flex size-14 items-center justify-center rounded-full bg-acento text-white shadow-lg ring-4 ring-fondo transition-colors hover:bg-acento-oscuro sm:right-6 sm:bottom-6"
    >
      <IconoChat className="size-7" />
      <span className="sr-only">
        {site.contacto.whatsappFlotante} (se abre en una pestaña nueva)
      </span>
    </a>
  );
}
