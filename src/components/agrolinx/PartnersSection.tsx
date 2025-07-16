import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Heart, ArrowRight, Quote } from "lucide-react";
import premexImage from "@/assets/partner-premex.jpg";
import okuoImage from "@/assets/partner-okuo.jpg";
import aluraImage from "@/assets/partner-alura.jpg";

export const PartnersSection = () => {
  const partners = [
    {
      name: "Premex",
      logo: "P",
      image: premexImage,
      type: "Nutrición Animal",
      description: "Nutrición animal innovadora que potencia la productividad y el bienestar en sistemas pecuarios industrializados.",
      specialties: ["Aditivos", "Premezclas", "Enzimas"],
      url: "https://premex.co/",
      cardClass: "border-secondary/20 hover:border-secondary/40",
      badgeClass: "bg-secondary/10 text-secondary",
      logoClass: "bg-gradient-to-br from-secondary to-secondary-dark",
      btnClass: "border-secondary/20 hover:bg-secondary hover:text-secondary-foreground"
    },
    {
      name: "Okuo",
      icon: Shield,
      image: okuoImage,
      type: "Bioseguridad", 
      description: "Soluciones de inocuidad y bioseguridad basadas en ciencia y tecnología para garantizar calidad y seguridad.",
      specialties: ["Desinfección", "Limpieza", "Protocolos"],
      url: "https://okuo.bio/",
      cardClass: "border-primary/20 hover:border-primary/40",
      badgeClass: "bg-primary/10 text-primary", 
      logoClass: "bg-gradient-to-br from-primary to-primary-dark",
      btnClass: "border-primary/20 hover:bg-primary hover:text-primary-foreground"
    },
    {
      name: "Alura",
      icon: Heart,
      image: aluraImage,
      type: "Salud Animal",
      description: "Soluciones de salud animal que promueven una producción más rentable, saludable y sostenible.",
      specialties: ["Probióticos", "Inmunidad", "Bienestar"],
      url: "https://latam.alura.bio/",
      cardClass: "border-accent/20 hover:border-accent/40", 
      badgeClass: "bg-accent/10 text-accent",
      logoClass: "bg-gradient-to-br from-accent to-accent-light",
      btnClass: "border-accent/20 hover:bg-accent hover:text-accent-foreground"
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
              className={`${partner.cardClass} bg-card rounded-xl border-2 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Partner Image */}
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img 
                  src={partner.image} 
                  alt={`${partner.name} facilities`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center mb-4">
                <div className={`w-16 h-16 ${partner.logoClass} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  {partner.logo ? (
                    <span className="text-xl font-bold text-white">{partner.logo}</span>
                  ) : (
                    <partner.icon className="w-8 h-8 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{partner.name}</h3>
                <Badge className={partner.badgeClass}>{partner.type}</Badge>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-center text-sm">{partner.description}</p>
                
                <div className="bg-muted/30 p-3 rounded-lg">
                  <p className="font-medium text-xs text-muted-foreground mb-2 text-center">Especialidades:</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {partner.specialties.map((specialty, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-background text-xs font-medium text-foreground rounded-full border border-border"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  asChild
                  variant="outline" 
                  className={`${partner.btnClass} w-full group transition-all duration-300`}
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
        <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10 animate-slide-up">
          <Quote className="w-10 h-10 text-primary mx-auto mb-4" />
          <p className="text-xl font-semibold text-foreground mb-2">
            "Nutrición, bioseguridad y salud animal, en un solo aliado"
          </p>
          <p className="text-muted-foreground">
            La combinación perfecta de tecnologías globales con conocimiento local
          </p>
        </div>
      </div>
    </section>
  );
};