import { site } from "@/content/site";
import { ListaConPuntos, Seccion } from "@/components/comunes";

export function Lockas() {
  const { lockas } = site;

  return (
    <Seccion id="lockas" etiqueta={lockas.etiqueta} titulo={lockas.nombre}>
      <p className="-mt-6 mb-10 text-lg text-texto-suave">
        {lockas.rol} · {lockas.periodo}
      </p>

      <div className="grid gap-5 lg:grid-cols-3">
        <article className="rounded-2xl bg-acento p-6 text-white sm:p-8">
          <h3 className="font-serif text-xl font-semibold">{lockas.queEra.titulo}</h3>
          <p className="mt-3 text-lg leading-relaxed">{lockas.queEra.texto}</p>
        </article>

        <article className="rounded-2xl border border-borde bg-superficie p-6 sm:p-8">
          <h3 className="font-serif text-xl font-semibold">{lockas.queHacia.titulo}</h3>
          <div className="mt-4">
            <ListaConPuntos items={lockas.queHacia.puntos} />
          </div>
        </article>

        <article className="rounded-2xl border border-borde bg-superficie p-6 sm:p-8">
          <h3 className="font-serif text-xl font-semibold">{lockas.queAprendi.titulo}</h3>
          <div className="mt-4">
            <ListaConPuntos items={lockas.queAprendi.puntos} />
          </div>
        </article>
      </div>

      {lockas.metricas.length > 0 && (
        <dl className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lockas.metricas.map((m) => (
            <div
              key={m.detalle}
              className="flex flex-col rounded-2xl border border-borde bg-superficie p-6"
            >
              <dt className="order-2 mt-1 text-texto-suave">{m.detalle}</dt>
              <dd className="order-1 font-serif text-3xl font-semibold text-acento">{m.valor}</dd>
            </div>
          ))}
        </dl>
      )}
    </Seccion>
  );
}
