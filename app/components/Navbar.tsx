export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-white">
          AR-Tech
        </a>

        <nav className="hidden gap-6 md:flex">
          <a href="#servicios" className="text-sm text-gray-300 transition hover:text-white">
            Servicios
          </a>
          <a href="#nosotros" className="text-sm text-gray-300 transition hover:text-white">
            Nosotros
          </a>
          <a href="#contacto" className="text-sm text-gray-300 transition hover:text-white">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}