import "./globals.css";

export const metadata = {
  title: "AR-Tech",
  description: "Gestión de redes sociales para negocios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}

        {/* Botón flotante WhatsApp */}
        <a
          href="https://wa.me/5493424297529"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-black shadow-lg transition hover:scale-110"
        >
          💬
        </a>
      </body>
    </html>
  );
}