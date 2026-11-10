import { site } from "@/content/site";

export function Encabezado() {
  return (
    <header className="sticky top-0 z-20 border-b border-borde/80 bg-fondo/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-1.5 sm:px-8">
        <a
          href="#inicio"
          className="inline-flex min-h-11 shrink-0 items-center font-serif text-lg font-semibold"
        >
          {site.nombre}
        </a>
        <nav aria-label="Secciones" className="-mx-2 ml-auto min-w-0 overflow-x-auto [mask-image:linear-gradient(to_right,black_80%,transparent)] md:[mask-image:none]">
          <ul className="flex gap-1 whitespace-nowrap text-sm font-medium">
            {site.menu.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex min-h-11 items-center rounded-full px-3 text-texto-suave transition-colors hover:bg-acento-claro hover:text-acento-oscuro"
                >
                  {item.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
