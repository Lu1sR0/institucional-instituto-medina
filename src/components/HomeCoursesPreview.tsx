import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { courses, upcomingCourses } from "@/data/courses";

const HomeCoursesPreview = () => {
  const featuredCourses = courses.filter(c => c.featured).slice(0, 3);

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 px-4 py-2 text-sm font-semibold mb-4">
            Formação Profissional
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Nossos </span>
            <span className="text-primary">Cursos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Formação completa em terapias integrativas com certificado reconhecido. 
            Metodologia prática e professores experientes.
          </p>
        </AnimatedSection>

        {/* Featured Courses */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredCourses.map((course, index) => (
            <AnimatedSection key={course.id} delay={index * 0.1} direction="up">
              <Link to={`/cursos/${course.id}`}>
                <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-primary text-white">
                      {course.categoryLabel}
                    </Badge>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg">{course.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Ver mais <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Upcoming Courses Banner */}
        <AnimatedSection delay={0.3}>
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Próximas Turmas
                  </h3>
                  <p className="text-white/80">
                    Garanta sua vaga nos próximos cursos
                  </p>
                </div>
                <Link to="/cursos">
                  <Button className="bg-white text-primary hover:bg-secondary hover:text-white px-6 py-5 rounded-full font-semibold shadow-lg transition-all">
                    Ver Todos os Cursos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {upcomingCourses.map((monthData, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-5 h-5 text-secondary" />
                      <span className="text-white font-bold">{monthData.month}</span>
                    </div>
                    <div className="space-y-3">
                      {monthData.courses.map((course, idx) => (
                        <Link 
                          key={idx} 
                          to={`/cursos/${course.courseId}`}
                          className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                        >
                          <div>
                            <p className="text-white font-medium text-sm">{course.name}</p>
                            <p className="text-white/60 text-xs">{course.date}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HomeCoursesPreview;
