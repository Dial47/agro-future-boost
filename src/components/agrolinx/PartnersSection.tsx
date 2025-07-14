import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Heart, ArrowRight, Quote } from "lucide-react";

export const PartnersSection = () => {
  const partners = [
    {
      name: "Premex",
      logo: "P",
      type: "Nutrición Animal",
      description: "Nutrición animal innovadora que potencia la productividad y el bienestar en sistemas pecuarios industrializados.",
      specialties: ["Aditivos", "Premezclas", "Enzimas"],
      url: "https://premex.co/",
      cardClass: "partner-card-blue",
      badgeClass: "badge-secondary",
      logoClass: "bg-gradient-secondary",
      btnClass: "btn-secondary-outline"
    },
    {
      name: "Okuo",
      icon: Shield,
      type: "Bioseguridad", 
      description: "Soluciones de inocuidad y bioseguridad basadas en ciencia y tecnología para garantizar calidad y seguridad.",
      specialties: ["Desinfección", "Limpieza", "Protocolos"],
      url: "https://okuo.bio/",
      cardClass: "partner-card-green",
      badgeClass: "badge-success", 
      logoClass: "bg-gradient-primary",
      btnClass: "btn-outline-hero"
    },
    {
      name: "Alura",
      icon: Heart,
      type: "Salud Animal",
      description: "Soluciones de salud animal que promueven una producción más rentable, saludable y sostenible.",
      specialties: ["Probióticos", "Inmunidad", "Bienestar"],
      url: "https://latam.alura.bio/",
      cardClass: "partner-card-purple", 
      badgeClass: "badge-purple",
      logoClass: "bg-gradient-accent",
      btnClass: "btn-purple-outline"
    }
  ];

  return (
    <section id="aliados" className="py-20 surface-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="badge-purple mb-6">Alianzas globales</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Aliados que <span className="text-primary">transforman</span> la industria
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-surface-600 max-w-3xl mx-auto leading-relaxed">
            Trabajamos con las empresas más innovadoras del mundo para traer soluciones de clase mundial al campo venezolano.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className={`${partner.cardClass} bg-white rounded-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="text-center mb-4">
                <div className={`w-24 h-24 ${partner.logoClass} rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-105`}>
                  {partner.logo ? (
                    <span className="text-3xl font-bold text-white">{partner.logo}</span>
                  ) : (
                    <partner.icon className="w-12 h-12 text-white" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{partner.name}</h3>
                <Badge className={partner.badgeClass}>{partner.type}</Badge>
              </div>
              
              <div className="space-y-4">
                <p className="text-surface-600 leading-relaxed text-center">{partner.description}</p>
                
                <div className="bg-surface-50 p-4 rounded-lg">
                  <p className="font-medium text-sm text-surface-600 mb-2 text-center">Especialidades:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {partner.specialties.map((specialty, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-white text-xs font-medium text-surface-700 rounded-full border border-surface-200"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  asChild
                  variant="outline" 
                  className={`${partner.btnClass} w-full group`}
                >
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Conocer más
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Alliance Quote */}
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-surface-200">
          <Quote className="w-10 h-10 text-primary mx-auto mb-4" />
          <p className="text-xl font-medium text-surface-700 mb-2">
            "Nutrición, bioseguridad y salud animal, en un solo aliado"
          </p>
          <p className="text-surface-600">
            La combinación perfecta de tecnologías globales con conocimiento local
          </p>
        </div>
      </div>
    </section>
  );
};