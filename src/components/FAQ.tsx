
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "Como faço para me inscrever nos cursos?",
    answer: "É muito simples! Você pode se inscrever entrando em contato conosco através do WhatsApp (73) 99836-1674, telefone (73) 4141-0317 ou pelo formulário de contato do site. Nossa equipe terá prazer em explicar todo o processo de inscrição, formas de pagamento e tirar suas dúvidas."
  },
  {
    question: "Quais cursos o Instituto Medina oferece?",
    answer: "Oferecemos mais de 20 cursos em Terapia Integrativa, incluindo: Aurículo Acupuntura Chinesa, Drenagem Linfática, Quiropraxia Clínica, Massagem Modeladora, Ventosaterapia, Reflexologia Podal, Bambuterapia, Massagem com Pedras Quentes, Design de Sobrancelha e muito mais. Temos cursos de Capacitação Profissional, Massagens, Terapias e Estética."
  },
  {
    question: "Os cursos oferecem certificado?",
    answer: "Sim! Todos os nossos cursos oferecem certificado de conclusão que comprova sua formação e capacitação profissional. O certificado é emitido ao final do curso e é reconhecido em todo o território nacional, permitindo que você atue como profissional na área escolhida."
  },
  {
    question: "Preciso ter experiência prévia para fazer os cursos?",
    answer: "Não é necessário! Nossos cursos são desenvolvidos para atender desde iniciantes completos até profissionais que desejam se aperfeiçoar. Nossa metodologia é 100% prática e nossos professores qualificados conduzem as aulas de forma didática, garantindo que você aprenda do zero."
  },
  {
    question: "Qual a duração e carga horária dos cursos?",
    answer: "A duração varia conforme o curso escolhido. Geralmente, nossos cursos têm entre 1 a 4 dias de duração, com aulas práticas e teóricas intensivas. A carga horária é planejada para que você saia preparado para atuar profissionalmente. Entre em contato para saber detalhes sobre o curso específico de seu interesse."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Oferecemos diversas formas de pagamento para facilitar sua inscrição: PIX, cartão de crédito (com possibilidade de parcelamento), boleto bancário e dinheiro. Também temos condições especiais para pagamentos à vista. Entre em contato para conhecer as opções disponíveis."
  },
  {
    question: "Onde são realizados os cursos?",
    answer: "Nossos cursos são realizados na sede do Instituto Medina, localizado na Rua Antônio Muniz, 221 - Pontalzinho, Itabuna/BA. Contamos com infraestrutura completa, salas climatizadas e todo o material necessário para as aulas práticas."
  },
  {
    question: "Posso trabalhar após concluir o curso?",
    answer: "Sim! Ao concluir o curso, você estará apto a atuar profissionalmente na área escolhida. Muitos de nossos alunos abrem seus próprios negócios, trabalham em clínicas, spas, salões de beleza ou atendem a domicílio. Nossa formação é focada em preparar você para o mercado de trabalho."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <AnimatedSection direction="left" className="lg:sticky lg:top-32">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm font-semibold mb-4">
              Dúvidas Frequentes
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Perguntas </span>
              <span className="text-primary">Frequentes</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              Reunimos as principais dúvidas dos nossos alunos para ajudar você 
              a tomar a melhor decisão para sua carreira.
            </p>

            {/* Image */}
            <AnimatedSection direction="scale" delay={0.2} className="relative hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Atendimento ao aluno"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
            </AnimatedSection>

            {/* Contact Card */}
            <AnimatedSection direction="up" delay={0.3} className="mt-8 p-6 bg-gradient-to-br from-primary to-primary/80 rounded-2xl text-primary-foreground">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Ainda tem dúvidas?</h4>
                  <p className="text-primary-foreground/80 text-sm mb-3">
                    Nossa equipe está pronta para ajudar você!
                  </p>
                  <a 
                    href="https://wa.me/5573998361674" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary font-semibold rounded-full text-sm hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>

          {/* Right - Accordion */}
          <AnimatedSection direction="right" delay={0.2}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} delay={0.3 + index * 0.05} direction="up">
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white rounded-2xl shadow-md px-6 border-0 overflow-hidden hover:shadow-lg transition-all duration-300 data-[state=open]:shadow-lg data-[state=open]:ring-2 data-[state=open]:ring-primary/20"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                      <span className="flex items-start gap-3">
                        <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">
                          {index + 1}
                        </span>
                        <span>{faq.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 pl-11 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedSection>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
