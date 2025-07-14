import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary hover:bg-primary-dark text-white shadow-lg transition-all duration-300 z-50 ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
      size="icon"
      aria-label="Volver arriba"
    >
      <ChevronUp className="w-5 h-5" />
    </Button>
  );
};