'use client';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="3" fill="#5B21B6" />
                  <circle cx="20" cy="12" r="4" fill="#7C3AED" />
                  <circle cx="32" cy="8" r="3" fill="#5B21B6" />
                  <circle cx="16" cy="24" r="3.5" fill="#7C3AED" />
                  <circle cx="28" cy="28" r="3" fill="#5B21B6" />
                  <line x1="8" y1="8" x2="20" y2="12" stroke="#E91E8C" strokeWidth="2" />
                  <line x1="20" y1="12" x2="32" y2="8" stroke="#E91E8C" strokeWidth="2" />
                  <line x1="20" y1="12" x2="16" y2="24" stroke="#E91E8C" strokeWidth="2" />
                  <line x1="16" y1="24" x2="28" y2="28" stroke="#E91E8C" strokeWidth="2" />
                </svg>
              </div>
              <div className="text-2xl font-bold">
                <span className="text-white">orion</span>
                <span className="text-[#E91E8C]"> team</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Software house especializada em desenvolvimento de soluções digitais de alta complexidade.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Navegação</h3>
            <nav className="space-y-3">
              <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-[#E91E8C] transition-colors duration-300">
                Home
              </button>
              <button onClick={() => scrollToSection('sobre')} className="block text-gray-400 hover:text-[#E91E8C] transition-colors duration-300">
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} className="block text-gray-400 hover:text-[#E91E8C] transition-colors duration-300">
                Serviços
              </button>
              <button onClick={() => scrollToSection('team')} className="block text-gray-400 hover:text-[#E91E8C] transition-colors duration-300">
                Team Orion
              </button>
              <button onClick={() => scrollToSection('contato')} className="block text-gray-400 hover:text-[#E91E8C] transition-colors duration-300">
                Contato
              </button>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Contato</h3>
            <div className="space-y-3 text-gray-400">
              <p>2750 Goodwin Avenue</p>
              <p>Washington, USA</p>
              <p className="pt-2">contato@oreonteam.com.br</p>
              <p>509-364-0482</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Orion Team. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Branding, Design e Desenvolvimento - <span className="text-[#E91E8C]">DcpHouse</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
