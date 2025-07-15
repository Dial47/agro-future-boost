import { Header } from "@/components/agrolinx/Header";
import { HeroSection } from "@/components/agrolinx/HeroSection";
import { StatsSection } from "@/components/agrolinx/StatsSection";
import { AboutSection } from "@/components/agrolinx/AboutSection";
import { ImpactSection } from "@/components/agrolinx/ImpactSection";
import { GallerySection } from "@/components/agrolinx/GallerySection";
import { PillarsSection } from "@/components/agrolinx/PillarsSection";
import { PartnersSection } from "@/components/agrolinx/PartnersSection";
import { ContactSection } from "@/components/agrolinx/ContactSection";
import { Footer } from "@/components/agrolinx/Footer";
import { ScrollToTop } from "@/components/agrolinx/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ImpactSection />
        <GallerySection />
        <PillarsSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
