// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Aleksander Assis | Portfolio Profissional",
  description: "Web Portfolio e Currículo de Aleksander Gustavo Assis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#0a0a0a] text-white antialiased">
        {/* O Header fica aqui para aparecer em todas as páginas */}
        <Header /> 
        
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}