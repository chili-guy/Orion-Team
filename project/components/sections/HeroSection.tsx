'use client';

import { useState, useEffect } from 'react'; // 1. Importar hooks para animação
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar a animação

  // 2. Ativar a animação logo após o componente montar
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 md:pt-0">

      {/* --- BACKGROUNDS (Inalterados) --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/star.jpg"
          alt="Background Hero"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(91, 33, 182, 0.4) 0%, transparent 50%), radial-gradient(ellipse at bottom left, rgba(124, 58, 237, 0.3) 0%, transparent 50%)',
        }}
      />
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-700/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* --- ÁREA DE CONTEÚDO --- */}
      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        
        {/* Container com Animação de Entrada Controlada pelo 'isVisible' */}
        <div 
          className={`flex flex-col items-center text-center max-w-5xl mx-auto transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          
          <div className="mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E91E8C] to-transparent mb-12" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-8 tracking-tight min-h-[160px] md:min-h-[200px] flex items-center justify-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .typeString('<span class="text-white">SOMOS UMA </span>')
                  .typeString('<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#E91E8C]">SOFTWARE </span>')
                  .typeString('<span class="text-[#E91E8C]">HOUSE</span>')
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                cursor: '<span class="text-[#E91E8C] animate-pulse">|</span>',
              }}
            />
          </h1>

          {/* PARÁGRAFO COM EFEITO DE DIGITAÇÃO */}
          <div className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed min-h-[60px] md:min-h-[90px] flex items-center justify-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2500) // Espera o título terminar antes de começar
                  .changeDelay(30) // Digita um pouco mais rápido que o título
                  .typeString('Especializada em projeto e desenvolvimento de software de alta complexidade.')
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                cursor: '', // Sem cursor piscando no final deste texto para ficar mais limpo
                delay: 30,
              }}
            />
          </div>

          {/* Botão com delay extra na animação CSS para aparecer por último */}
          <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={scrollToContact}
              className="group relative px-12 py-4 bg-transparent border-2 border-[#E91E8C] text-white font-bold text-sm uppercase tracking-wider overflow-hidden transition-all duration-300 hover:text-white mx-auto"
            >
              <span className="absolute inset-0 bg-[#E91E8C] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative z-10">Entrar em Contato</span>
            </button>
          </div>

        </div>
      </div>

      <section className="relative w-full pb-32">
  {/* Conteúdo da seção */}

  <div className="
    absolute 
    bottom-20 md:bottom-6 
    left-1/2 transform -translate-x-1/2 
    animate-bounce 
    z-10
  ">
    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
      <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse" />
    </div>
  </div>
</section>
