import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, TrendingUp, Award } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative pt-20 pb-32 hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--surface-300)) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <Badge className="badge-primary mb-6 animate-pulse">
              🇻🇪 Empresa familiar venezolana
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="text-primary">Aliados del campo,</span>
              <br />
              socios del futuro
            </h1>
            
            <p className="text-xl text-surface-600 leading-relaxed mb-8">
              Transformamos la producción pecuaria venezolana con{" "}
              <strong className="text-primary">ciencia, nutrición y resultados reales</strong>. 
              Más que proveedores, somos tus compañeros de crecimiento.
            </p>
            
            <div className="flex items-center gap-4 p-4 bg-white/80 rounded-xl border border-primary/10 mb-8">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-surface-700 font-medium">"Cerca del campo, cerca de ti"</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("impacto")}
                size="lg"
                className="btn-hero group"
              >
                Ver nuestro impacto
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection("contacto")}
                variant="outline"
                size="lg"
                className="btn-outline-hero"
              >
                Hablemos de tu proyecto
              </Button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80"
                alt="Granja avícola moderna en Venezuela - Tecnología Agrolinx"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm font-medium">
                  Granja avícola tecnificada - Zulia, Venezuela
                </p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-surface-200 float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-success">+25%</p>
                  <p className="text-sm text-surface-600">Mejora promedio</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-surface-200 float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-surface-800">Resultados comprobados</p>
                  <p className="text-sm text-surface-600">En granjas venezolanas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};