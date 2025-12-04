'use client';

import { Quote } from 'lucide-react';
// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Estilos obrigatórios do Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// Dados dos depoimentos (Pode editar aqui)
const testimonials = [
  {
    company: 'TechCorp',
    initial: 'T', // Se não tiver logo, usa a inicial
    feedback: 'A Orion Team revolucionou nossa gestão interna. A automação implementada reduziu nosso tempo operacional em 40%. Equipe extremamente qualificada.',
    author: 'Roberto Silva, CEO'
  },
  {
    company: 'Inova Varejo',
    initial: 'I',
    feedback: 'O sistema de Chat Bot desenvolvido superou nossas expectativas. O atendimento ao cliente flui 24h por dia com uma naturalidade impressionante.',
    author: 'Ana Souza, Diretora'
  },
  {
    company: 'Logística Express',
    initial: 'L',
    feedback: 'A integração de APIs entre nossos sistemas legados e a nova plataforma web foi impecável. Nenhum dado perdido e performance excelente.',
    author: 'Carlos Mendes, CTO'
  },
  {
    company: 'Finanças Plus',
    initial: 'F',
    feedback: 'O Web Scraping nos forneceu dados de mercado que não tínhamos acesso. A estratégia da empresa mudou para melhor graças a essas informações.',
    author: 'Mariana Lima, Analista'
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-32 relative bg-[#0B0B0D]">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-[#E91E8C]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">O QUE DIZEM</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#E91E8C]">
              NOSSOS PARCEIROS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Histórias de sucesso construídas através de tecnologia e inovação.
          </p>
        </div>

        {/* Carrossel Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16" // Espaço para os pontinhos da paginação
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              {/* CARD NO MESMO PADRÃO DA SEÇÃO DE SERVIÇOS */}
              <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0B0B0D] p-8 rounded-lg border border-gray-800 hover:border-[#7C3AED] transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col">
                
                {/* Efeito Hover no Background do Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-[#E91E8C]/0 group-hover:from-[#7C3AED]/10 group-hover:to-[#E91E8C]/10 rounded-lg transition-all duration-300 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Topo: Logo/Inicial + Nome */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* Quadrado com gradiente (Igual aos ícones de serviço) */}
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#E91E8C] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-2xl font-bold text-white">
                        {item.initial}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#E91E8C] transition-colors duration-300">
                        {item.company}
                      </h3>
                      <p className="text-sm text-gray-500">{item.author}</p>
                    </div>
                  </div>

                  {/* Ícone de aspas decorativo */}
                  <Quote className="w-8 h-8 text-[#7C3AED]/30 mb-4" />

                  {/* Texto */}
                  <p className="text-gray-400 leading-relaxed italic flex-grow">
                    "{item.feedback}"
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CSS Global para customizar a cor dos pontinhos (pagination) */}
        <style jsx global>{`
          .swiper-pagination-bullet {
            background-color: #4B5563;
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background-color: #E91E8C;
            width: 24px;
            border-radius: 4px;
            transition: all 0.3s ease;
          }
        `}</style>
      </div>
    </section>
  );
}