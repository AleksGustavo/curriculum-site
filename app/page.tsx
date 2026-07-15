// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-[#d4af37]/30">
      
      {/* HERO SECTION - Adicionado espaçamento superior (pt-16 lg:pt-24) para afastar do Header */}
      <section id="sobre" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-16 lg:pt-7 pb-12 md:py-0">
        
        {/* Texto Gigante em Outline ao Fundo */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
          <h1 className="text-[14vw] font-black uppercase tracking-[0.15em] text-transparent stroke-text opacity-30 md:opacity-40">
            DEVELOPER
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* COLUNA ESQUERDA (6 colunas): Texto e Ações */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2">
              <span className="w-8 h-[1px] bg-[#d4af37]"></span>
              <span className="text-[#d4af37] text-xs font-semibold tracking-[0.2em] uppercase">
                Desenvolvedor Web & PO
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
              Design que inspira.<br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b8942e]">
                Código que performa.
              </span>
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              Estudante de Desenvolvimento de Software Multiplataforma focado em criar soluções robustas, arquiteturas limpas e experiências digitais memoráveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                href="#projetos"
                className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#b8942e] transition-all duration-300 text-center shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]"
              >
                Ver Projetos
              </Link>
              <Link
                href="#trajetoria"
                className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-[#2a2a2a] hover:border-[#d4af37]/50 hover:bg-white/5 transition-all duration-300 text-center"
              >
                Minha Trajetória
              </Link>
            </div>
          </div>

          {/* COLUNA DIREITA (6 colunas): Informações com espaçamento e Foto Ajustada */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-end order-1 lg:order-2 relative h-full">
            
            {/* Informações Rápidas - Espaçamento otimizado (mb-4) para manter conexão com a foto sem colar no Header */}
            <div className="w-full max-w-lg lg:max-w-[440px] flex flex-wrap gap-6 justify-center lg:justify-end text-center lg:text-right mb-4 z-20">
              <div className="border-r border-[#2a2a2a]/40 pr-6 last:border-none last:pr-0">
                <p className="text-[9px] tracking-[0.2em] text-gray-500 uppercase">Localização</p>
                <p className="text-xs font-medium text-gray-300">Leme, SP — Brasil</p>
              </div>

              <div className="border-r border-[#2a2a2a]/40 pr-6 last:border-none last:pr-0">
                <p className="text-[9px] tracking-[0.2em] text-gray-500 uppercase">Formação</p>
                <p className="text-xs font-medium text-gray-300">FATEC Araras</p>
              </div>

              <div className="last:border-none last:pr-0">
                <p className="text-[9px] tracking-[0.2em] text-gray-500 uppercase">Status</p>
                <p className="text-xs font-medium text-[#d4af37] flex items-center justify-center lg:justify-end gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Disponível para Estágio
                </p>
              </div>
            </div>

            {/* Container da Imagem - Redimensionado para 440px no Desktop para o encaixe perfeito */}
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[440px] aspect-[4/5] z-10 group">
              
              {/* Glow dourado de fundo */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/5 to-transparent rounded-full blur-3xl opacity-55 transition-opacity duration-500 scale-90 pointer-events-none" />
              
              {/* Suavização de degradê refinada para sumir com perfeição no preto absolute */}
              <div 
                className="relative w-full h-full transition-transform duration-500 group-hover:scale-[1.01]"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.2) 74%, rgba(0,0,0,0) 100%)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.2) 74%, rgba(0,0,0,0) 100%)'
                }}
              >
                <Image
                  src="/images/aleks.png" 
                  alt="Aleksander Gustavo Assis"
                  fill
                  priority
                  className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
                />
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}