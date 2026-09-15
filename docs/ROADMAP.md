<!--
  Criado junto do PR de documentação inicial do projeto.
  Objetivo: dar uma ordem sugerida de desenvolvimento das próximas áreas do site,
  para que cada nova branch/feature tenha escopo claro e revisável em um PR pequeno.
-->

# Roadmap

Ordem sugerida para continuar o desenvolvimento do currículo. Cada fase pode (e deve) virar uma ou mais branches `feature/...` separadas, com seu próprio PR — não é necessário concluir uma fase inteira antes de abrir um PR.

## Fase 1 — Fundação ✅ (em andamento)

- [x] Header com navegação e menu mobile
- [x] Seção "Sobre Mim" (Hero)
- [x] Correções estruturais: `<main>` único, tokens de cor, placeholders de navegação
- [ ] Revisão dos PRs de correção e documentação iniciais

## Fase 2 — Conteúdo principal do currículo

Substituir os placeholders criados na Fase 1 por conteúdo real, uma seção por vez/PR:

- [ ] **`#trajetoria`**: linha do tempo de formação acadêmica (FATEC Araras) e experiências profissionais.
- [ ] **`#projetos`**: grade de cards com os principais projetos (nome, descrição curta, tecnologias, link para o repositório/demo).
- [ ] **`#habilidades`**: lista/grade de tecnologias e competências (pode reaproveitar os ícones de badge já usados no README).

## Fase 3 — Conversão (contato)

- [ ] **`#contato`**: informações de contato (e-mail, LinkedIn, GitHub) e/ou link direto para currículo em PDF.
- [ ] Footer simples no `layout.tsx` (créditos, ano, links rápidos), se fizer sentido.

## Fase 4 — Refinamento

- [ ] Metadata por seção / Open Graph (imagem de preview ao compartilhar o link do site).
- [ ] Passagem de acessibilidade: contraste de texto, `alt` de imagens, foco visível em elementos navegáveis por teclado.
- [ ] Adicionar a prop `sizes` no `<Image fill>` da foto de perfil (aviso já aparece no console em modo dev).
- [ ] Checagem de responsividade em telas pequenas reais (não só emulador).

## Fase 5 — Publicação

- [ ] Deploy (ex: Vercel).
- [ ] Domínio próprio, se houver.
- [ ] Link do site publicado adicionado ao README.

---

Ao terminar um item, marque o checkbox neste arquivo como parte do próprio PR que o implementa — assim o roadmap fica sempre refletindo o estado real do projeto.
