'use client';

import { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contato" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">FALE</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#E91E8C]">
              CONOSCO
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#E91E8C] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-start space-x-4 p-6 rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#0B0B0D] border border-gray-800 hover:border-[#7C3AED] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#E91E8C] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Endereço</h3>
                  <p className="text-gray-400">2750 Goodwin Avenue, Washington, USA</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start space-x-4 p-6 rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#0B0B0D] border border-gray-800 hover:border-[#7C3AED] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#E91E8C] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-400">contato@oreonteam.com.br</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start space-x-4 p-6 rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#0B0B0D] border border-gray-800 hover:border-[#7C3AED] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#E91E8C] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Telefone</h3>
                  <p className="text-gray-400">509-364-0482</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white focus:border-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 transition-all duration-300"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white focus:border-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 transition-all duration-300"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white focus:border-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 transition-all duration-300 resize-none"
                  placeholder="Descreva seu projeto ou dúvida..."
                  required
                />
              </div>

              <button
                type="submit"
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#E91E8C] text-white font-bold text-sm uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#7C3AED]/50 rounded-lg"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Enviar Mensagem</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
