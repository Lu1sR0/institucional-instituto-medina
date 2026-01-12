import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Play, Award, Users, BookOpen, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import CountUpNumber from "./CountUpNumber";
import VideoModal from "./VideoModal";

const AboutUs = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const highlights = [
    "Mais de 25 anos de experiência",
    "Professores altamente qualificados",
    "Certificados reconhecidos pela OPISB",
    "Metodologia 100% prática",
    "Suporte pós-curso",
    "Material didático incluso"
  ];

  const stats = [
    { icon: Users, end: 5000, suffix: "+", label: "Formados" },
    { icon: BookOpen, end: 20, suffix: "+", label: "Cursos" },
    { icon: Award, end: 98, suffix: "%", label: "Satisfação" },
    { icon: Heart, end: 25, suffix: "+", label: "Anos" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-primary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <AnimatedSection direction="left" className="relative">
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sessão de massagem terapêutica no Instituto Medina"
                className="rounded-3xl shadow-2xl w-full h-[400px] sm:h-[500px] object-cover"
                loading="lazy"
                decoding="async"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>

            {/* Secondary Image */}
            <AnimatedSection direction="scale" delay={0.3} className="absolute -bottom-8 -right-8 z-20 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Tratamento de auriculoterapia"
                className="w-64 h-64 object-cover rounded-2xl shadow-xl border-4 border-white"
                loading="lazy"
                decoding="async"
              />
            </AnimatedSection>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>

            {/* Video Play Button */}
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group"
              aria-label="Assistir vídeo institucional"
            >
              <Play className="w-8 h-8 text-primary fill-primary ml-1 group-hover:scale-110 transition-transform" />
            </button>

            {/* Stats Card */}
            <AnimatedSection direction="right" delay={0.4} className="absolute -left-4 top-1/4 bg-white rounded-2xl p-4 sm:p-5 shadow-xl z-20 hidden sm:block">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                </div>
                <div>
                  <CountUpNumber end={5000} suffix="+" className="text-2xl sm:text-3xl font-bold text-primary" />
                  <p className="text-muted-foreground text-xs sm:text-sm">Alunos Formados</p>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>

          {/* Video Modal */}
          <VideoModal 
            isOpen={isVideoOpen} 
            onClose={() => setIsVideoOpen(false)}
            videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
          />

          {/* Right - Content */}
          <AnimatedSection direction="right" delay={0.2} className="space-y-8">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm font-semibold">
              Sobre o Instituto
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-foreground">Sua Jornada </span>
              <span className="text-primary">Profissional</span>
              <br className="hidden sm:block" />
              <span className="text-foreground"> Começa </span>
              <span className="text-secondary">Aqui</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              O <strong className="text-primary">Instituto Medina</strong> é referência na formação de 
              profissionais em <strong>Terapia Integrativa</strong>. Há mais de 25 anos, transformamos 
              vidas através da educação de qualidade, formando terapeutas capacitados e prontos para o 
              mercado de trabalho.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Com uma metodologia exclusiva que combina teoria e prática, nossos alunos aprendem 
              fazendo, desenvolvendo habilidades reais que fazem a diferença na carreira profissional.
              Contamos com professores especializados e infraestrutura completa para proporcionar 
              a melhor experiência de aprendizado.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <AnimatedSection key={index} delay={0.3 + index * 0.05} direction="left">
                  <div className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Check className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-foreground font-medium text-sm">{item}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={0.4 + index * 0.1} direction="up">
                  <div className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 group">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <CountUpNumber end={stat.end} suffix={stat.suffix} className="text-xl sm:text-2xl font-bold text-primary" />
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Link to="/cursos">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Conhecer Cursos
                </Button>
              </Link>
              <a href="#contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 rounded-full hover:scale-105 transition-all"
                >
                  Falar com Consultor
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
