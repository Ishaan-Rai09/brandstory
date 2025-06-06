"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { 
  FileText, 
  Menu, 
  X,
  LogOut,
  Plus,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const DashboardNavbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { 
      name: "Projects", 
      href: "/dashboard", 
      icon: <FileText className="w-5 h-5" />,
      exact: true
    },
    { 
      name: "Create", 
      href: "/dashboard/create", 
      icon: <Plus className="w-5 h-5" />,
      highlight: true
    }
  ];

  const isActive = (path: string, exact = false) => {
    if (exact) {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Sidebar for desktop */}
      <motion.aside 
        initial={{ x: -280 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:flex w-64 flex-col bg-black/70 backdrop-blur-md border-r border-amber-200/10 fixed h-screen z-30"
      >
        <div className="p-6 border-b border-amber-200/10">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-200 to-yellow-400 flex items-center justify-center">
              <span className="text-black font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200">
              BrandStory.ai
            </span>
          </Link>
        </div>
        
        <nav className="flex-1 p-6 space-y-2">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group ${
                isActive(item.href, item.exact) 
                  ? "bg-gradient-to-r from-amber-900/30 to-amber-800/20 text-amber-200 border border-amber-200/20" 
                  : "hover:bg-gray-800/30 text-gray-400 hover:text-amber-100 border border-transparent"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isActive(item.href, item.exact) 
                    ? "bg-amber-200/10" 
                    : "bg-gray-800/50 group-hover:bg-amber-200/5"
                }`}>
                  {item.icon}
                </div>
                <span className="font-medium">{item.name}</span>
              </div>
              {item.highlight && (
                <Badge className="bg-gradient-to-r from-amber-200 to-yellow-400 text-black font-medium">New</Badge>
              )}
              {isActive(item.href, item.exact) && (
                <ChevronRight className="w-4 h-4 ml-auto text-amber-200" />
              )}
            </Link>
          ))}
        </nav>
        
        <div className="p-6 border-t border-amber-200/10">
          <div className="flex items-center space-x-3 bg-gray-900/50 p-3 rounded-xl border border-amber-200/5">
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10 border-2 border-amber-200/20"
                }
              }}
            />
            <div>
              <p className="text-sm font-medium text-white">{user?.firstName || "User"}</p>
              <p className="text-xs text-amber-200/70">Premium Member</p>
            </div>
            <form action="/api/auth/sign-out" method="post" className="ml-auto">
              <button 
                type="submit" 
                className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 hover:bg-amber-900/50 text-gray-400 hover:text-amber-200 transition-colors" 
                aria-label="Sign out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </motion.aside>
      
      {/* Header for mobile */}
      <header 
        className={`md:hidden h-16 border-b border-amber-200/10 flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center">
          <button 
            className="mr-4 text-amber-200"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-200 to-yellow-400 flex items-center justify-center">
              <span className="text-black font-bold text-sm">B</span>
            </div>
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200">
              BrandStory.ai
            </span>
          </Link>
        </div>
        
        <div className="flex items-center">
          <UserButton 
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonAvatarBox: "border-2 border-amber-200/20"
              }
            }}
          />
        </div>
      </header>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          
          <motion.div 
            className="absolute top-0 left-0 h-full w-4/5 max-w-xs bg-gray-900 border-r border-amber-200/10"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between p-6 border-b border-amber-200/10">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-200 to-yellow-400 flex items-center justify-center">
                  <span className="text-black font-bold text-sm">B</span>
                </div>
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200">
                  BrandStory.ai
                </span>
              </Link>
              <button 
                className="text-amber-200"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="p-6 space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive(item.href, item.exact) 
                      ? "bg-gradient-to-r from-amber-900/30 to-amber-800/20 text-amber-200 border border-amber-200/20" 
                      : "hover:bg-gray-800/30 text-gray-400 hover:text-amber-100 border border-transparent"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isActive(item.href, item.exact) 
                        ? "bg-amber-200/10" 
                        : "bg-gray-800/50"
                    }`}>
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {item.highlight && (
                    <Badge className="bg-gradient-to-r from-amber-200 to-yellow-400 text-black font-medium">New</Badge>
                  )}
                </Link>
              ))}
            </nav>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-amber-200/10">
              <div className="flex items-center space-x-3 bg-gray-900/50 p-3 rounded-xl border border-amber-200/5">
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-10 h-10 border-2 border-amber-200/20"
                    }
                  }}
                />
                <div>
                  <p className="text-sm font-medium text-white">{user?.firstName || "User"}</p>
                  <p className="text-xs text-amber-200/70">Premium Member</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export { DashboardNavbar }; 