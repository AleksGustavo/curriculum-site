import { trajectoryItems } from './data';
import TimelineItem from './TimelineItem';

// Seção "Trajetória" (Fase 2.1 do roadmap): substitui o placeholder que existia em
// page.tsx por uma timeline profissional real. Layout de coluna única com a linha
// à esquerda foi escolhido para desktop e mobile: o brief pedia para não forçar
// alternância esquerda/direita se isso prejudicasse a leitura, e uma única coluna
// evita ter que reorganizar o layout inteiro no breakpoint mobile.
// Sem "use client": a seção é só conteúdo estático, não precisa de estado no navegador.
export default function Trajectory() {
  return (
    <section
      id="trajetoria"
      className="scroll-mt-24 border-t border-[#2a2a2a]/40 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 max-w-2xl md:mb-20">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Trajetória
            </span>
          </div>
          <h2 className="text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Uma evolução construída entre{' '}
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold-dark bg-clip-text font-semibold text-transparent">
              desenvolvimento, produto e qualidade
            </span>
            .
          </h2>
        </div>

        <ol className="mt-4">
          {trajectoryItems.map((item, index) => (
            <TimelineItem
              key={item.title}
              {...item}
              isLast={index === trajectoryItems.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
