export default function Servicios() {
  return (
    <section id="servicios" className="bg-white px-6 py-24 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
            Servicios
          </p>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Qué hacemos por tu marca
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Te ayudamos a comunicar mejor, verte profesional y transformar tu
            presencia digital en una herramienta real para conseguir clientes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
              📱
            </div>
            <h3 className="mb-3 text-2xl font-semibold">Gestión de redes</h3>
            <p className="leading-7 text-gray-600">
              Organizamos el contenido, las publicaciones y la comunicación de
              tu marca para que mantenga presencia, constancia y una imagen
              profesional.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
              🎨
            </div>
            <h3 className="mb-3 text-2xl font-semibold">Diseño de contenido</h3>
            <p className="leading-7 text-gray-600">
              Creamos piezas visuales atractivas, claras y alineadas con tu
              identidad para generar confianza y destacar frente a la competencia.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
              🚀
            </div>
            <h3 className="mb-3 text-2xl font-semibold">Estrategia digital</h3>
            <p className="leading-7 text-gray-600">
              Pensamos acciones concretas para atraer consultas, mejorar tu
              posicionamiento y ayudarte a convertir visibilidad en oportunidades.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}