import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { galleryImages } from "@/data/gallery";

const HomeGalleryPreview = () => {
  const previewImages = galleryImages.slice(0, 6);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 px-4 py-2 text-sm font-semibold mb-4">
            <Camera className="w-4 h-4 mr-1 inline" />
            Galeria
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Nossa </span>
            <span className="text-primary">Estrutura</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça nossas instalações modernas e equipadas para proporcionar 
            a melhor experiência de aprendizado.
          </p>
        </AnimatedSection>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {previewImages.map((image, index) => (
            <AnimatedSection 
              key={image.id} 
              delay={index * 0.1} 
              direction="scale"
              className={index === 0 ? "col-span-2 row-span-2" : ""}
            >
              <Link 
                to="/galeria" 
                className={`group relative block overflow-hidden rounded-2xl ${
                  index === 0 ? "h-80 md:h-96" : "h-40 md:h-48"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Badge className="bg-white/90 text-foreground">
                    {image.categoryLabel}
                  </Badge>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.5} className="text-center">
          <Link to="/galeria">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg transition-all group"
            >
              Ver Galeria Completa
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HomeGalleryPreview;
