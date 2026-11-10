import { site } from "@/content/site";
import { botonSecundario, EnlaceExterno, ListaConPuntos, Seccion } from "@/components/comunes";
import { IconoCodigo } from "@/components/iconos";

export function EsteSitio() {
  const { esteSitio } = site;

  return (
    <Seccion id="este-sitio" etiqueta="Vibe coding" titulo={esteSitio.titulo}>
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-4 text-lg leading-relaxed lg:col-span-3">
          {esteSitio.parrafos.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {site.repositorio && (
            <div className="pt-4">
              <EnlaceExterno href={site.repositorio} className={botonSecundario}>
                <IconoCodigo />
                {esteSitio.enlaceCodigo}
              </EnlaceExterno>
            </div>
          )}
        </div>

        <aside
          aria-labelledby="este-sitio-muestra"
          className="rounded-2xl border border-borde bg-acento-claro p-6 sm:p-8 lg:col-span-2"
        >
          <h3 id="este-sitio-muestra" className="font-serif text-xl font-semibold">
            {esteSitio.queMuestraTitulo}
          </h3>
          <div className="mt-4">
            <ListaConPuntos items={esteSitio.queMuestra} />
          </div>
        </aside>
      </div>
    </Seccion>
  );
}
