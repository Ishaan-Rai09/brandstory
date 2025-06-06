"use client";

import React from "react";
import { motion } from "framer-motion";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0a0a0f] opacity-90" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-cyan/20 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-accent-blue/20 rounded-full filter blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent-cyan to-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Craft Your Perfect Brand Story with AI
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#f8f8fc]/80 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Transform your personal or startup branding with our AI-powered platform. 
              Create compelling brand stories, bios, and pitches in minutes, not days.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <SignUpButton mode="modal">
                <Button variant="neon" size="xl">Get Started Free</Button>
              </SignUpButton>
              <Button variant="glass" size="xl" asChild>
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center justify-center lg:justify-start space-x-2 text-sm text-[#f8f8fc]/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <span>✓ No credit card required</span>
              <span className="w-1 h-1 rounded-full bg-[#f8f8fc]/60" />
              <span>✓ Free tier available</span>
              <span className="w-1 h-1 rounded-full bg-[#f8f8fc]/60" />
              <span>✓ Cancel anytime</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-6 -left-6 w-full h-full rounded-xl border border-accent/50 bg-[#0a0a0f]/20 backdrop-blur-sm"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 5
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-full h-full rounded-xl border border-accent-cyan/50 bg-[#0a0a0f]/20 backdrop-blur-sm"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, -1, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 5,
                  delay: 0.5
                }}
              />
              <div className="relative w-full aspect-video rounded-xl border border-white/10 bg-glass backdrop-blur-md p-4 overflow-hidden shadow-lg">
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="mt-6">
                  <div className="h-10 w-3/4 rounded bg-white/10 mb-4" />
                  <div className="h-4 w-full rounded bg-white/10 mb-2" />
                  <div className="h-4 w-5/6 rounded bg-white/10 mb-2" />
                  <div className="h-4 w-4/6 rounded bg-white/10 mb-6" />
                  <div className="flex space-x-3 mb-6">
                    <div className="h-8 w-24 rounded bg-accent/30" />
                    <div className="h-8 w-24 rounded bg-accent-cyan/30" />
                  </div>
                  <div className="h-32 w-full rounded bg-white/5 border border-white/10 p-3">
                    <div className="h-4 w-3/4 rounded bg-white/10 mb-2" />
                    <div className="h-4 w-4/6 rounded bg-white/10 mb-2" />
                    <div className="h-4 w-5/6 rounded bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export { Hero }; 