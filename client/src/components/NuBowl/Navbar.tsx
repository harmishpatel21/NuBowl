import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  isScrolled: boolean;
  isMobile: boolean;
  showMobileMenu: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({
  isScrolled,
  isMobile,
  showMobileMenu,
  toggleMobileMenu,
  closeMobileMenu
}: NavbarProps) {

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMobileMenu();
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${isScrolled
        ? 'bg-white/90 shadow-lg'
        : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-poppins font-bold text-xl">Nu</span>
              </div>
              <span className="ml-2 font-poppins font-semibold text-primary text-xl tracking-tight">NuBowl</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center space-x-1">
            <div className="bg-white/70 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm flex items-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        handleScrollTo(link.href);
                      } // else let default navigation happen for /price
                    }}
                    className={`relative font-medium text-gray-700 hover:text-primary px-5 py-2 rounded-full text-sm transition-colors inline-block overflow-hidden group`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="ml-4"
            >
              <Button
                className="bg-primary/90 hover:bg-primary text-white rounded-full px-5 flex items-center shadow-md"
                onClick={() => alert("Coming soon: Online ordering")}
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                <span>Order Now</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-primary focus:outline-none transition-colors`}
              aria-label={showMobileMenu ? "Close menu" : "Open menu"}
            >
              {showMobileMenu ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`sm:hidden bg-white/95 backdrop-blur-md absolute w-full shadow-lg rounded-b-xl ${showMobileMenu ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: showMobileMenu ? 1 : 0,
          height: showMobileMenu ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.3 }}
            >
              <a
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    handleScrollTo(link.href);
                  } // else let default navigation happen for /price
                }}
                className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
              >
                {link.name}
              </a>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="pt-2"
          >
            <Button
              className="w-full bg-primary text-white py-5 rounded-lg hover:bg-primary/90 transition-colors shadow-md"
              onClick={() => alert("Coming soon: Online ordering")}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              <span>Order Now</span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
