export default function Servicios() {
  return (
    <section id="servicios" className="bg-white px-6 py-28 text-black md:px-10">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-600">
            Servicios
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Soluciones para hacer crecer tu marca
          </h2>

          <p className="text-lg text-gray-600">
            No se trata solo de publicar contenido. Se trata de construir una
            presencia digital que genere confianza, atraiga clientes y haga crecer tu negocio.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <div className="group rounded-3xl border border-gray-200 p-8 transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-6 text-4xl">📱</div>

            <h3 className="mb-4 text-2xl font-semibold">
              Gestión de redes
            </h3>

            <p className="mb-6 text-gray-600">
              Planificamos y ejecutamos contenido estratégico para que tu marca
              tenga constancia y una imagen profesional.
            </p>

            <span className="text-sm font-semibold text-green-600 opacity-0 transition group-hover:opacity-100">
              Ver más →
            </span>
          </div>

          {/* Card 2 */}
          <div className="group rounded-3xl border border-gray-200 p-8 transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-6 text-4xl">🎨</div>

            <h3 className="mb-4 text-2xl font-semibold">
              Diseño de contenido
            </h3>

            <p className="mb-6 text-gray-600">
              Creamos piezas visuales atractivas que transmiten profesionalismo
              y captan la atención de tus potenciales clientes.
            </p>

            <span className="text-sm font-semibold text-green-600 opacity-0 transition group-hover:opacity-100">
              Ver más →
            </span>
          </div>

          {/* Card 3 */}
          <div className="group rounded-3xl border border-gray-200 p-8 transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-6 text-4xl">🚀</div>

            <h3 className="mb-4 text-2xl font-semibold">
              Estrategia digital
            </h3>

            <p className="mb-6 text-gray-600">
              Definimos acciones claras para generar consultas, mejorar tu
              posicionamiento y aumentar tus oportunidades de venta.
            </p>

            <span className="text-sm font-semibold text-green-600 opacity-0 transition group-hover:opacity-100">
              Ver más →
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}