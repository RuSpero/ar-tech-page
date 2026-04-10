export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <p className="text-lg font-semibold">AR-Tech</p>
          <p className="text-sm text-gray-400">
            Presencia digital, estrategia y diseño para negocios.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#servicios" className="transition hover:text-white">
            Servicios
          </a>
          <a href="#nosotros" className="transition hover:text-white">
            Nosotros
          </a>
          <a href="#contacto" className="transition hover:text-white">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}