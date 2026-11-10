# Portfolio de Micaela Nuñez

Sitio profesional de una sola página de **Micaela Nuñez**, asesora comercial de Mar del Plata, Argentina. Muestra en pocos segundos qué hago (ventas, atención al cliente y redes sociales orientadas a ventas), mi experiencia y cómo contactarme. Estoy disponible para trabajo remoto.

## Cómo lo hice

Construí este sitio con **Claude Code**, una herramienta de inteligencia artificial. No soy programadora: no escribí el código a mano. Describí en lenguaje natural lo que quería (las secciones, los textos, el estilo, qué tenía que entender un reclutador en los primeros segundos) y fui revisando, pidiendo cambios y ajustando cada versión hasta que quedó como lo imaginaba. A esta forma de trabajar se la conoce como *vibe coding*.

Por dentro usa Next.js, TypeScript y Tailwind CSS. No tiene base de datos ni servidor propio, así que se puede publicar gratis en Vercel.

## Cómo editar los textos

**Todo el contenido está en un solo archivo: [`src/content/site.ts`](src/content/site.ts).** Para cambiar un texto, un dato de contacto o un puesto de trabajo no hace falta tocar nada más.

1. Abrí `src/content/site.ts` con cualquier editor de texto (por ejemplo, Visual Studio Code).
2. Buscá el texto que querés cambiar. Está ordenado por sección, en el mismo orden que el sitio: Inicio, Qué hago, Caso destacado, Experiencia, Cómo hice este sitio y Contacto.
3. Cambiá solo lo que está **entre comillas**. Dejá las comillas, las comas y los corchetes como están.
4. Guardá el archivo. Si el sitio está abierto con `npm run dev`, se actualiza solo.

Algunos campos son opcionales: si los dejás vacíos (`""` o `[]`), esa parte no se muestra.

- `repositorio`: el enlace "Ver el código".
- `lockas.metricas`: números del emprendimiento. Completalo solo con datos reales.
- `url`: la dirección pública del sitio, si usás un dominio propio. En Vercel no hace falta.

### Foto y CV

- **Foto:** copiala a `public/foto-micaela.jpg`. Si no está, se muestran las iniciales "MN". Conviene que sea cuadrada, porque se recorta en círculo.
- **CV:** copiá el PDF a `public/CV-Micaela-Nunez.pdf`. Si no está, el botón "Descargar CV" no aparece.

Los nombres tienen que ser exactos, respetando mayúsculas.

## Verlo en tu computadora

Necesitás tener instalado [Node.js](https://nodejs.org) (versión 20 o más nueva).

```bash
npm install     # solo la primera vez
npm run dev
```

Después abrí http://localhost:3000 en el navegador.

Para revisar que todo esté bien antes de publicar:

```bash
npm run lint
npm run build
```

## Publicarlo

Importá este repositorio en https://vercel.com/new. Vercel detecta que es un proyecto Next.js y no hace falta configurar nada.
