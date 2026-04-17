export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <h1>Viva México Cabrones!!!</h1>
    </html>
  );
}
