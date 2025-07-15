import { Badge } from "@/components/ui/badge";
import { Quote, Users2, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AboutSection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: visualRef, isVisible: visualVisible } = useScrollAnimation();

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div 
            ref={contentRef}
            className={`transition-all duration-1000 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="mb-16">
              <Badge className="badge-secondary mb-6">Nuestra historia</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Una familia comprometida con el{" "}
                <span className="text-primary">agro venezolano</span>
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-surface-600 leading-relaxed">
                Somos <strong className="text-foreground">Agrolinx</strong>, una empresa familiar que nació del amor por el campo venezolano y
                la convicción de que la industria pecuaria es fundamental para el desarrollo de nuestro país.
              </p>
              
              <div className="quote-accent">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-lg font-medium text-primary-dark italic mb-2">
                  "Creemos que cada granja tiene el potencial de ser extraordinaria. 
                  Nuestro trabajo es ayudarla a llegar ahí."
                </p>
                <p className="text-sm text-primary">- Equipo fundador Agrolinx</p>
              </div>
              
              <p className="text-lg text-surface-600 leading-relaxed">
                Trabajamos de la mano con empresas líderes globales, integrando{" "}
                <strong className="text-foreground">tecnología, innovación y conocimiento</strong>
                {" "}para construir el agro del futuro, siempre con el acompañamiento cercano que caracteriza a las
                empresas familiares.
              </p>
            </div>
          </div>
          
          {/* Visual */}
          <div 
            ref={visualRef}
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              visualVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80"
                alt="Equipo Agrolinx en granja porcina - Acompañamiento técnico"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm font-medium">
                  Acompañamiento técnico en granja porcina - Carabobo
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/10 text-center">
                <Users2 className="w-8 h-8 text-secondary mx-auto mb-2" />
                <p className="font-semibold text-foreground">Empresa familiar</p>
                <p className="text-sm text-secondary">Valores sólidos</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-foreground">Innovación</p>
                <p className="text-sm text-primary">Tecnología global</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};