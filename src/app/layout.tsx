import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="font-Poppins m-0 w-full ">
        {children}
      </body>
    </html>
  );
}
