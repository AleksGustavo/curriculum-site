<!--
  Criado junto do PR de documentação inicial do projeto.
  Objetivo: como este é "apenas" um site de currículo (baixa complexidade),
  a documentação é intencionalmente enxuta — o essencial para alguém entender
  o projeto em poucos minutos, sem processos de documentação pesados.
-->

# Estrutura do Projeto

Documentação básica de como o site de currículo está organizado. Como é um projeto pequeno (um currículo, não uma aplicação complexa), esta documentação é propositalmente curta.

## Visão geral

Stack: Next.js (App Router) + React + TypeScript + Tailwind CSS v4. O site é majoritariamente **uma única página** (`/`) com seções empilhadas verticalmente, navegadas por âncoras (`#sobre`, `#trajetoria`, etc.), no estilo comum de sites de portfólio/currículo — mais a rota `/trajetoria`, que existe à parte para não deixar a home muito extensa (ver seção "Trajetória" abaixo).

## Arquivos principais

| Arquivo | Responsabilidade |
|---|---|
| `app/layout.tsx` | Layout raiz. Define `<html>`, metadata (título/descrição da aba) e renderiza o `Header` + o único `<main>` da aplicação, em todas as rotas. |
| `app/page.tsx` | Página inicial (`/`). Contém todas as seções do currículo (`#sobre`, `#trajetoria`, `#projetos`, `#habilidades`, `#contato`), uma após a outra. |
| `app/trajetoria/page.tsx` | Rota `/trajetoria`: lista **todos** os marcos da trajetória, sem corte. Existe porque a seção `#trajetoria` da home é só uma prévia (ver abaixo). |
| `app/components/Header.tsx` | Menu fixo no topo, com navegação por âncora e versão mobile (menu hambúrguer). Lista de itens do menu vive no array `navItems` dentro do componente. Os links usam caminho absoluto (`/#sobre`, não `#sobre`) porque o Header aparece em toda rota, incluindo `/trajetoria`. |
| `app/components/trajectory/` | Ver seção "Trajetória" abaixo — é grande o suficiente para valer sua própria explicação. |
| `app/globals.css` | Estilos globais e os tokens de cor do tema (ver abaixo). |
| `public/images/` | Imagens estáticas (foto de perfil, logo, e os logotipos de projetos em `public/images/trajectory/`). |

## Regra de ouro: um único `<main>`

`app/layout.tsx` já renderiza o `<main>` que envolve toda a aplicação. **Nenhuma página deve renderizar seu próprio `<main>`** — isso quebra a semântica HTML e cria dois landmarks de acessibilidade para leitores de tela. Páginas devem usar `<div>` ou `<>...</>` como elemento raiz.

## Tema de cores

A cor de destaque do site (dourado) é definida como tokens em `app/globals.css`, dentro do bloco `@theme inline` do Tailwind v4:

- `gold` (`#d4af37`) — cor principal de destaque (links ativos, botões, ícones).
- `gold-light` (`#f3e5ab`) — variação clara, usada em gradientes e estados de hover/ativo.
- `gold-dark` (`#b8942e`) — variação escura, usada em hover de botões preenchidos.

Use as classes `bg-gold`, `text-gold`, `border-gold` (e as variantes `-light`/`-dark`) em vez de valores hexadecimais soltos (`bg-[#d4af37]`). Isso mantém a cor consistente e fácil de trocar no futuro (um único lugar para editar).

## Seções e navegação

Cada item do menu em `Header.tsx` (`navItems`) aponta para um `id` de `<section>` em `page.tsx`:

| Menu | Âncora | Status |
|---|---|---|
| Sobre Mim | `#sobre` | Implementado (Hero) |
| Trajetória | `#trajetoria` | Implementado (timeline profissional) |
| Projetos | `#projetos` | Placeholder — ver [ROADMAP.md](./ROADMAP.md) |
| Habilidades | `#habilidades` | Placeholder — ver [ROADMAP.md](./ROADMAP.md) |
| Contato (CTA) | `#contato` | Placeholder — ver [ROADMAP.md](./ROADMAP.md) |

Ao adicionar uma seção nova, garanta que o `id` da `<section>` bate exatamente com o `href` usado no `Header.tsx`.

## Trajetória: prévia na home + página completa

A pasta `app/components/trajectory/` tem duas apresentações para o mesmo dado (`data.ts`):

| Arquivo | Onde aparece | O quê |
|---|---|---|
| `Trajectory.tsx` | Home (`#trajetoria`) | Prévia em grid: até 6 marcos (`PREVIEW_LIMIT`), 3 em cima e 3 embaixo, com setas (`RowConnector.tsx`) indicando a ordem cronológica, terminando num botão "Ver Trajetória Completa" que leva a `/trajetoria`. |
| `TrajectoryFull.tsx` | Rota `/trajetoria` | Lista vertical com **todos** os itens de `data.ts`, sem corte, reaproveitando `TimelineItem.tsx`. |

Motivo de existir as duas: a home não deve crescer a cada novo projeto adicionado ao currículo. Novos marcos entram só em `data.ts` — a prévia da home continua mostrando os 6 primeiros, e a lista completa em `/trajetoria` mostra todos automaticamente.

Cada `TrajectoryItem` (`data.ts`) aceita um campo opcional `logo` (caminho para uma imagem em `public/images/trajectory/`). Sem logotipo definido, o card mostra a inicial do título como avatar — não quebra por falta de arquivo de imagem.

## Sobre a versão do Next.js

Este projeto fixa uma versão do Next.js (`next@16.2.10`, ver `package.json`) que traz mudanças em relação a versões anteriores mais conhecidas. A documentação dessa versão específica fica disponível localmente em `node_modules/next/dist/docs/` — vale consultar antes de mudanças estruturais em roteamento, `layout.tsx` ou APIs do framework.
