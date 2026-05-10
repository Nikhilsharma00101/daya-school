"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Star, Sparkles, Home, BookOpen, Palette, Image as ImageIcon, Heart, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Heart },
  { name: "Programs", href: "/programs", icon: BookOpen },
  { name: "Activities", href: "/activities", icon: Palette },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  { name: "Contact", href: "/contact", icon: Phone },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      
      {/* Top Bar - Disappears on scroll for a cleaner look */}
      <div className={cn(
        "bg-gradient-to-r from-brand-peach via-brand-yellow to-brand-sky text-slate-800 text-xs py-1.5 transition-all duration-300 block font-medium",
        isScrolled ? "opacity-0 -translate-y-full h-0" : "opacity-100 translate-y-0 h-auto"
      )}>
        <div className="container mx-auto px-4 flex justify-center md:justify-between items-center">
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 fill-current" />
              7065200233
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Ghaziabad, India
            </span>
          </div>
          <Link href="/admissions" className="flex items-center gap-2 group">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/50 text-slate-800 font-bold flex items-center gap-1.5 shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-3 h-3 fill-current text-brand-peach" />
              Admissions Open 2026-27
              <Star className="w-3 h-3 fill-current text-brand-yellow" />
            </div>
          </Link>
        </div>
      </div>

      <div className={cn(
        "container mx-auto px-4 md:px-6 transition-all duration-500",
        isScrolled ? "pt-2" : "pt-4"
      )}>
        {/* Main Navbar Container - Floating Island Style */}
        <div className="relative max-w-7xl mx-auto">
          
          <div 
            className={cn(
              "relative transition-all duration-500 ease-in-out flex items-center justify-between px-6",
              isScrolled 
                ? "bg-white/90 backdrop-blur-xl shadow-lg border border-slate-100 rounded-full py-2" 
                : "bg-white/70 backdrop-blur-md border border-white/40 rounded-[2.5rem] py-4"
            )}
          >
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center group">
              <motion.div
                whileHover={{ rotate: [0, -3, 3, 0], scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Image 
                  src="/images/logo/logo.png" 
                  alt="Daya Little Step Public School Logo" 
                  width={64}
                  height={64}
                  className={cn(
                    "transition-all duration-500 object-contain",
                    isScrolled ? "h-12" : "h-16"
                  )}
                />
              </motion.div>
              <div className="ml-3 hidden sm:block">
                <p className="font-heading font-bold text-slate-800 text-base leading-none">Daya Little Step</p>
                <p className="text-[10px] text-brand-peach font-bold tracking-wider">PUBLIC SCHOOL</p>
              </div>
            </Link>

            {/* Desktop Navigation - Structured & Beautiful */}
            <nav className="hidden lg:flex items-center gap-1">
              <ul className="flex items-center gap-1 bg-slate-50/80 backdrop-blur-sm p-1 rounded-full border border-slate-100">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.name} className="relative">
                      <Link
                        href={link.href}
                        className={cn(
                          "relative z-10 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-1.5",
                          isActive
                            ? "text-white"
                            : "text-slate-600 hover:text-slate-900"
                        )}
                      >
                        {link.name}
                      </Link>
                      
                      {/* Smooth Active Background */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavBG"
                          className="absolute inset-0 bg-slate-900 rounded-full shadow-sm"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
              
              {/* CTA Button */}
              <Link 
                href="/admissions" 
                className={buttonVariants({ 
                  size: "default", 
                  className: "ml-3 rounded-full bg-brand-peach hover:bg-brand-peach/90 text-white font-bold border-none shadow-md shadow-brand-peach/20 hover:-translate-y-0.5 transition-all" 
                })}
              >
                <Star className="w-4 h-4 mr-1.5 fill-current" />
                Admissions
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className={cn(
                "lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors border",
                isScrolled ? "bg-slate-50 border-slate-100" : "bg-white border-white/60"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-slate-800" /> : <Menu className="w-5 h-5 text-slate-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:hidden absolute top-full left-0 right-0 mx-4 mt-2 bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden z-40"
          >
            <nav className="p-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                        isActive
                          ? "bg-slate-900 text-white"
                          : "text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      <div className={cn(
                        "w-7 h-7 rounded-lg flex items-center justify-center",
                        isActive ? "bg-white/20" : "bg-slate-100"
                      )}>
                        <Icon className={cn("w-3.5 h-3.5", isActive ? "text-white" : "text-slate-500")} />
                      </div>
                      <span className="flex-grow">{link.name}</span>
                      {isActive && <Star className="w-3.5 h-3.5 fill-current text-white" />}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="pt-3 border-t border-slate-100 mt-2">
                <Link 
                  href="/admissions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={buttonVariants({ 
                    size: "lg", 
                    className: "w-full rounded-xl bg-brand-peach hover:bg-brand-peach/90 text-white font-bold"
                  })}
                >
                  Apply Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
