// app/components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sincroniza o estado ativo com a hash da URL atual
  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || '#sobre');
    };
    
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Fecha o menu móvel ao redimensionar a tela para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Trajetória', href: '#trajetoria' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Habilidades', href: '#habilidades' },
  ];

  const handleLinkClick = (href: string) => {
    setActiveSection(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#0a0a0a] border-b border-[#2a2a2a]/40 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      {/* Adição da animação keyframe diretamente para o efeito do botão de brilho */}
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logotipo */}
        <Link href="/" className="flex items-center gap-3 group z-50">
          <Image 
            src="/images/logo.png" 
            alt="Logo Aleksander Gustavo Assis" 
            width={50} 
            height={50}
            className="object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
            priority
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-xs tracking-[0.2em] text-[#d4af37] font-medium uppercase transition-colors duration-300 group-hover:text-[#f3e5ab]">
              Aleksander Assis
            </span>
            <span className="text-[10px] tracking-[0.1em] text-gray-400 uppercase">
              Portfolio & CV
            </span>
          </div>
        </Link>

        {/* Navegação Desktop e Tablet (MD para cima) */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={`relative py-3 text-sm font-medium tracking-wide transition-all duration-300 ease-out group outline-none
                  ${isActive 
                    ? 'text-[#f3e5ab] font-semibold scale-105 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]' 
                    : 'text-gray-400 hover:text-[#d4af37] hover:-translate-y-[2px]'
                  }
                `}
              >
                {/* Indicador ATIVO (Losango Minimalista acima do texto) */}
                {isActive && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[8px] text-[#d4af37] animate-pulse">
                    ◆
                  </span>
                )}

                {item.name}

                {/* Linha de HOVER (Expansão a partir do centro) */}
                <span 
                  className={`absolute bottom-0 left-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-all duration-300 ease-out -translate-x-1/2
                    ${isActive 
                      ? 'w-1/2 opacity-70' 
                      : 'w-0 group-hover:w-full group-hover:opacity-100' 
                    }
                  `} 
                />
              </Link>
            );
          })}
        </nav>

        {/* Botão de Contato / Call to Action (Visível em Desktop e Tablet) */}
        <div className="hidden md:block">
          <Link 
            href="#contato" 
            className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] overflow-hidden transition-all duration-300 hover:bg-[#b8942e] hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10">Vamos Conversar</span>
          </Link>
        </div>

        {/* Botão Hambúrguer (Mobile/Tablet - Visível abaixo de MD) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-center items-center md:hidden w-10 h-10 gap-[6px] z-50 rounded-lg border border-[#2a2a2a]/60 bg-[#0e0e0e]/80 hover:border-[#d4af37]/50 active:scale-95 transition-all duration-200"
          aria-label="Abrir menu de navegação"
        >
          <span 
            className={`h-[2px] w-6 bg-[#d4af37] rounded-full transition-all duration-300 ease-out 
              ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}
            `}
          />
          <span 
            className={`h-[2px] w-6 bg-[#d4af37] rounded-full transition-all duration-300 ease-out 
              ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'}
            `}
          />
          <span 
            className={`h-[2px] w-6 bg-[#d4af37] rounded-full transition-all duration-300 ease-out 
              ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}
            `}
          />
        </button>

      </div>

      {/* Overlay do Menu Mobile (Mobile & Tablet) */}
      <div 
        className={`absolute top-0 left-0 w-full h-screen bg-[#0a0a0a]/98 z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden
          ${isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-10 pointer-events-none'
          }
        `}
      >
        <nav className="flex flex-col items-center gap-8 w-full px-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={`relative py-2 text-xl font-medium tracking-widest transition-all duration-300 w-full text-center
                  ${isActive 
                    ? 'text-[#f3e5ab] scale-105 font-bold drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                    : 'text-gray-400 hover:text-[#d4af37]'
                  }
                `}
              >
                {/* Losango sutil ao lado do item ativo no mobile */}
                {isActive && (
                  <span className="inline-block mr-2 text-sm text-[#d4af37] animate-pulse">
                    ◆
                  </span>
                )}
                {item.name}
              </Link>
            );
          })}

          {/* Botão de Contato dentro do Menu Mobile */}
          <div className="w-full max-w-xs mt-6 pt-6 border-t border-[#2a2a2a]/40">
            <Link 
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="relative flex items-center justify-center w-full py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-black bg-[#d4af37] overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              <span className="relative z-10">Vamos Conversar</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}