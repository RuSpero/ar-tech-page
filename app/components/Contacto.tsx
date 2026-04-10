"use client";

export default function Contacto() {
  return (
    <section id="contacto" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Contacto
          </p>

          <h2 className="mb-5 text-4xl font-bold md:text-5xl">
            Hablemos de tu proyecto
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-8 text-gray-300">
            Si querés mejorar tu presencia digital, ordenar tu comunicación o
            lanzar una landing profesional, escribinos y vemos cómo ayudarte.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href="mailto:ruben.spero@gmail.com"
                className="transition hover:text-green-400"
              >
                ruben.spero@gmail.com
              </a>
            </p>

            <p>
              <span className="font-semibold text-white">WhatsApp:</span>{" "}
              <a
                href="https://wa.me/5493426271923"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-green-400"
              >
                +54 9 3426 271923
              </a>
            </p>

            <p>
              <span className="font-semibold text-white">Ubicación:</span>{" "}
              Santa Fe, Argentina
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
            const url = `https://wa.me/5493426271923?text=${encodeURIComponent(
              texto
            )}`;

            window.open(url, "_blank");
          }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
        >
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-200">
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              placeholder="Tu nombre"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-green-400"
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="tuemail@email.com"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-green-400"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-200">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              rows={5}
              placeholder="Contanos qué necesitás"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-green-500 px-6 py-4 font-semibold text-black transition hover:scale-[1.01]"
          >
            Enviar consulta
          </button>
        </form>
      </div>
    </section>
  );
}