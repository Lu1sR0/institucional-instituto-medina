
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-primary/5 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm font-semibold mb-4">
            Contato
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Entre em </span>
            <span className="text-primary">Contato</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos prontos para ajudar você a dar o próximo passo na sua carreira. 
            Fale conosco e tire todas as suas dúvidas!
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <AnimatedSection delay={0.1} direction="left">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 text-lg">Endereço</h4>
                  <p className="text-muted-foreground">Rua Antônio Muniz, 221</p>
                  <p className="text-muted-foreground">Pontalzinho - Itabuna/BA</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 text-lg">Telefones</h4>
                  <p className="text-muted-foreground">(73) 4141-0317</p>
                  <p className="text-primary font-semibold">(73) 99836-1674</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} direction="left">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 text-lg">E-mail</h4>
                  <p className="text-muted-foreground">contato@institutomedina.com.br</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} direction="right">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Clock className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 text-lg">Horário</h4>
                  <p className="text-muted-foreground">Segunda a Sexta: 8h às 20h</p>
                  <p className="text-muted-foreground">Sábado: 8h às 17h</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* WhatsApp CTA */}
          <AnimatedSection delay={0.5} direction="up">
            <a 
              href="https://wa.me/5573998361674?text=Olá! Gostaria de saber mais sobre os cursos do Instituto Medina."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full max-w-md mx-auto p-5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 group text-lg"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Falar no WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
