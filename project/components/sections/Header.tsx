'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Certifique-se que isso está importado
import { Menu, X } from 'lucide-react';

export default function Header() {
  // ... (o código dos estados e useEffect continua igual) ...
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0B0B0D]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* --- ÁREA DO LOGO ALTERADA --- */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            
            {/* Container da Imagem: Ajuste w-10/h-10 se quiser maior */}
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image 
                src="/logo2.png" // COLOQUE O NOME DO SEU ARQUIVO AQUI (que está na pasta public)
                alt="Logo Orion Team"
                fill // Faz a imagem preencher o container pai (w-10 h-10)
                className="object-contain" // Garante que a logo não distorça
                priority // Carrega mais rápido por ser header
              />
            </div>

            <div className="text-2xl font-bold">
              <span className="text-white">orion</span>
              <span className="text-[#E91E8C]"> team</span>
            </div>
          </div>
          {/* --- FIM DA ÁREA DO LOGO --- */}

          <nav className="hidden md:flex items-center space-x-8">
             {/* ... restante do menu igual ... */}
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-[#E91E8C] transition-colors duration-300 text-sm font-medium uppercase tracking-wider">
              Home
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-[#E91E8C] transition-colors duration-300 text-sm font-medium uppercase tracking-wider">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-white hover:text-[#E91E8C] transition-colors duration-300 text-sm font-medium uppercase tracking-wider">
              Serviços
            </button>
            <button onClick={() => scrollToSection('team')} className="text-white hover:text-[#E91E8C] transition-colors duration-300 text-sm font-medium uppercase tracking-wider">
              Team Orion
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-white hover:text-[#E91E8C] transition-colors duration-300 text-sm font-medium uppercase tracking-wider">
              Contato
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 flex flex-col space-y-4">
            {/* ... menu mobile igual ... */}
             <button onClick={() => scrollToSection('home')} className="text-white hover:text-[#E91E8C] transition-colors text-left">
              Home
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-[#E91E8C] transition-colors text-left">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-white hover:text-[#E91E8C] transition-colors text-left">
              Serviços
            </button>
            <button onClick={() => scrollToSection('team')} className="text-white hover:text-[#E91E8C] transition-colors text-left">
              Team Orion
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-white hover:text-[#E91E8C] transition-colors text-left">
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}