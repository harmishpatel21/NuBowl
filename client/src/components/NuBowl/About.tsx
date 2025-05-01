import { motion } from "framer-motion";
import { Leaf, Clock, Apple } from "lucide-react";

const keyValues = [
  {
    icon: <Leaf className="w-6 h-6 text-primary" />,
    title: "Nutrient-Dense",
    description: "Packed with protein, fiber, and essential vitamins to fuel your active lifestyle."
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Ready-to-Eat",
    description: "Grab from your fridge and enjoy instantly - perfect for busy mornings."
  },
  {
    icon: <Apple className="w-6 h-6 text-primary" />,
    title: "Delicious Flavors",
    description: "Carefully crafted recipes that make healthy eating a delightful experience."
  }
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
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-poppins font-bold text-primary"
            variants={itemVariants}
          >
            Wholesome Fuel for Your Day
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            We make wholesome food accessible, convenient, and delicious. Every NuBowl is packed with 30g+ protein and crafted to keep you energized.
          </motion.p>
        </motion.div>
        
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
              className="bg-[#FFF5E4] rounded-xl p-8 text-center transform transition-all duration-300 hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-5">
                {value.icon}
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-secondary bg-opacity-30 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="lg:flex lg:items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1504387828636-abeb50778c0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Person enjoying healthy breakfast" 
                className="rounded-xl shadow-md mx-auto w-full max-w-md h-[350px] object-cover" 
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h3 className="text-2xl font-poppins font-semibold text-primary mb-4">Our Commitment</h3>
              <p className="text-gray-700 mb-4">
                At NuBowl, we believe that eating well shouldn't be complicated. That's why we've created a range of delicious, nutritious meals that fit seamlessly into your busy life.
              </p>
              <p className="text-gray-700">
                Every ingredient is carefully selected for both nutritional value and flavor, ensuring you never have to choose between health and taste.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
