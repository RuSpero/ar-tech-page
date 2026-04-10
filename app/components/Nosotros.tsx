export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-gray-100 px-6 py-24 text-black">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
            Nosotros
          </p>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Más que publicaciones: construimos presencia digital
          </h2>
          <p className="mb-4 text-lg leading-8 text-gray-700">
            En AR-Tech trabajamos con negocios, marcas y emprendedores que
            necesitan verse mejor, comunicar con claridad y generar más
            oportunidades desde internet.
          </p>
          <p className="text-lg leading-8 text-gray-700">
            Nuestro enfoque combina estrategia, diseño y orden. No buscamos solo
            que tu perfil se vea lindo, sino que transmita confianza, autoridad
            y resultados.
          </p>
        </div>

        <div className="rounded-3xl bg-black p-8 text-white shadow-xl">
          <h3 className="mb-6 text-2xl font-semibold">
            Lo que buscamos para tu marca
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>• Imagen profesional y coherente</li>
            <li>• Contenido con intención y estrategia</li>
            <li>• Más confianza frente a potenciales clientes</li>
            <li>• Mayor claridad en tu propuesta de valor</li>
            <li>• Una presencia digital lista para crecer</li>
          </ul>
        </div>
      </div>
    </section>
  );
}