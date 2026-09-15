import Link from 'next/link';
import { trajectoryItems } from './data';
import TrajectoryPreviewCard from './TrajectoryPreviewCard';
import RowConnector from './RowConnector';

// Seção "Trajetória" da home (Fase 2.3): virou uma PRÉVIA em grid (até 6 marcos, 3 em
// cima e 3 embaixo) em vez da lista vertical completa — com muitos projetos, a lista
// vertical deixava a home extensa demais. A trajetória completa (todos os itens) mora
// na rota /trajetoria (ver TrajectoryFull.tsx), para onde o botão no fim desta seção
// aponta. Isso significa que novos marcos entram em data.ts e continuam cabendo aqui
// sem a home crescer: a prévia sempre mostra só os 6 primeiros.
const PREVIEW_LIMIT = 6;

export default function Trajectory() {
  const preview = trajectoryItems.slice(0, PREVIEW_LIMIT);
  const topRow = preview.slice(0, 3);
  const bottomRow = preview.slice(3, 6);

  return (
    <section
      id="trajetoria"
      className="scroll-mt-24 border-t border-[#2a2a2a]/40 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
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

        <div className="flex flex-col gap-1 md:gap-0">
          <ol className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-x-4 md:gap-y-0">
            {topRow.map((item, index) => (
              <li key={item.title} className="contents">
                <div className="h-full">
                  <TrajectoryPreviewCard {...item} />
                </div>
                {index < topRow.length - 1 && <RowConnector />}
              </li>
            ))}
          </ol>

          {bottomRow.length > 0 && (
            <>
              {/* Conector entre as duas linhas: sempre para baixo, independente do
                  breakpoint — a leitura continua "de cima para baixo" mesmo quando a
                  linha de cima vira 3 colunas lado a lado no desktop. */}
              <div className="flex justify-center py-2 text-gold/50" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m0 0l-5-5m5 5l5-5"
                  />
                </svg>
              </div>

              <ol className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-x-4 md:gap-y-0">
                {bottomRow.map((item, index) => (
                  <li key={item.title} className="contents">
                    <div className="h-full">
                      <TrajectoryPreviewCard {...item} />
                    </div>
                    {index < bottomRow.length - 1 && <RowConnector />}
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>

        <div className="mt-14 flex justify-center md:mt-16">
          <Link
            href="/trajetoria"
            className="rounded-full border border-[#2a2a2a] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-gold/50 hover:bg-white/5"
          >
            Ver Trajetória Completa
          </Link>
        </div>
      </div>
    </section>
  );
}
