import type { ReactNode } from "react";
import { site } from "@/content/site";

export const enlaceWhatsapp = `https://wa.me/${site.contacto.whatsappNumero}?text=${encodeURIComponent(
  site.contacto.whatsappMensaje,
)}`;

export const enlaceEmail = `mailto:${site.contacto.email}`;

export const botonPrimario =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-acento px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-acento-oscuro";

export const botonSecundario =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-borde bg-superficie px-6 py-3 font-semibold text-texto transition-colors hover:border-acento hover:text-acento-oscuro";

/** Enlace que abre en una pestaña nueva y lo avisa a lectores de pantalla. */
export function EnlaceExterno({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (se abre en una pestaña nueva)</span>
    </a>
  );
}

export function Seccion({
  id,
  titulo,
  bajada,
  etiqueta,
  children,
  className = "",
}: {
  id: string;
  titulo: string;
  bajada?: string;
  etiqueta?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className={`py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <header className="mb-10 max-w-2xl">
          {etiqueta && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-acento">
              {etiqueta}
            </p>
          )}
          <h2
            id={`${id}-titulo`}
            className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {titulo}
          </h2>
          {bajada && <p className="mt-3 text-lg text-texto-suave">{bajada}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

export function ListaConPuntos({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-acento" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
