export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
          Marketing digital y presencia online
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
          Hacemos que tu marca se vea profesional y genere clientes
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
          En AR-Tech ayudamos a negocios y emprendedores a destacar en redes
          sociales con estrategia, diseño y contenido pensado para crecer.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/5493426271923?text=Hola%20AR-Tech,%20quiero%20informaci%C3%B3n%20sobre%20una%20landing%20page"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-green-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
            Quiero mi landing
        </a>

          <a
            href="#servicios"
            className="rounded-lg border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-white/40"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}