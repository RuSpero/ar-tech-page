import "./globals.css";

export const metadata = {
  title: "AR-Tech",
  description: "Landing page de AR-Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}