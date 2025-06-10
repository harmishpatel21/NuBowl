import { useState, useEffect } from "react";
import Navbar from "@/components/NuBowl/Navbar";
import Hero from "@/components/NuBowl/Hero";
import About from "@/components/NuBowl/About";
import Menu from "@/components/NuBowl/Menu";
import Testimonials from "@/components/NuBowl/Testimonials";
import Contact from "@/components/NuBowl/Contact";
import Footer from "@/components/NuBowl/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    if (!isMobile) {
      setShowMobileMenu(false);
    }
  }, [isMobile]);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar
        isScrolled={isScrolled}
        isMobile={isMobile}
        showMobileMenu={showMobileMenu}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />
      <Hero />
      <About />
      <section id="menu"><Menu /></section>
      <section id="pricing">
        <motion.div
          className="min-h-[70vh] py-16 gradient-bg flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4 text-center">Choose Your Pack</h2>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-xl">All packs let you mix & match any flavours from our menu. Perfect for busy mornings, meal prep, or sharing with family!</p>
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              name: "Single Cup",
              cups: 1,
              price: "$6.99",
              delivery: "+ delivery",
              highlight: false,
              note: "Mix & match any flavours",
              freeDelivery: false,
            }, {
              name: "Trio Pack",
              cups: 3,
              price: "$18.99",
              delivery: "+ delivery",
              highlight: false,
              note: "Mix & match any flavours",
              freeDelivery: false,
            }, {
              name: "Family Pack",
              cups: 5,
              price: "$32.99",
              delivery: "+ Free delivery in GTA",
              highlight: true,
              note: "Mix & match any flavours",
              freeDelivery: true,
            }].map((option, idx) => (
              <motion.div
                key={option.name}
                className={`rounded-2xl card-hover shadow-lg bg-white/90 border border-gray-200 p-8 flex flex-col items-center relative ${option.highlight ? "ring-2 ring-accent scale-105 z-10" : ""}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                {option.highlight && (
                  <span className="absolute top-4 right-4 bg-accent text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 13l4 4L21 7" /></svg> Free GTA Delivery
                  </span>
                )}
                <h3 className="text-xl font-semibold text-primary mb-2 font-poppins">{option.name}</h3>
                <div className="text-5xl font-bold text-accent mb-2">{option.price}</div>
                <div className="text-base text-gray-600 mb-4">{option.delivery}</div>
                <ul className="text-sm text-gray-700 mb-6 flex flex-col gap-2">
                  <li className="flex items-center gap-2"><svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2l4-4" /></svg> {option.note}</li>
                </ul>
                <button className="w-full bg-primary text-white hover:bg-primary/90 rounded-lg font-semibold text-base py-2 mt-auto">Order Now</button>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center text-gray-500 text-sm max-w-lg mx-auto">
            <span className="font-semibold text-primary">Note:</span> Delivery is available across GTA. For Family Pack, delivery is free within GTA. For other packs, delivery charges apply. You can select any flavours from our menu and mix & match in your pack.
          </div>
        </motion.div>
      </section>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
