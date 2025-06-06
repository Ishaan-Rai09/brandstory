"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Upload, Sparkles, FileText, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SignUpButton } from "@clerk/nextjs";

const steps = [
  {
    icon: <Upload className="w-6 h-6" />,
    title: "Upload or Input",
    description: "Upload your resume, paste existing content, or start from scratch with our guided input form.",
    color: "accent",
    delay: 0.1,
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI Generation",
    description: "Our AI analyzes your information and generates tailored brand content across multiple formats.",
    color: "accent-cyan",
    delay: 0.3,
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Refine & Edit",
    description: "Review, edit, and refine your brand story with our intuitive editor and AI suggestions.",
    color: "accent-blue",
    delay: 0.5,
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Share & Track",
    description: "Share your brand story across platforms and track engagement with analytics.",
    color: "accent",
    delay: 0.7,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 relative bg-[#0a0a0f]/50">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/5 rounded-full filter blur-3xl" />
      </div>

      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How BrandStory.ai Works
          </motion.h2>
          <motion.p 
            className="text-lg text-[#f8f8fc]/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Create your perfect brand story in just four simple steps
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-accent-cyan/50 -z-10" />
              )}
              
              <div className="flex flex-col items-center text-center">
                <div 
                  className={cn(
                    "w-20 h-20 rounded-full flex items-center justify-center mb-6 text-white shadow-lg",
                    step.color === "accent" ? "bg-gradient-to-br from-accent to-accent/70" : 
                    step.color === "accent-cyan" ? "bg-gradient-to-br from-accent-cyan to-accent-cyan/70" : 
                    "bg-gradient-to-br from-accent-blue to-accent-blue/70"
                  )}
                  style={{ boxShadow: `0 0 20px ${step.color === 'accent' ? 'rgba(139, 92, 246, 0.3)' : step.color === 'accent-cyan' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(59, 130, 246, 0.3)'}` }}
                >
                  <div className="text-2xl font-bold">{index + 1}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[#f8f8fc]/70">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <SignUpButton mode="modal" redirecturl="/dashboard">
            <Button variant="neon-cyan" size="lg">
              Get Started Now
            </Button>
          </SignUpButton>
        </motion.div>
      </Container>
    </section>
  );
};

export { HowItWorks }; 