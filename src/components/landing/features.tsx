"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { CardNeon } from "@/components/ui/card";
import { 
  Sparkles, 
  Rocket, 
  LineChart, 
  Share2, 
  Clock, 
  Layers 
} from "lucide-react";
import { cn } from "@/lib/utils";

const features: FeatureCardProps[] = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI-Powered Branding",
    description: "Our advanced AI analyzes your input to generate compelling brand stories, bios, and pitches tailored to your unique voice and goals.",
    color: "purple",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Multiple Formats",
    description: "Generate content for LinkedIn bios, About Me sections, elevator pitches, social media profiles, and more with a single click.",
    color: "cyan",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Analytics & Insights",
    description: "Track engagement with your brand content and receive AI-powered suggestions to optimize your messaging for better results.",
    color: "blue",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Easy Sharing",
    description: "Share your brand story across platforms with customizable links and export options for seamless integration.",
    color: "purple",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Save Time",
    description: "Create professional branding content in minutes instead of spending days crafting the perfect message.",
    color: "cyan",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Unlimited Revisions",
    description: "Refine your brand story with unlimited AI-powered revisions until you achieve the perfect messaging.",
    color: "blue",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful Features for Perfect Branding
          </motion.h2>
          <motion.p 
            className="text-lg text-[#f8f8fc]/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to create, refine, and share your personal or startup brand story
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "purple" | "cyan" | "blue" | "pink";
}

const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => {
  const bgColorClass = color === "purple" 
    ? "bg-accent/10" 
    : color === "cyan" 
      ? "bg-accent-cyan/10" 
      : "bg-accent-blue/10";
      
  const textColorClass = color === "purple" 
    ? "text-accent" 
    : color === "cyan" 
      ? "text-accent-cyan" 
      : "text-accent-blue";
  
  // Map our color types to CardNeon color types
  const cardColor = color === "purple" ? "gold" : color === "cyan" ? "amber" : "yellow";
  
  return (
    <CardNeon color={cardColor} className="h-full p-6 hover:translate-y-[-5px] transition-all duration-300">
      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", bgColorClass)}>
        {React.cloneElement(icon as React.ReactElement, { 
          className: cn("w-6 h-6", textColorClass)
        } as any)}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-[#f8f8fc]/70">{description}</p>
    </CardNeon>
  );
};

export { Features }; 