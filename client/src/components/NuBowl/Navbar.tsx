import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
      className={`fixed w-full bg-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo */}
            <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-poppins font-bold text-xl">Nu</span>
            </div>
            <span className="ml-2 font-poppins font-semibold text-primary text-xl">NuBowl</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(link.href);
                }}
                className="font-medium text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-primary focus:outline-none"
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
        className={`sm:hidden bg-white absolute w-full shadow-md ${showMobileMenu ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: showMobileMenu ? 1 : 0,
          height: showMobileMenu ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(link.href);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
