import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, BarChart3, Star, ArrowRight, Quote } from "lucide-react";

export const ImpactSection = () => {
  const cases = [
    {
      type: "Avícola",
      title: "Granja San Rafael - Zulia",
      description: "Reducción del 18% en mortalidad y mejora del 22% en conversión alimenticia en solo 6 meses.",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
      badge: "badge-secondary",
      icon: TrendingUp,
      tag: "Mejora continua"
    },
    {
      type: "Porcina", 
      title: "Complejo Los Llanos - Carabobo",
      description: "Implementación de bioseguridad integral que resultó en cero brotes en 12 meses.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
      badge: "badge-purple",
      icon: Shield,
      tag: "Bioseguridad total"
    },
    {
      type: "Alimentos",
      title: "Planta Industrial - Aragua", 
      description: "Optimización nutricional que aumentó la producción diaria en 30% manteniendo la calidad premium.",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
      badge: "badge-accent",
      icon: BarChart3,
      tag: "Máxima eficiencia"
    }
  ];

  return (
    <section id="impacto" className="py-20 hero-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="badge-success mb-6">Casos de éxito</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Historias que <span className="text-primary">transforman</span> el campo
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-surface-600 max-w-2xl mx-auto leading-relaxed">
            Cada granja tiene una historia. Estas son algunas de las transformaciones que hemos logrado juntos.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((caseItem, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 impact-card-hover"
            >
              <div className="relative">
                <img 
                  src={caseItem.image}
                  alt={`${caseItem.title} - Caso de éxito Agrolinx`}
                  className="w-full h-48 object-cover"
                />
                <Badge className={`${caseItem.badge} absolute top-4 left-4`}>
                  {caseItem.type}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{caseItem.title}</h3>
                <p className="text-surface-600 leading-relaxed mb-4">{caseItem.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <caseItem.icon className="w-4 h-4" />
                    <span>{caseItem.tag}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-surface-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-surface-200">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <Badge className="badge-success">Testimonio destacado</Badge>
              </div>
              
              <Quote className="w-12 h-12 text-primary mb-6" />
              
              <blockquote className="text-xl md:text-2xl font-medium text-surface-700 leading-relaxed mb-6">
                "Agrolinx no solo nos vendió productos, nos acompañó en cada paso de la transformación. 
                Hoy nuestra granja es 40% más eficiente y nuestros animales están más sanos que nunca."
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">JR</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">José Rodríguez</p>
                  <p className="text-sm text-surface-600">Gerente General, Avícola El Progreso</p>
                </div>
              </div>
            </div>
            
            <div className="justify-self-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                alt="José Rodríguez - Testimonio Agrolinx"
                className="w-full max-w-xs h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};