import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Instagram, Linkedin, ArrowRight, Star, GraduationCap, Users, Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { teachers } from "@/data/teachers";
import { motion } from "framer-motion";

const TeachersPage = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Enhanced */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <Badge className="bg-primary/10 text-primary px-4 py-2 mb-6">
              <GraduationCap className="w-3 h-3 mr-1" />
              Corpo Docente
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Conheça Nossos </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Professores</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profissionais altamente qualificados com vasta experiência no mercado, 
              prontos para transformar sua carreira.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                { icon: Users, label: "Equipe Especializada" },
                { icon: Award, label: "Pós-Graduados" },
                { icon: Star, label: "Anos de Experiência" }
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

      {/* Featured Teacher - Enhanced */}
      {teachers.filter(t => t.featured).map((teacher) => (
        <section key={teacher.id} className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full max-w-lg mx-auto aspect-[3/4] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-4 right-4"
                  >
                    <Badge className="bg-secondary text-secondary-foreground px-4 py-2">
                      <Award className="w-4 h-4 mr-1" />
                      Fundador
                    </Badge>
                  </motion.div>
                  
                  {/* Floating card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl max-w-xs"
                  >
                    <Quote className="w-6 h-6 text-primary/30 mb-2" />
                    <p className="text-sm text-muted-foreground italic">
                      "Transformar vidas através da educação é nossa missão."
                    </p>
                  </motion.div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.1}>
                <Badge className="bg-primary/10 text-primary mb-4">Diretor e Fundador</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  {teacher.name}
                </h2>
                
                <p className="text-muted-foreground mb-8 whitespace-pre-line leading-relaxed text-lg">
                  {teacher.fullBio}
                </p>

                <div className="mb-8 p-6 bg-white rounded-2xl shadow-md">
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Credenciais:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.credentials.map((cred, i) => (
                      <Badge key={i} variant="outline" className="bg-muted/50 text-foreground border-primary/20">
                        {cred}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-foreground mb-4">Especialidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.expertise.map((exp, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* Other Teachers - Enhanced */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <Badge className="bg-secondary/10 text-secondary mb-4">Equipe Completa</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-foreground">Corpo </span>
              <span className="text-secondary">Docente</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">
              Conheça toda nossa equipe de instrutores especializados
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.filter(t => !t.featured).map((teacher, index) => (
              <AnimatedSection key={teacher.id} delay={index * 0.1}>
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Social Links */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      {teacher.instagram && (
                        <a 
                          href={teacher.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                      {teacher.linkedin && (
                        <a 
                          href={teacher.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                    </div>

                    {/* Name on Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-1">{teacher.name}</h3>
                      <p className="text-white/80">{teacher.specialty}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-5 leading-relaxed">
                      {teacher.description}
                    </p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                      {teacher.expertise.map((exp, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-3 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full font-medium"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner - Enhanced */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-secondary p-12 md:p-16">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left max-w-xl">
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                    Quer fazer parte da nossa equipe?
                  </h3>
                  <p className="text-primary-foreground/90 text-lg">
                    Estamos sempre em busca de profissionais qualificados e apaixonados por educação para ministrar cursos.
                  </p>
                </div>
                <Link to="/#contact">
                  <Button 
                    size="lg"
                    className="bg-white text-primary hover:bg-secondary hover:text-secondary-foreground rounded-full px-10 py-6 text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Entre em Contato
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      </main>
    </PageTransition>
  );
};

export default TeachersPage;
