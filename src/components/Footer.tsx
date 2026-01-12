import { Mail, MapPin, Phone, Instagram, Facebook, Youtube, MessageCircle, ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";
import logoMedina from "@/assets/logo-medina.jpg";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <footer className="relative bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white pt-20 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }}>
          {/* Brand */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img src={logoMedina} alt="Logo Instituto Medina" className="h-14 w-14 rounded-xl object-cover ring-2 ring-white/10" width={56} height={56} loading="lazy" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Instituto Medina</span>
                <p className="text-white/50 text-sm">Terapia Integrativa</p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              Há mais de 10 anos formando profissionais de excelência em Terapia Integrativa. 
              Transformando vidas através da educação de qualidade.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {[{
              icon: Instagram,
              href: "#",
              label: "Instagram"
            }, {
              icon: Facebook,
              href: "#",
              label: "Facebook"
            }, {
              icon: Youtube,
              href: "#",
              label: "Youtube"
            }].map((social, index) => <motion.a key={index} href={social.href} aria-label={social.label} className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group" whileHover={{
              scale: 1.1,
              y: -2
            }} whileTap={{
              scale: 0.95
            }}>
                  <social.icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                </motion.a>)}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[{
              href: "#about",
              label: "Sobre o Instituto"
            }, {
              href: "#courses",
              label: "Nossos Cursos"
            }, {
              href: "#teachers",
              label: "Professores"
            }, {
              href: "#contact",
              label: "Contato"
            }].map(link => <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors inline-flex items-center group text-sm">
                    <span className="w-0 h-0.5 bg-secondary mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full" />
              Cursos Populares
            </h4>
            <ul className="space-y-3">
              {["Auriculoterapia", "Drenagem Linfática", "Quiropraxia Clínica", "Massagem Modeladora", "Ventosaterapia"].map(course => <li key={course}>
                  <a href="#courses" className="text-white/60 hover:text-white transition-colors inline-flex items-center group text-sm">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                    {course}
                  </a>
                </li>)}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/60 group-hover:text-white transition-colors text-sm">
                  Rua Antônio Muniz, 221<br />
                  Pontalzinho - Itabuna/BA
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div className="text-white/60 group-hover:text-white transition-colors text-sm">
                  <p>(73) 4141-0317</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/60 group-hover:text-white transition-colors text-sm">
                  contato@institutomedina.com.br
                </span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a href="https://wa.me/5573998361674" target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center justify-center gap-2 w-full p-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 text-sm" whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }}>
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {currentYear} <span className="text-white/60 font-medium">Instituto Medina</span>. 
              Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-6">
              
              
              {/* Back to Top */}
              <motion.button onClick={scrollToTop} className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group" whileHover={{
              scale: 1.1,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} aria-label="Voltar ao topo">
                <ArrowUp className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;