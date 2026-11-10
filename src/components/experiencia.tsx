import { site } from "@/content/site";
import { Seccion } from "@/components/comunes";

export function Experiencia() {
  const { experiencia } = site;

  return (
    <Seccion
      id="experiencia"
      titulo={experiencia.titulo}
      className="border-y border-borde bg-superficie"
    >
      <ol className="relative ml-1.5 border-l-2 border-borde">
        {experiencia.puestos.map((puesto) => (
          <li key={`${puesto.empresa}-${puesto.cargo}`} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[9px] size-4 rounded-full border-4 border-superficie bg-acento"
            />
            <p className="text-sm font-semibold text-acento-oscuro">{puesto.periodo}</p>
            <h3 className="mt-1 font-serif text-xl font-semibold">
              {puesto.cargo}
              <span className="font-sans text-lg font-normal text-texto-suave">
                {" "}
                · {puesto.empresa}
              </span>
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {puesto.tareas.map((tarea) => (
                <li
                  key={tarea}
                  className="rounded-full bg-fondo px-3 py-1 text-sm text-texto-suave ring-1 ring-borde"
                >
                  {tarea}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-borde bg-fondo p-6">
          <h3 className="font-serif text-xl font-semibold">{experiencia.formacion.titulo}</h3>
          <ul className="mt-3 space-y-3">
            {experiencia.formacion.items.map((f) => (
              <li key={f.titulo}>
                <p className="font-semibold">{f.titulo}</p>
                <p className="text-texto-suave">
                  {f.institucion} · {f.periodo}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center rounded-2xl border border-dashed border-borde p-6">
          <p className="text-lg">{experiencia.referencias}</p>
        </div>
      </div>
    </Seccion>
  );
}
