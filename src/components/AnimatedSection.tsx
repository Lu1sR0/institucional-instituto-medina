
import { useEffect, useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getVariants = () => {
    const variants = {
      up: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
      down: { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } },
      left: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
      right: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
      scale: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
    };
    return variants[direction];
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
