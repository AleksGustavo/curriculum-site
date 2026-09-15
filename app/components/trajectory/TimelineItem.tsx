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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {period}
        </p>
        <h3 className="mt-1.5 text-lg md:text-xl font-semibold text-white leading-snug">
          {title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
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
    </li>
  );
}
