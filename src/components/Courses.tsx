
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, GraduationCap, Hand, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const Courses = () => {
  const upcomingCourses = [
    {
      month: "NOVEMBRO",
      courses: [
        { date: "08 e 09", name: "Aurículo Acupuntura Chinesa", category: "Terapia" },
        { date: "22 e 23", name: "Drenagem Linfática com abordagem em Saúde e Estética", category: "Estética" }
      ]
    },
    {
      month: "DEZEMBRO",
      courses: [
        { date: "05 a 08", name: "Quiropraxia Clínica", category: "Terapia" },
        { date: "13 e 14", name: "Massagem Modeladora Manual e Instrumental", category: "Massagem" }
      ]
    }
  ];

  const courseCategories = [
    {
      title: "Capacitação Profissional",
      description: "Cursos completos para formação profissional em terapias",
      icon: GraduationCap,
      color: "from-primary/10 to-primary/5"
    },
    {
      title: "Massagens",
      description: "Técnicas avançadas de massoterapia e relaxamento",
      icon: Hand,
      color: "from-secondary/10 to-secondary/5"
    },
    {
      title: "Cursos Livres",
      description: "Especializações e técnicas complementares",
      icon: BookOpen,
      color: "from-primary/10 to-secondary/10"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-white to-secondary/5">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <span className="text-sm text-primary font-semibold bg-primary/10 px-4 py-2 rounded-full">Próximos Cursos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="text-secondary">Inscrições</span> <span className="text-primary">Abertas</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Não deixe a oportunidade passar! Confira os próximos cursos e garanta sua vaga.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {upcomingCourses.map((monthData, index) => (
            <AnimatedSection key={index} delay={index * 0.15} direction={index % 2 === 0 ? "left" : "right"}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/10 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="text-secondary mr-2" />
                    <h3 className="text-2xl font-bold text-primary">{monthData.month}</h3>
                  </div>
                  <div className="space-y-4">
                    {monthData.courses.map((course, idx) => (
                      <div key={idx} className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg hover:from-primary/10 hover:to-secondary/10 transition-all">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Clock className="text-secondary h-4 w-4" />
                            <span className="font-semibold text-primary">{course.date}</span>
                          </div>
                          <Badge className="bg-secondary text-white">{course.category}</Badge>
                        </div>
                        <p className="text-gray-700 font-medium">{course.name}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              <span className="text-primary">Categorias de</span> <span className="text-secondary">Cursos</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {courseCategories.map((category, index) => (
                <AnimatedSection key={index} delay={0.3 + index * 0.1} direction="scale">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 h-full">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${category.color} rounded-2xl group-hover:scale-110 transition-transform`}>
                        <category.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-primary mb-2">{category.title}</h4>
                      <p className="text-gray-600">{category.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5} className="text-center">
          <Button className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-white px-10 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Ver Todos os Cursos
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Courses;
