import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { oatsProducts, smoothieProducts } from "@/lib/data";
import { ShoppingCart, Truck, Clock, Star, Settings, Phone } from "lucide-react";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("oats");
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const handleProductSelection = (index: number) => {
    setSelectedProduct(index === selectedProduct ? null : index);
  };

  return (
    <section id="menu" className="py-20 md:py-32 bg-[#FFF5E4] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/30 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-secondary/30 text-primary px-4 py-1.5 rounded-full text-sm font-medium hover:bg-secondary/40">
            Handcrafted with care
          </Badge>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary">Explore Our Menu</h2>
          <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of nutritious overnight oats and protein-packed smoothies, 
            crafted with premium ingredients for optimal health.
          </p>
        </motion.div>
        
        <Tabs defaultValue="oats" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-16">
            <TabsList className="inline-flex rounded-full p-1.5 shadow-lg bg-white/80 backdrop-blur-sm">
              <TabsTrigger 
                value="oats" 
                className={`px-8 py-3 text-base font-medium rounded-full transition-all`}
              >
                Bheege Oats
              </TabsTrigger>
              <TabsTrigger 
                value="smoothies" 
                className={`px-8 py-3 text-base font-medium rounded-full transition-all`}
              >
                Smoothies
              </TabsTrigger>
            </TabsList>
          </div>
          
          <AnimatePresence mode="wait">
            <TabsContent value="oats" key="oats-tab">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                exit={{ opacity: 0 }}
              >
                {oatsProducts.map((product, index) => (
                  <motion.div 
                    key={index}
                    className={`bg-white rounded-2xl overflow-hidden shadow-xl card-hover ${
                      selectedProduct === index ? 'ring-2 ring-primary ring-offset-4 ring-offset-[#FFF5E4]' : ''
                    }`}
                    variants={itemVariants}
                    transition={{ duration: 0.5 }}
                    onClick={() => handleProductSelection(index)}
                    whileHover={{ y: -8 }}
                  >
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110" 
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white text-primary shadow-md">Best Seller</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-poppins font-semibold text-xl text-gray-800">{product.name}</h3>
                        <span className="text-accent font-bold text-xl">${product.price}</span>
                      </div>
                      
                      <div className="flex items-center mb-3">
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        {/* <span className="text-xs text-gray-500 ml-2">(24 reviews)</span> */}
                      </div>
                      
                      <p className="text-gray-600 mb-5">{product.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1 text-primary" />
                          <span>Ready to eat</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          {/* <Truck className="w-4 h-4 mr-1 text-primary" /> */}
                          {/* <span>48hr delivery</span> */}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <Button 
                          className="flex-1 bg-cream hover:bg-cream/80 text-primary rounded-lg font-medium text-sm"
                          variant="outline"
                        >
                          3-Pack ($18)
                        </Button>
                        <Button 
                          className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium text-sm"
                        >
                          <ShoppingCart className="mr-1.5 h-4 w-4" />
                          6-Pack ($33)
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="smoothies" key="smoothies-tab">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                exit={{ opacity: 0 }}
              >
                {smoothieProducts.map((product, index) => (
                  <motion.div 
                    key={index}
                    className={`bg-white rounded-2xl overflow-hidden shadow-xl card-hover ${
                      selectedProduct === index ? 'ring-2 ring-primary ring-offset-4 ring-offset-[#FFF5E4]' : ''
                    }`}
                    variants={itemVariants}
                    transition={{ duration: 0.5 }}
                    onClick={() => handleProductSelection(index)}
                    whileHover={{ y: -8 }}
                  >
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110" 
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white text-primary shadow-md">Best Seller</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-poppins font-semibold text-xl text-gray-800">{product.name}</h3>
                        <span className="text-accent font-bold text-xl">${product.price}</span>
                      </div>
                      
                      <div className="flex items-center mb-3">
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        {/* <span className="text-xs text-gray-500 ml-2">(24 reviews)</span> */}
                      </div>
                      
                      <p className="text-gray-600 mb-5">{product.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1 text-primary" />
                          <span>Ready to drink</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          {/* <Truck className="w-4 h-4 mr-1 text-primary" /> */}
                          {/* <span>48hr delivery</span> */}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <Button 
                          className="flex-1 bg-cream hover:bg-cream/80 text-primary rounded-lg font-medium text-sm"
                          variant="outline"
                        >
                          3-Pack ($21)
                        </Button>
                        <Button 
                          className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium text-sm"
                        >
                          <ShoppingCart className="mr-1.5 h-4 w-4" />
                          6-Pack ($39)
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-block bg-white rounded-xl p-6 text-gray-700 shadow-lg backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <Phone className="w-6 h-6 text-primary mr-0 md:mr-3 mb-2 md:mb-0" />
              <p className="text-lg font-medium flex items-center">
                Contact us for 
                <span className="text-primary font-bold mx-2">Customization</span> 
                and
                <span className="text-primary font-bold mx-2">Bulk Orders</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
