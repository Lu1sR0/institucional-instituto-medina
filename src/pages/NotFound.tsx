import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import { Home, ArrowLeft, Search } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4 relative z-10"
      >
        {/* 404 Number */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-[150px] md:text-[200px] font-bold bg-gradient-to-br from-primary via-primary/70 to-secondary bg-clip-text text-transparent leading-none block">
            404
          </span>
        </motion.div>
        
        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Página não encontrada
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            A página que você está procurando não existe ou foi movida. 
            Verifique o endereço ou volte para a página inicial.
          </p>
        </motion.div>
        
        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/">
            <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90">
              <Home className="w-4 h-4 mr-2" />
              Página Inicial
            </Button>
          </Link>
          <Link to="/cursos">
            <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Search className="w-4 h-4 mr-2" />
              Ver Cursos
            </Button>
          </Link>
        </motion.div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8"
        >
          <button 
            onClick={() => window.history.back()} 
            className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar à página anterior
          </button>
        </motion.div>
      </motion.div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
