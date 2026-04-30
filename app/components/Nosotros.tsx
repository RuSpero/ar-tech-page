export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-gray-100 px-6 py-28 text-black md:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-600">
            Nosotros
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Convertimos ideas en presencia digital profesional
          </h2>

          <p className="mb-5 text-lg leading-8 text-gray-700">
            En AR-Tech ayudamos a negocios, emprendedores y marcas a comunicar
            mejor, verse más profesionales y generar más oportunidades desde internet.
          </p>

          <p className="text-lg leading-8 text-gray-700">
            Combinamos estrategia, diseño y tecnología para crear soluciones
            digitales simples, modernas y enfocadas en resultados reales.
          </p>
        </div>

        <div className="rounded-[2rem] bg-black p-8 text-white shadow-2xl">
          <h3 className="mb-8 text-2xl font-semibold">
            Nuestra forma de trabajar
          </h3>

          <div className="space-y-5">
            <div className="rounded-2xl bg-white/5 p-5">
              <p className="mb-1 font-semibold text-green-400">01. Estrategia</p>
              <p className="text-gray-300">
                Primero entendemos tu negocio, tu cliente ideal y tus objetivos.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <p className="mb-1 font-semibold text-green-400">02. Diseño</p>
              <p className="text-gray-300">
                Creamos una imagen clara, moderna y coherente con tu marca.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <p className="mb-1 font-semibold text-green-400">03. Acción</p>
              <p className="text-gray-300">
                Implementamos piezas, contenidos y herramientas listas para captar clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}