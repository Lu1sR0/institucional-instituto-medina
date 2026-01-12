import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, GraduationCap, Hand, BookOpen, Calendar, Users, Award, Star, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { courses, upcomingCourses } from "@/data/courses";
import { motion } from "framer-motion";

const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const categories = [
    { id: "todos", label: "Todos os Cursos", icon: GraduationCap },
    { id: "capacitacao", label: "Capacitação Profissional", icon: GraduationCap },
    { id: "massagem", label: "Massagens", icon: Hand },
    { id: "cursos-livres", label: "Cursos Livres", icon: BookOpen }
  ];

  const filteredCourses = activeCategory === "todos" 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

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
              <GraduationCap className="w-3 h-3 mr-1" />
              +20 Cursos Disponíveis
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Formação Profissional em </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Terapias Integrativas</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Certificação reconhecida pela OPISB. 
              Metodologia 100% prática e professores especializados.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                { icon: Users, label: "5.000+ Formados" },
                { icon: Award, label: "Certificado OPISB" },
                { icon: Star, label: "98% Satisfação" }
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

      {/* Próximos Cursos - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <Badge className="bg-secondary/10 text-secondary mb-4">
              <Calendar className="w-3 h-3 mr-1" />
              Agenda
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-secondary">Próximas</span>{" "}
              <span className="text-primary">Turmas</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">Garanta sua vaga nas próximas turmas</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingCourses.map((monthData, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white">
                  <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{monthData.month}</h3>
                    </div>
                    <div className="space-y-4">
                      {monthData.courses.map((course, idx) => (
                        <Link 
                          key={idx} 
                          to={`/cursos/${course.courseId}`}
                          className="block"
                        >
                          <div className="p-4 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl hover:from-primary/10 hover:to-secondary/10 transition-all group">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-secondary" />
                                <span className="font-bold text-primary">{course.date}</span>
                              </div>
                              <Badge variant="secondary" className="text-xs">{course.category}</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="text-foreground font-medium">{course.name}</p>
                              <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter - Enhanced */}
      <section className="py-8 sticky top-16 z-40 bg-background/95 backdrop-blur-lg border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
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
                <cat.icon className="w-4 h-4 mr-2" />
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid - Enhanced */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <AnimatedSection key={course.id} delay={index * 0.05} direction="up">
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full flex flex-col bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between">
                      <Badge className="bg-secondary/90 text-secondary-foreground backdrop-blur-sm">
                        {course.categoryLabel}
                      </Badge>
                      {course.featured && (
                        <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          Destaque
                        </Badge>
                      )}
                    </div>
                    
                    {/* Title on image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">{course.name}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-muted">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{course.duration}</span>
                      </div>
                      <Link to={`/cursos/${course.id}`}>
                        <Button variant="ghost" size="sm" className="group/btn text-primary hover:text-primary hover:bg-primary/5">
                          Ver detalhes
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Não sabe qual curso escolher?
              </h2>
              <p className="text-primary-foreground/90 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
                Entre em contato com nossa equipe e receba orientação personalizada 
                para escolher o melhor curso para sua carreira.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/5573998361674" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-secondary hover:text-secondary-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar via WhatsApp
                  </Button>
                </a>
                <Link to="/#contact">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-primary-foreground/30 text-secondary hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8"
                  >
                    Enviar Mensagem
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

export default CoursesPage;
