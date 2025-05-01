import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { oatsProducts, smoothieProducts } from "@/lib/data";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("oats");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#FFF5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary">Our Menu</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of nutritious overnight oats and protein-packed smoothies.
          </p>
        </motion.div>
        
        <Tabs defaultValue="oats" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="inline-flex rounded-md shadow-sm bg-white">
              <TabsTrigger 
                value="oats" 
                className={`px-6 py-3 text-base font-medium rounded-l-lg focus:outline-none ${activeTab === "oats" ? "text-primary border-b-2 border-primary" : ""}`}
              >
                Bheege Oats
              </TabsTrigger>
              <TabsTrigger 
                value="smoothies" 
                className={`px-6 py-3 text-base font-medium rounded-r-lg focus:outline-none ${activeTab === "smoothies" ? "text-primary border-b-2 border-primary" : ""}`}
              >
                Smoothies
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="oats">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {oatsProducts.map((product, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md card-hover"
                  variants={itemVariants}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-poppins font-semibold text-lg">{product.name}</h3>
                      <span className="text-accent font-semibold">${product.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="text-xs text-gray-500 border-t pt-2">
                      $18 for 3-pack | $33 for 6-pack
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="smoothies">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {smoothieProducts.map((product, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md card-hover"
                  variants={itemVariants}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-poppins font-semibold text-lg">{product.name}</h3>
                      <span className="text-accent font-semibold">${product.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="text-xs text-gray-500 border-t pt-2">
                      $21 for 3-pack | $39 for 6-pack
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-block bg-secondary bg-opacity-50 rounded-lg p-4 text-gray-700">
            <p className="text-sm font-medium">$10 flat delivery anywhere in Canada</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
