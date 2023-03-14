export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <h1>Hello World</h1>
      <body>{children}</body>
    </html>
  );
}
