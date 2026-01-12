import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn, Camera, Image, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { galleryImages, galleryCategories, GalleryImage } from "@/data/gallery";
import CountUpNumber from "@/components/CountUpNumber";
import { motion } from "framer-motion";

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === "todos"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Navbar />
      
      {/* Hero Section - Enhanced */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <Badge className="bg-primary/10 text-primary px-4 py-2 mb-6">
              <Camera className="w-3 h-3 mr-1" />
              Galeria de Fotos
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Conheça Nossa </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Estrutura</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja fotos dos nossos cursos, clínica, eventos e formandos. 
              Mais de 25 anos transformando vidas através da educação.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                { icon: Image, label: `${galleryImages.length}+ Fotos` },
                { icon: Camera, label: "Cursos e Eventos" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md"
                >
                  <stat.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter - Enhanced */}
      <section className="py-6 sticky top-16 z-40 bg-background/95 backdrop-blur-lg border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? "bg-primary shadow-lg shadow-primary/25" 
                    : "hover:bg-primary/5"
                }`}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Enhanced */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredImages.map((image, index) => (
              <AnimatedSection 
                key={image.id} 
                delay={index * 0.03} 
                direction="scale"
                className={`${index % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square shadow-lg"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Content on hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-7 h-7 text-white" />
                    </div>
                    {image.title && (
                      <p className="text-white font-semibold text-center text-lg drop-shadow-lg">{image.title}</p>
                    )}
                    <Badge className="mt-2 bg-secondary/90 backdrop-blur-sm">{image.categoryLabel}</Badge>
                  </div>
                  
                  {/* Category badge always visible */}
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-0 transition-opacity md:opacity-100 md:group-hover:opacity-0">
                    <Badge className="bg-white/90 text-foreground text-xs">{image.categoryLabel}</Badge>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog - Enhanced */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 border-0 bg-transparent overflow-hidden">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -top-12 right-0 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-foreground transition-all z-50 shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>
          
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[85vh] object-contain bg-black/90"
              />
              {selectedImage.title && (
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <p className="text-white font-bold text-xl mb-2">{selectedImage.title}</p>
                  <Badge className="bg-secondary/90">{selectedImage.categoryLabel}</Badge>
                </div>
              )}
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

      {/* Stats Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 25, suffix: "+", label: "Anos de História" },
              { value: 5000, suffix: "+", label: "Alunos Formados" },
              { value: 20, suffix: "+", label: "Cursos Disponíveis" },
              { value: 98, suffix: "%", label: "Satisfação" }
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center text-primary-foreground">
                  <CountUpNumber 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold" 
                  />
                  <p className="text-primary-foreground/80 mt-2 text-lg">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Quer fazer parte dessa </span>
              <span className="text-primary">história?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Inscreva-se em um dos nossos cursos e transforme sua carreira profissional.
            </p>
            <Link to="/cursos">
              <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                Ver Nossos Cursos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      </main>
    </PageTransition>
  );
};

export default GalleryPage;
