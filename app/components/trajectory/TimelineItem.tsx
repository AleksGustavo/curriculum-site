import Image from 'next/image';
import type { TrajectoryItem } from './data';

// Item individual da timeline. Recebe "isLast" em vez de calcular a partir de props
// implícitas porque é o próprio item que decide se desenha a linha conectando ao
// próximo marco — mantém a lista (Trajectory.tsx) simples, sem lógica de layout.
type TimelineItemProps = TrajectoryItem & { isLast: boolean };

export default function TimelineItem({
  period,
  title,
  description,
  tags,
  logo,
  isLast,
}: TimelineItemProps) {
  return (
    <li className="relative flex gap-6 md:gap-8">
      {/* Coluna do marcador: ponto + trecho de linha até o próximo item.
          Usar flex-1 na linha (em vez de calcular sua altura manualmente) faz ela
          se ajustar sozinha a qualquer altura de conteúdo, em qualquer breakpoint. */}
      <div className="flex flex-col items-center">
        <span
          className="h-3 w-3 shrink-0 rounded-full bg-gold ring-4 ring-background"
          aria-hidden="true"
        />
        {!isLast && (
          <span className="mt-1 w-px flex-1 bg-[#2a2a2a]" aria-hidden="true" />
        )}
      </div>

      <div className={`flex-1 min-w-0 ${isLast ? '' : 'pb-12'}`}>
        {/* Card: cada marco virou uma caixa visível (borda + fundo sutil) em vez de
            texto solto, para comportar o logotipo do projeto no canto superior
            esquerdo, como pedido. O logotipo é opcional (ver data.ts) — sem ele, cai
            no avatar com a inicial do título, então o layout não quebra por falta de
            arquivo de imagem. */}
        <div className="rounded-2xl border border-[#2a2a2a] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-gold/30 md:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#111] md:h-14 md:w-14">
              {logo ? (
                <Image
                  src={logo}
                  alt={`Logotipo — ${title}`}
                  width={56}
                  height={56}
                  className="h-full w-full object-contain p-2"
                />
              ) : (
                <span
                  className="text-lg font-bold text-gold md:text-xl"
                  aria-hidden="true"
                >
                  {title.charAt(0)}
                </span>
              )}
            </div>

            <div className="min-w-0 pt-0.5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {period}
              </p>
              <h3 className="mt-1 text-lg font-semibold leading-snug text-white md:text-xl">
                {title}
              </h3>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
            {description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[#2a2a2a] px-3 py-1 text-[10px] uppercase tracking-wider text-gray-400"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
