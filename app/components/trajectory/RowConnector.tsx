// Indicador de "próximo" entre dois cards da mesma linha do grid. Renderiza dois
// visuais diferentes por CSS (não por JS) para não duplicar cards inteiros no DOM:
// em coluna única (mobile) vira uma seta para baixo; a partir de md, vira uma seta
// para a direita, acompanhando a leitura esquerda→direita da linha.
export default function RowConnector() {
  return (
    <div
      className="flex items-center justify-center py-1 text-gold/50 md:py-0"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 md:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-5-5m5 5l5-5" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="hidden h-4 w-4 md:block"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-5-5m5 5l-5 5" />
      </svg>
    </div>
  );
}
