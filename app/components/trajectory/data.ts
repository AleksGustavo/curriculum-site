// Dados da timeline separados da apresentação (Trajectory.tsx / TimelineItem.tsx)
// para que atualizar o currículo (novo projeto, nova fase) não exija tocar em JSX/estilos.

export type TrajectoryItem = {
  period: string;
  title: string;
  description: string;
  tags: string[];
  // Caminho para o logotipo do projeto/instituição (ex: "/images/trajectory/constrular.png").
  // Opcional de propósito: nem todo marco tem um logotipo (ex: o item de fechamento
  // "Desenvolvimento, Produto e Qualidade" é um resumo, não um produto). Quando ausente,
  // TimelineItem.tsx mostra a inicial do título como avatar substituto.
  logo?: string;
};

export const trajectoryItems: TrajectoryItem[] = [
  {
    // [FIX] Curso e ano corrigidos: era descrito como "Formação em Desenvolvimento de
    // Software Multiplataforma" com período "2024 — Atual", mas o curso correto é o
    // Técnico em Desenvolvimento de Sistemas, com conclusão prevista para 2027.
    period: 'Conclusão prevista em 2027',
    title: 'Curso Técnico em Desenvolvimento de Sistemas',
    description:
      'Formação técnica com foco em programação, banco de dados, APIs e desenvolvimento de sistemas, aplicada continuamente em projetos reais ao longo do curso na Fatec Araras.',
    tags: ['Programação', 'Banco de Dados', 'APIs', 'Desenvolvimento de Sistemas'],
  },
  {
    period: '2025',
    title: 'ConstruLar — Product Owner e desenvolvimento técnico',
    description:
      'Condução de backlog, requisitos e sprints de um sistema multiunidade de estoque, vendas e transferências, além de participação nas decisões técnicas de arquitetura e modelagem de dados.',
    tags: ['Product Owner', 'Django', 'React', 'MySQL', 'MongoDB', 'Docker'],
  },
  {
    period: '2025 — 2026',
    title: 'PetConnect — aplicativo mobile para gestão de pets',
    description:
      'Desenvolvimento de app mobile integrado a backend e serviços externos, reunindo autenticação, QR Code, histórico médico de pets e infraestrutura em nuvem.',
    tags: ['Flutter', 'Spring', 'MongoDB Atlas', 'Firebase', 'API REST'],
  },
  {
    period: '2026',
    title: 'Lucratix — plataforma de analytics',
    description:
      'Construção de dashboards e relatórios de inteligência de marketing com Next.js e Python, incluindo testes E2E com Playwright e proteção contra brute force.',
    tags: ['Next.js', 'Python', 'PostgreSQL', 'Playwright', 'Segurança'],
  },
  {
    period: '2026',
    title: 'Projeto digital para cliente do setor de arquitetura',
    description:
      'Discovery, levantamento de requisitos e definição de arquitetura da informação para um produto digital real, do planejamento à entrega por etapas.',
    tags: ['Discovery', 'UX', 'Documentação Técnica'],
  },
  {
    period: 'Atual',
    title: 'Desenvolvimento, Produto e Qualidade',
    description:
      'Aprofundamento contínuo em engenharia de software e Quality Assurance, unindo desenvolvimento, automação de testes e visão de produto na construção de aplicações completas.',
    tags: ['QA Automation', 'Testes E2E', 'CI', 'Produto'],
  },
];
