"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { CardGlass } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "BrandStory.ai transformed how I present myself online. The AI-generated content perfectly captured my voice and expertise, leading to more profile views and connection requests on LinkedIn.",
    author: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechVision Inc.",
    avatar: "/images/avatar-1.png",
  },
  {
    id: 2,
    content: "As a startup founder, I needed a compelling brand story fast. BrandStory.ai delivered beyond my expectations, helping us craft messaging that resonates with investors and customers alike.",
    author: "Michael Chen",
    title: "Founder & CEO",
    company: "NexGen Solutions",
    avatar: "/images/avatar-2.png",
  },
  {
    id: 3,
    content: "The analytics feature is a game-changer. Being able to see how people engage with my brand story has helped me refine my messaging to be even more effective.",
    author: "Priya Patel",
    title: "Independent Consultant",
    company: "Self-employed",
    avatar: "/images/avatar-3.png",
  },
  {
    id: 4,
    content: "I was skeptical about AI writing my brand story, but the results were incredible. It captured my personality while maintaining professionalism. Worth every penny!",
    author: "James Wilson",
    title: "Senior Developer",
    company: "CodeCraft Labs",
    avatar: "/images/avatar-4.png",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent-blue/5 rounded-full filter blur-3xl" />
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
            What Our Users Say
          </motion.h2>
          <motion.p 
            className="text-lg text-[#f8f8fc]/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of professionals who've elevated their personal and business branding
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-[350px] md:h-[250px]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <CardGlass className="h-full p-8 relative">
                    <Quote className="absolute top-6 left-6 w-10 h-10 text-accent/20" />
                    <div className="flex flex-col h-full justify-between">
                      <p className="text-lg text-[#f8f8fc]/90 mb-8 relative z-10 italic">
                        "{testimonials[current].content}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                          <span className="text-accent font-bold">
                            {testimonials[current].author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonials[current].author}</h4>
                          <p className="text-sm text-[#f8f8fc]/70">
                            {testimonials[current].title}, {testimonials[current].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardGlass>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? "bg-accent w-6" : "bg-foreground/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="glass"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6"
            onClick={prev}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="glass"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6"
            onClick={next}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export { Testimonials }; 