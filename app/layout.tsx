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

        {/* [FIX] Este é o único elemento <main> de toda a aplicação (landmark de
            acessibilidade). Páginas individuais, como app/page.tsx, não devem renderizar
            seu próprio <main> — antes a Home tinha um <main> aninhado dentro deste,
            o que é HTML inválido e confunde leitores de tela. */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}