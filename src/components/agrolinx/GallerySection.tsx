import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Granja avícola moderna",
    title: "Granja Avícola Moderna",
    category: "Avícola"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Acompañamiento técnico",
    title: "Acompañamiento Técnico",
    category: "Servicios"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Granja porcina",
    title: "Instalaciones Porcinas",
    category: "Porcina"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Planta de alimentos",
    title: "Planta de Alimentos",
    category: "Procesamiento"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Laboratorio de calidad",
    title: "Control de Calidad",
    category: "Laboratorio"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Equipo veterinario",
    title: "Equipo Veterinario",
    category: "Servicios"
  }
];

const categories = ["Todos", "Avícola", "Porcina", "Servicios", "Procesamiento", "Laboratorio"];

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === "Todos" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-muted/30 to-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            📸 Galería
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestro trabajo en <span className="text-primary">imágenes</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre las instalaciones, procesos y resultados que caracterizan nuestro compromiso con la excelencia.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-background border border-border text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-white/80">{image.category}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                <h3 className="text-xl font-semibold mb-1">{selectedImage.title}</h3>
                <p className="text-white/80">{selectedImage.category}</p>
              </div>

              {/* Navigation buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};