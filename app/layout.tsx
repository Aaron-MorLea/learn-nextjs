export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}
      <h1>Viva México Cabrones!!!</h1>
      </body>
    </html>
  );
}
