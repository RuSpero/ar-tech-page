export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-24 text-white md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.16),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_25%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2 py-10">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
            Agencia digital
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Conseguí más clientes con una presencia digital profesional
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
            En AR-Tech ayudamos a negocios y emprendedores a destacarse con una
            imagen moderna, contenido estratégico y una comunicación pensada
            para generar consultas reales.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/5493424297529?text=Hola%20AR-Tech,%20quiero%20m%C3%A1s%20informaci%C3%B3n"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-8 py-4 text-center font-semibold text-black transition hover:scale-105"
            >
              Quiero más clientes
            </a>

            <a
              href="#servicios"
              className="rounded-full border border-white/15 px-8 py-4 text-center font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-white/5 p-5">
                <p className="mb-2 text-sm text-gray-400">Marca</p>
                <p className="text-lg font-semibold text-white">
                  Presencia digital moderna
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="mb-2 text-sm text-gray-400">Objetivo</p>
                <p className="text-lg font-semibold text-white">
                  Más consultas, más confianza, más ventas
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="mb-2 text-sm text-gray-400">Enfoque</p>
                <p className="text-lg font-semibold text-white">
                  Estrategia + diseño + contenido
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}