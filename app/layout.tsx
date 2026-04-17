export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Viva México Cabrones!</h1>
        {children}
      </body>
    </html>
  );
}
