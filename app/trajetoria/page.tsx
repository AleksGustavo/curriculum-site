// app/trajetoria/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import TrajectoryFull from '../components/trajectory/TrajectoryFull';

export const metadata: Metadata = {
  title: 'Trajetória completa | Aleksander Assis',
  description:
    'Todos os marcos da trajetória profissional de Aleksander Gustavo Assis: formação, projetos e evolução em desenvolvimento, produto e qualidade.',
};

export default function TrajetoriaPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <div className="mx-auto max-w-4xl px-6 pt-10">
        <Link
          href="/#trajetoria"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 transition-colors duration-300 hover:text-gold"
        >
          ← Voltar
        </Link>
      </div>
      <TrajectoryFull />
    </div>
  );
}
