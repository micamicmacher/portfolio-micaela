import { site } from "@/content/site";
import { Encabezado } from "@/components/encabezado";
import { Inicio } from "@/components/inicio";
import { QueHago } from "@/components/que-hago";
import { Lockas } from "@/components/lockas";
import { Experiencia } from "@/components/experiencia";
import { EsteSitio } from "@/components/este-sitio";
import { Contacto } from "@/components/contacto";
import { WhatsappFlotante } from "@/components/whatsapp-flotante";

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-50 rounded-full bg-acento px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Saltar al contenido
      </a>
      <Encabezado />
      <main id="contenido" tabIndex={-1} className="focus:outline-none">
        <Inicio />
        <QueHago />
        <Lockas />
        <Experiencia />
        <EsteSitio />
        <Contacto />
      </main>
      <footer className="border-t border-borde pt-8 pb-28">
        <div className="mx-auto max-w-5xl px-5 text-sm text-texto-suave sm:px-8">
          {site.nombre} · {site.pie}
        </div>
      </footer>
      <WhatsappFlotante />
    </>
  );
}
