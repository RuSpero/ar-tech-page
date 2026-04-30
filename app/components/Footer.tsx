export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-white md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-2 text-xl font-semibold">AR-Tech</p>
          <p className="max-w-md text-sm leading-6 text-gray-400">
            Soluciones digitales para marcas, negocios y emprendedores que
            quieren crecer con una presencia profesional.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm text-gray-400">
          <a href="#servicios" className="transition hover:text-white">
            Servicios
          </a>
          <a href="#nosotros" className="transition hover:text-white">
            Nosotros
          </a>
          <a href="#contacto" className="transition hover:text-white">
            Contacto
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} AR-Tech. Todos los derechos reservados.
      </div>
    </footer>
  );
}