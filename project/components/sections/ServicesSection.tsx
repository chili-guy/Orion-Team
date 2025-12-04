'use client';

import { Code, Globe, MessageSquare, Cpu, GitMerge, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Sistemas Web',
    description: 'Soluções digitais para otimizar os processos realizados diariamente em sua empresa, tornando os processos manuais mais simples, rápidos e eficazes.',
  },
  {
    icon: Code,
    title: 'Web Scraping',
    description: 'Mineração na internet que envolve extrair informações relevantes de determinado site para depois serem analisadas de forma mais ágil em seu negócio.',
  },
  {
    icon: MessageSquare,
    title: 'Chat Bots',
    description: 'Software capaz de conversar com uma pessoa de maneira tão natural quanto você é capaz de imaginar, atendendo suas necessidades de forma rápida e assertiva.',
  },
  {
    icon: Cpu,
    title: "API's",
    description: 'Software capaz de conversar com uma pessoa de maneira tão natural quanto você é capaz de imaginar, atendendo suas necessidades de forma rápida e assertiva.',
  },
  {
    icon: GitMerge,
    title: 'Integração de Sistemas',
    description: 'Comunicação automatizada entre sistemas, seja API ou Robôs. Por exemplo: consultar a existência de diversas ativas de uma empresa, seja algum sistema federal, estadual ou municipal.',
  },
  {
    icon: Sparkles,
    title: 'Soluções Digitais',
    description: 'Desenvolvimento de soluções personalizadas que atendem às necessidades específicas do seu negócio, com foco em inovação e tecnologia de ponta.',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-32 relative">
      <div className="absolute inset-0 bg-[#7C3AED]/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">SOLUÇÕES DIGITAIS PARA</span>
            <br />
            <span className="text-white">OTIMIZAR OS PROCESSOS</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#E91E8C]">
              REALIZADOS DIARIAMENTE
            </span>
            <br />
            <span className="text-white">EM SUA EMPRESA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tornando os processos manuais mais simples, rápidos e eficazes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0B0B0D] p-8 rounded-lg border border-gray-800 hover:border-[#7C3AED] transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-[#E91E8C]/0 group-hover:from-[#7C3AED]/10 group-hover:to-[#E91E8C]/10 rounded-lg transition-all duration-300" />

              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#E91E8C] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E91E8C] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
