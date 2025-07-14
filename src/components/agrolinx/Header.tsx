import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Agrolinx</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-surface-600 hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium text-surface-600 hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection("impacto")}
              className="text-sm font-medium text-surface-600 hover:text-primary transition-colors"
            >
              Impacto
            </button>
            <button 
              onClick={() => scrollToSection("aliados")}
              className="text-sm font-medium text-surface-600 hover:text-primary transition-colors"
            >
              Aliados
            </button>
            <button 
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium text-surface-600 hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("contacto")}
              className="btn-hero"
            >
              Contáctanos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
            <nav className="flex flex-col py-4 px-4 gap-2">
              <button 
                onClick={() => scrollToSection("inicio")}
                className="text-left py-2 text-sm font-medium text-surface-600 hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection("nosotros")}
                className="text-left py-2 text-sm font-medium text-surface-600 hover:text-primary transition-colors"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection("impacto")}
                className="text-left py-2 text-sm font-medium text-surface-600 hover:text-primary transition-colors"
              >
                Impacto
              </button>
              <button 
                onClick={() => scrollToSection("aliados")}
                className="text-left py-2 text-sm font-medium text-surface-600 hover:text-primary transition-colors"
              >
                Aliados
              </button>
              <button 
                onClick={() => scrollToSection("contacto")}
                className="text-left py-2 text-sm font-medium text-surface-600 hover:text-primary transition-colors"
              >
                Contacto
              </button>
              <div className="pt-4">
                <Button 
                  onClick={() => scrollToSection("contacto")}
                  className="btn-hero w-full"
                >
                  Contáctanos
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};