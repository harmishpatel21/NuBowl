import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const handleScrollToMenu = () => {
    const menuSection = document.querySelector("#menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="gradient-bg min-h-screen flex items-center pt-16 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Grab, Go<br />and Glow.
            </motion.h1>
            
            <motion.p 
              className="mt-4 text-lg md:text-xl text-gray-700 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              NuBowl delivers nutritious overnight oats and protein smoothies made with clean ingredients for busy lifestyles.
            </motion.p>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                onClick={handleScrollToMenu}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-6 rounded-full transition duration-300 transform hover:scale-105"
              >
                View Our Menu
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Delicious overnight oats with berries" 
              className="rounded-2xl shadow-xl mx-auto lg:ml-auto lg:mr-0 w-full max-w-md h-[400px] object-cover" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
