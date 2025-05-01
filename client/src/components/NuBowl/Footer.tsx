import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address")
});

type SubscribeFormValues = z.infer<typeof subscribeSchema>;

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      form.reset();
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
    <footer className="bg-primary bg-opacity-10 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-primary border-opacity-20">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-xl">Nu</span>
              </div>
              <span className="ml-2 font-poppins font-semibold text-primary text-xl">NuBowl</span>
            </div>
            <p className="text-gray-600 mb-4">
              Nutritious, delicious overnight oats and protein smoothies delivered to your door.
            </p>
            <p className="text-sm text-gray-500">
              Made with ❤️ in Canada
            </p>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#menu"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Our Menu
                </a>
              </li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Delivery Information</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-600 mb-4">Get the latest updates, promotions and healthy recipes.</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1 flex">
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Your email" 
                          className="flex-1 px-4 py-2 rounded-l-lg border-t border-b border-l border-gray-300 focus:outline-none" 
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition duration-300"
                >
                  Subscribe
                </Button>
              </form>
            </Form>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} NuBowl. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
