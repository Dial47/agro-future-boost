export const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Granjas atendidas" },
    { number: "15%", label: "Reducción mortalidad" },
    { number: "20%", label: "Mejora conversión" },
    { number: "10+", label: "Años de experiencia" }
  ];

  return (
    <section className="py-16 bg-gradient-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};