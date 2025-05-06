import { motion } from "framer-motion";
import { Leaf, Clock, Apple, HeartPulse, Dumbbell, Wheat } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const keyValues = [
  {
    icon: <Leaf className="w-7 h-7 text-primary" />,
    title: "Nutrient-Dense",
    description: "Packed with protein, fiber, and essential vitamins to fuel your active lifestyle."
  },
  {
    icon: <Clock className="w-7 h-7 text-primary" />,
    title: "Ready-to-Eat",
    description: "Grab from your fridge and enjoy instantly - perfect for busy mornings."
  },
  {
    icon: <Apple className="w-7 h-7 text-primary" />,
    title: "Delicious Flavors",
    description: "Carefully crafted recipes that make healthy eating a delightful experience."
  }
];

const nutritionStats = [
  { icon: <HeartPulse />, value: "30g+", label: "Protein" },
  { icon: <Dumbbell />, value: "15+", label: "Superfoods" },
  { icon: <Wheat />, value: "300+", label: "Calories" },
];

export default function About() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-x-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-64 top-40 w-[500px] h-[500px] rounded-full bg-cream opacity-50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Badge className="mb-4 bg-secondary/30 text-primary px-4 py-1.5 rounded-full text-sm font-medium hover:bg-secondary/40">
              Our philosophy
            </Badge>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-5"
            variants={itemVariants}
          >
            Wholesome Fuel for Your Day
          </motion.h2>
          
          <motion.p 
            className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            We make wholesome food accessible, convenient, and delicious. Every NuBowl is packed with nutrients and crafted to keep you energized throughout your day.
          </motion.p>
        </motion.div>
        
        {/* Key benefits section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {keyValues.map((value, index) => (
            <motion.div 
              key={index}
              className="bg-cream rounded-2xl p-8 sm:p-10 text-center transform transition-all duration-300 hover:-translate-y-2 shadow-lg group hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div 
                className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-6 shadow-md group-hover:bg-primary group-hover:text-white transition-colors duration-300"
              >
                <div className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-2xl font-poppins font-semibold mb-3 text-gray-800">{value.title}</h3>
              <p className="text-gray-600 text-lg">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Main content section */}
        <motion.div 
          className="mt-28 rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/30 rounded-3xl">
            <div className="lg:flex lg:items-center relative overflow-hidden">
              {/* Left image */}
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 transform lg:-translate-x-12 p-6 lg:p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1504387828636-abeb50778c0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Person enjoying healthy breakfast" 
                    className="rounded-2xl shadow-2xl mx-auto w-full max-w-md h-[400px] lg:h-[500px] object-cover" 
                  />
                </div>
                
                {/* Nutrition stats cards */}
                <div className="absolute top-10 -right-5 md:right-0 z-20">
                  <motion.div 
                    className="bg-white rounded-xl p-4 shadow-lg"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 text-primary">
                        {nutritionStats[0].icon}
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">{nutritionStats[0].value}</p>
                        <p className="text-xs text-gray-500">{nutritionStats[0].label}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="absolute bottom-10 -right-5 md:right-0 z-20">
                  <motion.div 
                    className="bg-white rounded-xl p-4 shadow-lg"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 text-primary">
                        {nutritionStats[1].icon}
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">{nutritionStats[1].value}</p>
                        <p className="text-xs text-gray-500">{nutritionStats[1].label}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Right content */}
              <div className="lg:w-1/2 p-8 md:p-12 lg:p-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge className="mb-4 bg-white/50 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Our story
                  </Badge>
                  <h3 className="text-3xl font-poppins font-bold text-primary mb-6">Our Commitment to Health</h3>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    At NuBowl, we believe that eating well shouldn't be complicated. That's why we've created a range of delicious, nutritious meals that fit seamlessly into your busy life.
                  </p>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Every ingredient is carefully selected for both nutritional value and flavor, ensuring you never have to choose between health and taste.
                  </p>
                  
                  <div className="mt-10 pt-6 border-t border-gray-200/50">
                    <div className="flex flex-wrap justify-between items-center">
                      <div className="flex items-center mb-4 md:mb-0">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                          alt="Founder" 
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" 
                        />
                        <div className="ml-3">
                          <p className="font-semibold text-gray-800">David Chen</p>
                          <p className="text-sm text-gray-500">Founder, NuBowl</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-primary">
                        <span className="font-semibold">Est. 2019</span>
                        <span className="mx-2">•</span>
                        <span className="font-semibold">Toronto, Canada</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Stats section */}
        <motion.div 
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-5xl font-bold text-primary mb-2">5K+</p>
            <p className="text-gray-600">Monthly subscribers</p>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-5xl font-bold text-primary mb-2">98%</p>
            <p className="text-gray-600">Customer satisfaction</p>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-5xl font-bold text-primary mb-2">12</p>
            <p className="text-gray-600">Different flavors</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
