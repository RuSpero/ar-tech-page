export default function PruebaSocial() {
  return (
    <section className="bg-white px-6 py-20 text-black">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-12 text-4xl font-bold">
          Resultados reales
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6 shadow-sm">
            <p className="mb-4 text-gray-600">
              "Me ayudaron a ordenar mi Instagram y empecé a recibir consultas todas las semanas."
            </p>
            <span className="text-sm font-semibold">Cliente local</span>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <p className="mb-4 text-gray-600">
              "Pasé de no tener presencia a tener una marca profesional."
            </p>
            <span className="text-sm font-semibold">Emprendedor</span>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <p className="mb-4 text-gray-600">
              "El contenido empezó a generar más interacción y ventas."
            </p>
            <span className="text-sm font-semibold">Negocio</span>
          </div>
        </div>
      </div>
    </section>
  );
}