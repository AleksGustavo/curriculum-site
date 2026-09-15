import Image from 'next/image';
import type { TrajectoryItem } from './data';

// Card compacto usado no grid da home (Trajectory.tsx). Diferente do TimelineItem.tsx
// (usado na página /trajetoria, com espaço para descrição completa), aqui a descrição é
// limitada a 3 linhas (line-clamp) e só as 3 primeiras tags aparecem — em um grid de 6
// cards, alturas muito desiguais quebram o alinhamento das linhas da timeline.
export default function TrajectoryPreviewCard({
  period,
  title,
  description,
  tags,
  logo,
}: TrajectoryItem) {
  const visibleTags = tags.slice(0, 3);
  const hiddenTagCount = tags.length - visibleTags.length;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#2a2a2a] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-gold/30">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#111]">
          {logo ? (
            <Image
              src={logo}
              alt={`Logotipo — ${title}`}
              width={44}
              height={44}
              className="h-full w-full object-contain p-1.5"
            />
          ) : (
            <span className="text-base font-bold text-gold" aria-hidden="true">
              {title.charAt(0)}
            </span>
          )}
        </div>

        <div className="min-w-0 pt-0.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            {period}
          </p>
          <h3 className="mt-1 text-sm font-semibold leading-snug text-white">
            {title}
          </h3>
        </div>
      </div>

      <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-gray-400">
        {description}
      </p>

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {visibleTags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-[#2a2a2a] px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-gray-400"
          >
            {tag}
          </li>
        ))}
        {hiddenTagCount > 0 && (
          <li className="rounded-full border border-[#2a2a2a] px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-gray-500">
            +{hiddenTagCount}
          </li>
        )}
      </ul>
    </div>
  );
}
