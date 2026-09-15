import { trajectoryItems } from './data';
import TimelineItem from './TimelineItem';

// Conteúdo da rota /trajetoria: a lista vertical completa (todos os marcos, sem corte),
// reaproveitando o TimelineItem.tsx que já existia antes da prévia em grid entrar na
// home (Trajectory.tsx). Sem "id=trajetoria" aqui — essa âncora é da seção da home; esta
// página tem sua própria URL.
export default function TrajectoryFull() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 max-w-2xl md:mb-20">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Trajetória completa
            </span>
          </div>
          <h2 className="text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Cada etapa da evolução entre{' '}
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
