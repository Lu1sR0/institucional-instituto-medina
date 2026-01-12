
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoMedina from "@/assets/logo-medina.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Início", isPage: true },
    { href: "/sobre", label: "Sobre", isPage: true },
    { href: "/cursos", label: "Cursos", isPage: true },
    { href: "/professores", label: "Professores", isPage: true },
    { href: "/galeria", label: "Galeria", isPage: true }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPage: boolean) => {
    if (!isPage && href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2" 
          : "bg-black/40 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#home" 
            onClick={(e) => handleNavClick(e, "/", true)}
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <img 
                src={logoMedina} 
                alt="Logo Instituto Medina - Cursos de Terapia Integrativa" 
                className="h-11 w-11 rounded-xl object-cover shadow-lg ring-2 ring-white/20 group-hover:ring-primary/50 transition-all duration-300"
                width={44}
                height={44}
                loading="eager"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="hidden sm:block">
              <span className={`text-lg font-bold transition-all duration-300 ${
                scrolled ? "text-primary" : "text-white drop-shadow-lg"
              }`}>
                Instituto Medina
              </span>
              <p className={`text-xs font-medium transition-all duration-300 ${
                scrolled ? "text-muted-foreground" : "text-white/80 drop-shadow"
              }`}>
                Terapia Integrativa
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isPage)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-full ${
                  scrolled 
                    ? location.pathname === link.href 
                      ? "text-primary" 
                      : "text-foreground/80 hover:text-primary"
                    : location.pathname === link.href
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute inset-0 rounded-full -z-10 ${
                      scrolled ? "bg-primary/10" : "bg-white/15"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a 
              href="tel:+5573998361674"
              className={`flex items-center gap-2 px-3 py-2 rounded-full font-medium transition-all duration-300 ${
                scrolled 
                  ? "text-primary hover:bg-primary/5" 
                  : "text-white hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`p-1.5 rounded-full ${scrolled ? "bg-primary/10" : "bg-white/20"}`}>
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm font-semibold">(73) 99836-1674</span>
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              >
                Inscreva-se
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              scrolled ? "hover:bg-primary/5" : "hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={scrolled ? "text-foreground" : "text-white"} size={26} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={scrolled ? "text-foreground" : "text-white"} size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl shadow-2xl border-t border-border/50 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6">
                <motion.div 
                  className="flex flex-col space-y-2"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: { transition: { staggerChildren: 0.05 } },
                    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, link.isPage)}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                        location.pathname === link.href 
                          ? "bg-primary/10 text-primary" 
                          : "text-foreground hover:bg-muted"
                      }`}
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: -20 }
                      }}
                    >
                      {link.label}
                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                      }`} />
                    </motion.a>
                  ))}
                  
                  <motion.hr 
                    className="border-border my-2" 
                    variants={{
                      open: { opacity: 1, scaleX: 1 },
                      closed: { opacity: 0, scaleX: 0 }
                    }}
                  />
                  
                  <motion.a 
                    href="tel:+5573998361674"
                    className="flex items-center gap-3 py-3 px-4 rounded-xl text-primary font-medium hover:bg-primary/5 transition-colors"
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 }
                    }}
                  >
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Phone className="w-4 h-4" />
                    </div>
                    (73) 99836-1674
                  </motion.a>
                  
                  <motion.div
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 }
                    }}
                  >
                    <Button 
                      className="bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground w-full rounded-xl py-6 shadow-lg font-semibold text-base"
                      onClick={() => setIsOpen(false)}
                    >
                      Inscreva-se Agora
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
