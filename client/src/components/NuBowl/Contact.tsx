import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Badge } from "@/components/ui/badge";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  // Replace with your Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/myzjebap"; // Replace with your real endpoint after signup

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message
        })
      });
      if (!res.ok) throw new Error("Failed to send message");
      toast({
        title: "Message sent",
        description: "Thank you for contacting us! We'll get back to you soon.",
      });
      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 3000);
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
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-white to-cream/40 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-secondary/30 text-primary px-4 py-1.5 rounded-full text-sm font-medium hover:bg-secondary/40">
            Let's connect
          </Badge>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary">Get in Touch</h2>
          <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Drop us a message and we'll get back to you shortly.
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left side content */}
          <motion.div
            className="lg:col-span-5 mb-16 lg:mb-0 lg:sticky lg:top-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Our team is available Monday through Friday, 9am to 5pm ET. We typically respond within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                    <a href="mailto:nubow365@gmail.com" className="mt-1 text-gray-600 hover:text-primary transition-colors">
                      nubowl365@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Phone className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                    <a href="tel:+13653414310" className="mt-1 text-gray-600 hover:text-primary transition-colors">
                      +1 365 341 4310
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-5">
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
            </div>
          </motion.div>

          {/* Right side form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              {/* Success overlay */}
              {isSuccess && (
                <motion.div
                  className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-center">
                    Thank you for contacting us.<br />We'll get back to you shortly.
                  </p>
                </motion.div>
              )}

              <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-6">Send us a message</h3>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Your Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Your Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="I'd like to know more about your delivery options..."
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            rows={6}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white py-6 px-6 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>

              {/* Background decorative circles */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/20 rounded-full opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full opacity-50"></div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-24 bg-white p-8 md:p-12 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-poppins font-bold text-primary mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to commonly asked questions about our products and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-cream/30 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">How long do the products stay fresh?</h4>
              <p className="text-gray-600">
                Our oats and smoothies stay fresh for up to 5 days in the refrigerator. We recommend consuming them within this timeframe for optimal taste and nutrition.
              </p>
            </div>

            <div className="p-6 bg-cream/30 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Do you ship nationwide?</h4>
              <p className="text-gray-600">
                Yes, we offer shipping to all major cities across Canada with guaranteed 48-hour delivery to ensure your products arrive fresh and ready to enjoy.
              </p>
            </div>

            <div className="p-6 bg-cream/30 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Are your products allergen-free?</h4>
              <p className="text-gray-600">
                We offer several allergen-free options. All products are clearly labeled with ingredients and potential allergens. Please check individual product descriptions.
              </p>
            </div>

            <div className="p-6 bg-cream/30 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">How do I place a bulk order?</h4>
              <p className="text-gray-600">
                For bulk orders (10+ items), please contact us directly via email or phone. We offer special pricing and dedicated customer service for larger purchases.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
