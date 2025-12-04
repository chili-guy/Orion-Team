'use client';

import { Linkedin, Github, Mail } from 'lucide-react';

const team = [
  {
    name: 'João Silva',
    role: 'CEO & Founder',
    description: 'Especialista em arquitetura de software e gestão de projetos complexos.',
    image: '/orion-01.png',
  },
  {
    name: 'Maria Santos',
    role: 'CTO',
    description: 'Desenvolvedora full-stack com foco em soluções escaláveis e inovadoras.',
    image: '/orion-02.png',
  },
  {
    name: 'Pedro Costa',
    role: 'Tech Lead',
    description: 'Líder técnico especializado em integrações e APIs de alta performance.',
    image: '/orion-03.png',
  },
  {
    name: 'Ana Oliveira',
    role: 'UI/UX Designer',
    description: 'Designer focada em experiências digitais intuitivas e impactantes.',
    image: '/orion-04.png',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/5 via-transparent to-[#7C3AED]/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#E91E8C]">
              NOSSO TIME
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#E91E8C] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0B0B0D] rounded-lg overflow-hidden border border-gray-800 hover:border-[#7C3AED] transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-[#E91E8C]/0 group-hover:from-[#7C3AED]/20 group-hover:to-[#E91E8C]/20 transition-all duration-300" />

              <div className="relative z-10 p-6">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#E91E8C] p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#7C3AED]/20 to-[#E91E8C]/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 text-center group-hover:text-[#E91E8C] transition-colors duration-300">
                  {member.name}
                </h3>

                <p className="text-[#E91E8C] font-medium mb-4 text-center uppercase tracking-wider text-sm">
                  {member.role}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 text-center">
                  {member.description}
                </p>

                <div className="flex justify-center space-x-4">
                  <button className="w-10 h-10 rounded-full bg-[#7C3AED]/20 hover:bg-[#7C3AED] flex items-center justify-center transition-all duration-300 group/icon">
                    <Linkedin className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#7C3AED]/20 hover:bg-[#7C3AED] flex items-center justify-center transition-all duration-300 group/icon">
                    <Github className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#7C3AED]/20 hover:bg-[#7C3AED] flex items-center justify-center transition-all duration-300 group/icon">
                    <Mail className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
