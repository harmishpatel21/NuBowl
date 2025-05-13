import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";

export default function Hero() {
  const handleScrollToMenu = () => {
    const menuSection = document.querySelector("#menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-0 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/20 mix-blend-multiply z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1619854231899-33ee7003dd8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2F0cyUyMGphciUyMHdpdGglMjBmcnVpdHN8ZW58MHx8MHx8fDA%3D" 
          alt="Background image" 
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        <div className="lg:flex lg:items-center lg:justify-between">
          <motion.div 
            className="lg:w-1/2 mb-14 lg:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex items-center mb-4">
              <span className="inline-flex items-center rounded-full bg-cream px-2.5 py-1 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4 mr-1" />
                Premium health nutrition
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight text-primary"
              variants={itemVariants}
            >
              Grab, Go<br />
              <span className="text-accent">and Glow.</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg font-light"
              variants={itemVariants}
            >
              NuBowl delivers nutritious overnight oats and protein smoothies made with clean ingredients for busy lifestyles.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex items-center"
              variants={itemVariants}
            >
              <Button 
                onClick={handleScrollToMenu}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-7 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Menu
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <a 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="ml-6 text-primary font-medium hover:text-primary/80 transition-colors flex items-center"
              >
                Learn More
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Hero image with floating elements */}
          <div className="lg:w-1/2 relative">
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1533007576165-faccd6a6a056?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Delicious overnight oats with berries" 
                className="rounded-3xl shadow-2xl mx-auto w-full max-w-lg h-[500px] object-cover" 
              />
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-8 -right-8 w-20 h-20 bg-secondary rounded-full mix-blend-multiply"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
              
              <motion.div 
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/20 rounded-full mix-blend-multiply"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              />
            </motion.div>
            
            {/* Floating stats */}
            <motion.div
              className="absolute top-10 -right-5 bg-white rounded-xl p-4 shadow-lg z-20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <p className="text-sm font-medium text-gray-600">Protein</p>
              <p className="text-2xl font-bold text-primary">30g+</p>
            </motion.div>
            
            <motion.div
              className="absolute bottom-12 -left-5 bg-white rounded-xl p-4 shadow-lg z-20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <p className="text-sm font-medium text-gray-600">Clean Ingredients</p>
              <p className="text-2xl font-bold text-primary">100%</p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <p className="text-sm font-semibold text-primary mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center shadow-md">
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
