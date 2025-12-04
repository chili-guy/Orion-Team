'use client';

const metrics = [
  { value: '+57', label: 'Clientes Satisfeitos' },
  { value: '+73', label: 'Projetos Entregues' },
  { value: '+50.000', label: 'Linhas de Código' },
  { value: '+33', label: 'Parceiros de Negócios' },
];

export default function MetricsSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] via-[#E91E8C] to-[#7C3AED]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3">
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-white/90 uppercase tracking-wider font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-white rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-4 border-white rounded-full" />
      </div>
    </section>
  );
}