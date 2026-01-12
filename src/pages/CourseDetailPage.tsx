import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, ArrowLeft, Award, BookOpen, Users, MessageCircle, Star, PlayCircle, FileText, Headphones } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { getCourseById, courses } from "@/data/courses";
import { motion } from "framer-motion";

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = getCourseById(courseId || "");

  if (!course) {
    return (
      <PageTransition>
        <main className="min-h-screen bg-background">
          <Navbar />
          <div className="pt-32 pb-16 container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Curso não encontrado</h1>
              <p className="text-muted-foreground mb-8">O curso que você está procurando não existe ou foi removido.</p>
              <Link to="/cursos">
                <Button className="rounded-full">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar aos Cursos
                </Button>
              </Link>
            </div>
          </div>
          <Footer />
        </main>
      </PageTransition>
    );
  }

  const relatedCourses = courses
    .filter(c => c.category === course.category && c.id !== course.id)
    .slice(0, 3);

  const features = [
    { icon: BookOpen, title: "Material Didático", description: "Apostila completa e material de apoio incluso" },
    { icon: Award, title: "Certificado OPISB", description: "Reconhecido em todo território nacional" },
    { icon: Users, title: "Suporte Contínuo", description: "Grupo exclusivo e acompanhamento pós-curso" },
    { icon: Headphones, title: "Atendimento", description: "Tire dúvidas com nossos consultores" }
  ];

  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Navbar />
      
      {/* Hero Section - Enhanced */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/cursos" 
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar aos Cursos
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                
                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-4 left-4"
                >
                  <Badge className="bg-secondary/90 text-secondary-foreground backdrop-blur-sm text-sm px-4 py-1">
                    {course.categoryLabel}
                  </Badge>
                </motion.div>
                
                {course.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="absolute top-4 right-4"
                  >
                    <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm text-sm px-4 py-1">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Destaque
                    </Badge>
                  </motion.div>
                )}
                
                {/* Duration badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
                >
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-bold text-foreground">{course.duration}</span>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="lg:sticky lg:top-24">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {course.name}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 text-primary bg-primary/5 px-4 py-2 rounded-full">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold">Certificado OPISB</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary bg-secondary/5 px-4 py-2 rounded-full">
                    <PlayCircle className="w-5 h-5" />
                    <span className="font-semibold">100% Prático</span>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {course.fullDescription}
                </p>

                {/* Benefits */}
                <div className="mb-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    O que você vai receber:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.benefits.map((benefit, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="text-sm text-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary text-secondary-foreground rounded-full px-8 shadow-lg shadow-secondary/25 hover:shadow-xl transition-all"
                    asChild
                  >
                    <a href="https://wa.me/5573998361674" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Inscreva-se Agora
                    </a>
                  </Button>
                  <Link to="/#contact">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 w-full sm:w-auto"
                    >
                      Solicitar Informações
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Modules Section - Enhanced */}
      {course.modules && (
        <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/10">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Grade Curricular</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-foreground">Conteúdo do </span>
                <span className="text-primary">Curso</span>
              </h2>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {course.modules.map((module, index) => (
                  <AnimatedSection key={index} delay={index * 0.08}>
                    <Card className="border-0 shadow-md hover:shadow-lg transition-all overflow-hidden group">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-4 p-5">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-semibold text-foreground text-lg">{module}</h4>
                          </div>
                          <Check className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Cards - Enhanced */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full bg-white">
                  <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related Courses - Enhanced */}
      {relatedCourses.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <Badge className="bg-secondary/10 text-secondary mb-4">Explore Mais</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-foreground">Cursos </span>
                <span className="text-secondary">Relacionados</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedCourses.map((relatedCourse, index) => (
                <AnimatedSection key={relatedCourse.id} delay={index * 0.1}>
                  <Link to={`/cursos/${relatedCourse.id}`}>
                    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedCourse.image}
                          alt={relatedCourse.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge className="bg-secondary/90 mb-2 text-xs">{relatedCourse.categoryLabel}</Badge>
                          <h3 className="text-white font-bold text-lg drop-shadow-lg">
                            {relatedCourse.name}
                          </h3>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      </main>
    </PageTransition>
  );
};

export default CourseDetailPage;
