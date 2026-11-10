import { site } from "@/content/site";
import { ListaConPuntos, Seccion } from "@/components/comunes";
import { IconoAtencion, IconoRedes, IconoVentas } from "@/components/iconos";

// Un ícono por bloque, en el mismo orden que en site.ts.
const iconos = [IconoVentas, IconoAtencion, IconoRedes];

export function QueHago() {
  const { queHago } = site;

  return (
    <Seccion
      id="que-hago"
      titulo={queHago.titulo}
      bajada={queHago.bajada}
      className="border-t border-borde bg-superficie"
    >
      <ul className="grid gap-5 lg:grid-cols-3">
        {queHago.bloques.map((bloque, i) => {
          const Icono = iconos[i % iconos.length];
          return (
            <li key={bloque.titulo} className="rounded-2xl border border-borde bg-fondo p-6">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-acento-claro text-acento-oscuro">
                <Icono />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold">{bloque.titulo}</h3>
              <p className="mt-2 text-texto-suave">{bloque.texto}</p>
              <div className="mt-4">
                <ListaConPuntos items={bloque.puntos} />
              </div>
            </li>
          );
        })}
      </ul>
    </Seccion>
  );
}
