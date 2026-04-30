"use client";

export default function Contacto() {
  return (
    <section id="contacto" className="bg-black px-6 py-28 text-white md:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-start">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            Contacto
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            ¿Listo para mejorar tu presencia digital?
          </h2>

          <p className="mb-8 text-lg leading-8 text-gray-300">
            Contanos sobre tu negocio y vemos cómo ayudarte a conseguir una
            imagen más profesional, más consultas y mejores oportunidades.
          </p>

          <div className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6">
            <p>
              <span className="font-semibold text-white">WhatsApp:</span>{" "}
              <a
                href="https://wa.me/5493424297529"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 transition hover:text-green-400"
              >
                +54 9 3424 297529
              </a>
            </p>

            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href="mailto:airuspero@gmail.com"
                className="text-gray-300 transition hover:text-green-400"
              >
                airuspero@gmail.com
              </a>
            </p>

            <p>
              <span className="font-semibold text-white">Ubicación:</span>{" "}
              <span className="text-gray-300">Santa Fe, Argentina</span>
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            const nombre = (
              document.getElementById("nombre") as HTMLInputElement
            ).value;
            const email = (
              document.getElementById("email") as HTMLInputElement
            ).value;
            const mensaje = (
              document.getElementById("mensaje") as HTMLTextAreaElement
            ).value;

            const texto = `Hola AR-Tech, soy ${nombre}. Mi email es ${email}. ${mensaje}`;

            const url = `https://wa.me/5493424297529?text=${encodeURIComponent(
              texto
            )}`;

            window.open(url, "_blank");
          }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md"
        >
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-200">
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              required
              placeholder="Tu nombre"
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none transition focus:border-green-400"
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="tuemail@email.com"
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none transition focus:border-green-400"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-200">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              rows={5}
              required
              placeholder="Contanos qué necesitás"
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none transition focus:border-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-green-500 px-6 py-4 font-semibold text-black transition hover:scale-[1.01]"
          >
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}