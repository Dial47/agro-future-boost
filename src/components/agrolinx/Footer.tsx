import { Leaf, Phone, Mail, MessageCircle, Target, Users, TrendingUp, Shield } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-surface-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Agrolinx</span>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Empresa familiar comprometida con el futuro del sector pecuario en Venezuela.
            </p>
            <div className="p-4 bg-surface-800 rounded-lg">
              <p className="text-primary-light font-medium italic">
                "Creemos en el agro. Creamos futuro."
              </p>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto rápido</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Phone className="w-4 h-4 text-primary-light" />
                <span>+58 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Mail className="w-4 h-4 text-primary-light" />
                <span>contacto@agrolinx.com.ve</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <MessageCircle className="w-4 h-4 text-whatsapp" />
                <span>WhatsApp disponible</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection("nosotros")}
                className="block text-sm text-white/80 hover:text-primary-light transition-colors"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection("impacto")}
                className="block text-sm text-white/80 hover:text-primary-light transition-colors"
              >
                Historias de impacto
              </button>
              <button 
                onClick={() => scrollToSection("pilares")}
                className="block text-sm text-white/80 hover:text-primary-light transition-colors"
              >
                Nuestros pilares
              </button>
              <button 
                onClick={() => scrollToSection("aliados")}
                className="block text-sm text-white/80 hover:text-primary-light transition-colors"
              >
                Aliados estratégicos
              </button>
              <button 
                onClick={() => scrollToSection("contacto")}
                className="block text-sm text-white/80 hover:text-primary-light transition-colors"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nuestros servicios</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Target className="w-4 h-4 text-primary-light" />
                <span>Consultoría técnica</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Users className="w-4 h-4 text-primary-light" />
                <span>Acompañamiento integral</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <TrendingUp className="w-4 h-4 text-primary-light" />
                <span>Optimización de procesos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Shield className="w-4 h-4 text-primary-light" />
                <span>Bioseguridad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">Nuestros aliados</h4>
          <div className="flex flex-wrap gap-6">
            <a 
              href="https://premex.co/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              Premex - Nutrición Animal
            </a>
            <a 
              href="https://okuo.bio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Okuo - Bioseguridad
            </a>
            <a 
              href="https://latam.alura.bio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <span className="w-2 h-2 bg-purple rounded-full"></span>
              Alura - Salud Animal
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-surface-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              <p>© {currentYear} Agrolinx. Todos los derechos reservados.</p>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span className="text-base">🇻🇪</span>
              <span>Hecho en Venezuela</span>
              <span className="text-white/40">•</span>
              <span>Impulsando el agro con visión global</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};