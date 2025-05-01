import { useState, useEffect } from "react";
import Navbar from "@/components/NuBowl/Navbar";
import Hero from "@/components/NuBowl/Hero";
import About from "@/components/NuBowl/About";
import Menu from "@/components/NuBowl/Menu";
import Testimonials from "@/components/NuBowl/Testimonials";
import Contact from "@/components/NuBowl/Contact";
import Footer from "@/components/NuBowl/Footer";
import { useIsMobile } from "@/hooks/use-mobile";

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
      <Menu />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
