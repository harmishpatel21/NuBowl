import { useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-b from-white to-secondary/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -left-32 top-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-secondary/30 text-primary px-4 py-1.5 rounded-full text-sm font-medium hover:bg-secondary/40">
            Customer love
          </Badge>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary">What Our Customers Say</h2>
          <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - see what our community has to say about NuBowl's nutritious and delicious offerings.
          </p>
        </motion.div>
        
        {/* Desktop view: Grid layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute -top-5 -left-3 text-secondary/20">
                  <Quote className="w-16 h-16" fill="currentColor" strokeWidth={0} />
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="text-yellow-500 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5" 
                        fill={i < testimonial.rating ? "currentColor" : "none"} 
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-8 text-lg relative z-10">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t pt-6 mt-auto">
                  <div className="flex items-center">
                    {/* Profile icon with gradient background */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xl font-bold shadow-md">
                      {testimonial.initials}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile view: Carousel */}
        <div className="lg:hidden relative">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`bg-white p-8 rounded-2xl ${
                  activeIndex === index ? "block" : "hidden"
                }`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -top-5 -left-3 text-secondary/20">
                  <Quote className="w-16 h-16" fill="currentColor" strokeWidth={0} />
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="text-yellow-500 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5" 
                        fill={i < testimonial.rating ? "currentColor" : "none"} 
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-8 text-lg relative z-10">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t pt-6">
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xl font-bold shadow-md">
                      {testimonial.initials}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Navigation buttons */}
            <div className="absolute bottom-0 right-0 p-4 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Trust badges */}
        <motion.div 
          className="mt-20 flex flex-wrap justify-center items-center gap-6 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-primary">4.9<span className="text-2xl">/5</span></div>
            <div className="text-gray-500 mt-1">Average Rating</div>
          </div>
          
          <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-primary">3k+</div>
            <div className="text-gray-500 mt-1">Happy Customers</div>
          </div>
          
          <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-primary">98%</div>
            <div className="text-gray-500 mt-1">Would Recommend</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
