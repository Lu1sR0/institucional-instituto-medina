
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Users, Award, ThumbsUp, Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AnimatedSection from "./AnimatedSection";
import CountUpNumber from "./CountUpNumber";

const testimonials = [
  {
    name: "Ana Paula Costa",
    role: "Massoteraputa",
    course: "Massoterapia",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "O Instituto Medina mudou minha vida! Hoje tenho minha própria clínica e atendo dezenas de clientes por mês. A formação prática fez toda a diferença na minha confiança como profissional.",
    rating: 5
  },
  {
    name: "Carlos Eduardo Lima",
    role: "Quiropraxista",
    course: "Quiropraxia Clínica",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "A qualidade do ensino é excepcional! Os professores são extremamente capacitados e atenciosos. Recomendo a todos que desejam entrar na área de terapias.",
    rating: 5
  },
  {
    name: "Mariana Oliveira",
    role: "Terapeuta Integrativa",
    course: "Drenagem Linfática",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Fiz vários cursos no Instituto e todos superaram minhas expectativas. A metodologia prática é fantástica e o suporte pós-curso é incrível!",
    rating: 5
  },
  {
    name: "Roberto Santos",
    role: "Acupunturista",
    course: "Auriculoterapia",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "O curso de auriculoterapia foi transformador. Aprendi técnicas que aplico diariamente no meu consultório. O investimento valeu cada centavo!",
    rating: 5
  },
  {
    name: "Fernanda Lima",
    role: "Esteticista",
    course: "Massagem Modeladora",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Profissionais incríveis e estrutura de primeira! O certificado me abriu portas no mercado de trabalho. Gratidão eterna ao Instituto Medina!",
    rating: 5
  }
];

const stats = [
  { end: 5000, suffix: "+", label: "Alunos Formados", icon: Users },
  { end: 98, suffix: "%", label: "Taxa de Satisfação", icon: ThumbsUp },
  { end: 4.9, suffix: "", label: "Nota Média", icon: Star, decimals: 1 }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/5 via-white to-primary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 px-4 py-2 text-sm font-semibold mb-4">
            Depoimentos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">O Que Nossos </span>
            <span className="text-primary">Alunos Dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Histórias reais de transformação. Veja como nossos cursos mudaram a vida 
            de milhares de profissionais em todo o Brasil.
          </p>
        </AnimatedSection>

        {/* Stats with Count Up */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <AnimatedSection 
              key={index}
              delay={index * 0.1}
              direction="scale"
            >
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CountUpNumber 
                  end={stat.end} 
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                  className="text-3xl md:text-4xl font-bold text-primary mb-1"
                />
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <AnimatedSection delay={0.2}>
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <CardContent className="p-6 relative">
                      {/* Quote Icon */}
                      <Quote className="absolute top-4 right-4 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
                      
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                        ))}
                      </div>
                      
                      {/* Testimonial Text */}
                      <p className="text-muted-foreground mb-6 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      
                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={`Depoimento de ${testimonial.name}`}
                          className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                          loading="lazy"
                          decoding="async"
                        />
                        <div>
                          <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                          <p className="text-xs text-muted-foreground">Curso: {testimonial.course}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Junte-se a mais de 5.000 profissionais formados</p>
          <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Comece Sua Jornada Hoje
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
