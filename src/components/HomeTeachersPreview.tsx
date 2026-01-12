import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { teachers } from "@/data/teachers";

const HomeTeachersPreview = () => {
  const displayTeachers = teachers.slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm font-semibold mb-4">
            Equipe
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Nossos </span>
            <span className="text-primary">Professores</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Profissionais experientes e qualificados, prontos para compartilhar 
            conhecimento e transformar sua carreira.
          </p>
        </AnimatedSection>

        {/* Teachers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayTeachers.map((teacher, index) => (
            <AnimatedSection key={teacher.id} delay={index * 0.1} direction="up">
              <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {teacher.featured && (
                    <Badge className="absolute top-4 right-4 bg-secondary text-white">
                      <Award className="w-3 h-3 mr-1" />
                      Fundador
                    </Badge>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg">{teacher.name}</h3>
                    <p className="text-white/80 text-sm">{teacher.specialty}</p>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {teacher.expertise.slice(0, 2).map((exp, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {exp}
                      </span>
                    ))}
                    {teacher.expertise.length > 2 && (
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
                        +{teacher.expertise.length - 2}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="text-center">
          <Link to="/professores">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 rounded-full text-lg font-semibold transition-all group"
            >
              Conhecer Toda a Equipe
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HomeTeachersPreview;
