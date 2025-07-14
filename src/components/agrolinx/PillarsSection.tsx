import { Badge } from "@/components/ui/badge";
import { Target, Users, Heart } from "lucide-react";

export const PillarsSection = () => {
  const pillars = [
    {
      icon: Target,
      title: "Innovación y tecnología",
      description: "Integramos las últimas tecnologías globales adaptadas a la realidad venezolana.",
      quote: "El agro evoluciona, nosotros vamos contigo",
      cardClass: "pillar-card-blue",
      iconColor: "text-secondary"
    },
    {
      icon: Users,
      title: "Acompañamiento cercano", 
      description: "Soporte técnico personalizado y seguimiento continuo en cada proyecto.",
      quote: "En el campo contigo, en el futuro también",
      cardClass: "pillar-card-green",
      iconColor: "text-primary"
    },
    {
      icon: Heart,
      title: "Compromiso y responsabilidad",
      description: "Resultados concretos y sostenibles para cada cliente y el país.",
      quote: "Comprometidos con el agro, conectados con el futuro",
      cardClass: "pillar-card-amber", 
      iconColor: "text-accent"
    }
  ];

  return (
    <section id="pilares" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="badge-secondary mb-6">Nuestros valores</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Los pilares que nos <span className="text-primary">definen</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className={`${pillar.cardClass} p-6 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="text-center mb-4">
                <div className={`w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110`}>
                  <pillar.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{pillar.title}</h3>
              </div>
              
              <div className="text-center">
                <p className="text-surface-600 leading-relaxed mb-4">{pillar.description}</p>
                <div className="bg-white/80 p-3 rounded-lg">
                  <p className={`${pillar.iconColor} font-medium text-sm italic`}>
                    "{pillar.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inspiration Banner */}
        <div className="text-center p-12 bg-gradient-primary text-white rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            "Creciendo con el campo, avanzando con el país"
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Cada día trabajamos para que el sector pecuario venezolano sea más fuerte, más eficiente y más sostenible.
          </p>
        </div>
      </div>
    </section>
  );
};