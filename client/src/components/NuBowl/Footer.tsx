import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Shield,
  Truck,
  CreditCard,
  ArrowRight,
  Check,
  CheckCircle
} from "lucide-react";

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address")
});

type SubscribeFormValues = z.infer<typeof subscribeSchema>;

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<SubscribeFormValues>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = async (values: SubscribeFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/subscribe", values);
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
      setIsSuccess(true);
      form.reset();
      
      // Reset success state after a few seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="pt-20 bg-gradient-to-b from-white to-primary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter section */}
        <div className="mb-20">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:flex items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h3 className="text-3xl font-poppins font-bold text-primary mb-4">Stay in Touch</h3>
                <p className="text-gray-600 text-lg mb-6 max-w-lg">
                  Subscribe to our newsletter to receive updates, special offers, and healthy recipe ideas.
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center">
                    <Check className="text-primary mr-2 h-5 w-5" />
                    <span className="text-gray-700">Weekly recipes</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-primary mr-2 h-5 w-5" />
                    <span className="text-gray-700">Exclusive offers</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-primary mr-2 h-5 w-5" />
                    <span className="text-gray-700">Nutrition tips</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 lg:pl-12">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className={`w-full px-5 py-5 pr-36 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent text-base ${isSuccess ? 'bg-green-50 border-green-200' : ''}`}
                                disabled={isSuccess || isSubmitting}
                                {...field} 
                              />
                              <Button 
                                type="submit" 
                                disabled={isSubmitting || isSuccess}
                                className="absolute right-2 top-2 bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg transition duration-300 min-w-[100px]"
                              >
                                {isSubmitting ? (
                                  <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Sending...</span>
                                  </span>
                                ) : isSuccess ? (
                                  <span className="flex items-center">
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Subscribed!
                                  </span>
                                ) : (
                                  <span className="flex items-center">
                                    <Send className="h-4 w-4 mr-2" />
                                    Subscribe
                                  </span>
                                )}
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full"></div>
          </motion.div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-16 border-b border-gray-200">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-poppins font-bold text-2xl">Nu</span>
              </div>
              <span className="ml-3 font-poppins font-semibold text-primary text-2xl tracking-tight">NuBowl</span>
            </div>
            <p className="text-gray-600 mb-6">
              Nutritious, delicious overnight oats and protein smoothies crafted with premium ingredients, delivered fresh to your door.
            </p>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg text-gray-800 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#about" },
                { name: "Our Menu", href: "#menu" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact Us", href: "#contact" },
                { name: "FAQ", href: "#" },
                // { name: "Delivery Information", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-600 hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                    <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact Information */}
          <div>
            <h4 className="font-poppins font-semibold text-lg text-gray-800 mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <a href="tel:+13653414310" className="text-gray-600 hover:text-primary transition-colors">
                  +1 365 341 4310
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <a href="mailto:nubowl365@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                  nubowl365@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-600">
                  Mon-Fri: 9AM - 5PM ET
                </span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: We Promise */}
          <div>
            <h4 className="font-poppins font-semibold text-lg text-gray-800 mb-6">We Promise</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-primary mt-0.5 mr-3" />
                <span className="text-gray-600">
                  100% satisfaction guarantee on all our products
                </span>
              </li>
              <li className="flex items-start">
                <Truck className="h-5 w-5 text-primary mt-0.5 mr-3" />
                <span className="text-gray-600">
                  Fast and reliable delivery across GTA
                </span>
              </li>
              <li className="flex items-start">
                <CreditCard className="h-5 w-5 text-primary mt-0.5 mr-3" />
                <span className="text-gray-600">
                  Secure payment processing
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NuBowl. All rights reserved.
          </p>
          {/* <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Cookie Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
