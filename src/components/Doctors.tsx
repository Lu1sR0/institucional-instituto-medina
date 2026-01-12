
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Instagram, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const teachers = [
  {
    name: "Sérgio Medina",
    specialty: "Diretor e Fundador",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Fundador do Instituto Medina, com mais de 15 anos de experiência em Terapia Integrativa. Coordena todos os cursos e é responsável pela metodologia exclusiva do instituto.",
    expertise: ["Quiropraxia", "Auriculoterapia", "Gestão"],
    featured: true
  },
  {
    name: "Lorena Maria dos Reis",
    specialty: "Fisioterapeuta",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Fisioterapeuta especializada em drenagem linfática e massoterapia. Ministra cursos práticos com técnicas avançadas.",
    expertise: ["Drenagem Linfática", "Massoterapia"],
    featured: false
  },
  {
    name: "Dr. Paulo Henrique",
    specialty: "Especialista em Quiropraxia",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Quiropraxista clínico com formação internacional. Especialista em ajustes articulares e tratamento da coluna vertebral.",
    expertise: ["Quiropraxia Clínica", "Posturologia"],
    featured: false
  },
  {
    name: "Dra. Amanda Costa",
    specialty: "Acupunturista",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Especialista em Medicina Tradicional Chinesa com foco em auriculoterapia. Formou mais de 500 alunos na técnica.",
    expertise: ["Auriculoterapia", "Acupuntura", "MTC"],
    featured: false
  }
];

const Doctors = () => {
  return (
    <section id="teachers" className="py-24 bg-gradient-to-b from-primary/5 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm font-semibold mb-4">
            Nossa Equipe
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Conheça Nossos </span>
            <span className="text-primary">Professores</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Profissionais altamente qualificados e com vasta experiência no mercado, 
            prontos para compartilhar conhecimento e transformar sua carreira.
          </p>
        </AnimatedSection>

        {/* Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 0.1}
              direction="up"
            >
              <Card 
                className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full ${
                  teacher.featured ? "lg:col-span-1 ring-2 ring-secondary/50" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={`Professor ${teacher.name} - ${teacher.specialty}`}
                    className="w-full h-56 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  {teacher.featured && (
                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                      <Award className="w-3 h-3 mr-1" />
                      Fundador
                    </Badge>
                  )}

                  {/* Social Links */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
                      <Instagram className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Name on Image */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{teacher.name}</h3>
                    <p className="text-white/80 text-sm">{teacher.specialty}</p>
                  </div>
                </div>
                
                <CardContent className="p-5">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {teacher.description}
                  </p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {teacher.expertise.map((exp, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
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

        {/* CTA Banner */}
        <AnimatedSection delay={0.5} direction="up">
          <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  Quer fazer parte da nossa equipe?
                </h3>
                <p className="text-primary-foreground/80">
                  Estamos sempre em busca de profissionais qualificados para ministrar cursos.
                </p>
              </div>
              <button className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
                Entre em Contato
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Doctors;
