'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    // Mantive a transparência /50 para ver as estrelas do fundo fixo
    <section id="sobre" className="py-32 relative overflow-hidden bg-[#0B0B0D]/50">
      
      {/* --- CAMADAS DE FUNDO (GLOWS RESTAURADOS) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        
        
        {/* 2. Glow Rosa no Canto Inferior Esquerdo (RESTAURADO) */}
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#E91E8C] rounded-full mix-blend-screen filter blur-[120px] opacity-10" />
        
        {/* Vignette Central */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B0B0D_100%)] opacity-80" />

      </div>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* --- 1. BLOCO DA IMAGEM --- */}
          <div className="relative">
            <div className="relative w-full aspect-square flex items-center justify-center">
              
              {/* --- BRILHO ATRÁS DO LOGO (RESTAURADO) --- */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/30 to-[#E91E8C]/30 rounded-full blur-3xl" />
              
              <div className="relative z-10 w-full h-full">
                <Image 
                  src="/image.png" 
                  alt="Foto da Orion Team"
                  fill 
                  priority
                  className="object-contain scale-110 md:scale-125 drop-shadow-2xl" 
                />
              </div>
            </div>
          </div>

          {/* --- 2. BLOCO DO TEXTO --- */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-[#7C3AED]">A ORION</span>
                <br />
                <span className="text-white">TEAM</span>
              </h2>
              <div className="w-24 h-1 bg-[#E91E8C]" />
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              A Orion Team é uma software house especializada em projeto e desenvolvimento de software de alta complexidade, seja web, chat bots, APIs, web scraping ou integração com outros sistemas.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Somos uma empresa nova, integrada por uma equipe séria e comprometida composta por quatro profissionais associados com as mesmas intenções de crescimento e fortalecimento da marca, oferecendo projetos e softwares de qualidade.
            </p>

            <button className="group relative px-8 py-3 border-2 border-[#7C3AED] text-white font-bold text-sm uppercase tracking-wider overflow-hidden transition-all duration-300">
              <span className="absolute inset-0 bg-[#7C3AED] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative z-10">Entrar em Contato</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}