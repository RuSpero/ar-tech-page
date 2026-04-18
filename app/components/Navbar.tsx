export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="text-xl font-semibold tracking-wide text-white">
          AR-Tech
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#servicios"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Servicios
          </a>
          <a
            href="#nosotros"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Nosotros
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}