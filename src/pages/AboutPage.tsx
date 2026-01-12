import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Award, Users, BookOpen, Heart, MapPin, Clock, Shield, ArrowRight, Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CountUpNumber from "@/components/CountUpNumber";
import { motion } from "framer-motion";

const AboutPage = () => {
  const timeline = [
    { year: "2003", title: "Fundação", description: "Início das atividades do Instituto Medina em Itabuna-BA" },
    { year: "2006", title: "Parceria FTC", description: "Início do projeto de extensão em Massoterapia na FTC" },
    { year: "2009", title: "Parceria UNIME", description: "Projeto de Extensão Universitária em Massoterapia" },
    { year: "2015", title: "3.000 Formados", description: "Marca de 3.000 alunos formados alcançada" },
    { year: "2021", title: "Dr. Honoris Causa", description: "Sérgio Medina recebe título pela Faculdade Einstein" },
    { year: "2024", title: "5.000+ Formados", description: "Mais de 5.000 profissionais formados" }
  ];

  const values = [
    { icon: Heart, title: "Cuidado", description: "Tratamos cada aluno com atenção e dedicação", color: "from-rose-500 to-pink-500" },
    { icon: Award, title: "Excelência", description: "Buscamos sempre a melhor qualidade de ensino", color: "from-amber-500 to-orange-500" },
    { icon: Users, title: "Comunidade", description: "Formamos uma rede de profissionais unidos", color: "from-emerald-500 to-teal-500" },
    { icon: Shield, title: "Credibilidade", description: "Certificação reconhecida nacionalmente", color: "from-blue-500 to-indigo-500" }
  ];

  const differentials = [
    "Única instituição do Sul da Bahia reconhecida pela OPISB",
    "Mais de 21 anos de experiência no mercado",
    "Professores com pós-graduação e experiência clínica",
    "Metodologia 100% prática com casos reais",
    "Material didático exclusivo e atualizado",
    "Suporte pós-curso e networking profissional",
    "Infraestrutura completa para aulas práticas",
    "Turmas reduzidas para melhor aprendizado"
  ];

  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Navbar />
      
      {/* Hero Section - Redesigned */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <Badge className="bg-primary/10 text-primary px-4 py-2 mb-6 text-sm font-medium">
                <Star className="w-3 h-3 mr-1 fill-primary" />
                Sobre o Instituto
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Mais de </span>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">25 Anos</span>
                <br />
                <span className="text-foreground">Transformando Vidas</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                O Instituto Medina é um centro de cursos de formação profissional e atendimento 
                nas áreas de Terapia Integrativa em Itabuna-BA. Coordenado pelo Professor e 
                Terapeuta Sérgio Medina, já formou mais de 5.000 alunos que trabalham na região, 
                no Brasil e no exterior.
              </p>
              
              {/* Quote */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 mb-8 border-l-4 border-primary">
                <Quote className="w-8 h-8 text-primary/30 mb-2" />
                <p className="text-foreground italic">
                  "Nossa missão é formar profissionais capacitados e éticos, 
                  prontos para transformar vidas através das terapias integrativas."
                </p>
                <p className="text-sm text-muted-foreground mt-2 font-medium">— Prof. Sérgio Medina</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cursos">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                    Ver Nossos Cursos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/galeria">
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8">
                    Ver Galeria
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Sessão de massagem terapêutica"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                
                {/* Floating Card */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl border border-primary/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
                      <Award className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <CountUpNumber end={5000} suffix="+" className="text-2xl font-bold text-primary" />
                      <p className="text-sm text-muted-foreground">Alunos Formados</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Second Floating Card */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-secondary/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/70 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Certificado</p>
                      <p className="text-sm font-bold text-foreground">OPISB</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats - Redesigned */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary/95 to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: 5000, suffix: "+", label: "Alunos Formados" },
              { icon: BookOpen, value: 20, suffix: "+", label: "Cursos" },
              { icon: Award, value: 25, suffix: "+", label: "Anos de Experiência" },
              { icon: Heart, value: 98, suffix: "%", label: "Satisfação" }
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center text-primary-foreground">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <CountUpNumber end={stat.value} suffix={stat.suffix} className="text-4xl md:text-5xl font-bold" />
                  <p className="text-sm opacity-80 mt-2">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Valores que Nos Guiam
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Os princípios que norteiam nosso trabalho há mais de duas décadas
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <Badge className="bg-secondary/10 text-secondary mb-4">Por que nos escolher?</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-foreground">Diferenciais do </span>
                <span className="text-secondary">Instituto Medina</span>
              </h2>
              <p className="text-muted-foreground mb-10 text-lg">
                Com mais de duas décadas de experiência, o Instituto Medina se consolidou 
                como referência em formação de terapeutas integrativos no Sul da Bahia.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {differentials.map((diff, index) => (
                  <AnimatedSection key={index} delay={0.3 + index * 0.05} direction="left">
                    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{diff}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tratamento terapêutico"
                  className="w-full rounded-3xl shadow-2xl"
                />
                {/* Decorative elements */}
                <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline - Redesigned */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4">Desde 2003</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-foreground">Nossa </span>
              <span className="text-primary">Trajetória</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2 rounded-full" />
              
              {timeline.map((item, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} pl-16 md:pl-0`}>
                      <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                        <CardContent className="p-0">
                          <span className="inline-block text-sm font-bold text-primary-foreground bg-gradient-to-r from-primary to-secondary px-3 py-1 rounded-full mb-2">{item.year}</span>
                          <h4 className="font-bold text-xl text-foreground mb-1">{item.title}</h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full transform md:-translate-x-1/2 shadow-lg z-10" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4">Visite-nos</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-foreground">Nossa </span>
              <span className="text-primary">Localização</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection direction="left">
              <Card className="p-8 h-full border-0 shadow-lg bg-white">
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Endereço</h3>
                    <p className="text-muted-foreground text-lg">
                      Rua Antônio Muniz, 221<br />
                      Pontalzinho - Itabuna/BA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground text-lg">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t">
                  <Link to="/#contact">
                    <Button className="w-full rounded-full bg-primary hover:bg-primary/90">
                      Entre em Contato
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789!2d-39.28!3d-14.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQ2JzQ4LjAiUyAzOcKwMTYnNDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Instituto Medina"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
      </main>
    </PageTransition>
  );
};

export default AboutPage;
