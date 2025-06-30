"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SignUpButton } from "@clerk/nextjs";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CardNeon } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out BrandStory.ai",
      price: 0,
      features: [
        { name: "3 Brand Story Generations", included: true },
        { name: "Basic Templates", included: true },
        { name: "Export to Text", included: true },
        { name: "24-Hour Support", included: true },
        { name: "Advanced Analytics", included: false },
        { name: "Unlimited Revisions", included: false },
        { name: "Custom Branding", included: false },
        { name: "Priority Support", included: false },
      ],
      color: "purple",
      popular: false,
    },
    {
      name: "Pro",
      description: "Everything you need for professional branding",
      price: annual ? 19 : 29,
      features: [
        { name: "Unlimited Brand Story Generations", included: true },
        { name: "All Premium Templates", included: true },
        { name: "Export to Multiple Formats", included: true },
        { name: "24/7 Priority Support", included: true },
        { name: "Advanced Analytics Dashboard", included: true },
        { name: "Unlimited AI Revisions", included: true },
        { name: "Custom Branding Options", included: true },
        { name: "API Access", included: true },
      ],
      color: "cyan",
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full filter blur-3xl" />
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
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            className="text-lg text-[#f8f8fc]/70 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the plan that's right for you
          </motion.p>

          <motion.div 
            className="flex items-center justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className={`text-lg ${!annual ? "text-[#f8f8fc]" : "text-[#f8f8fc]/50"}`}>Monthly</span>
            <div 
              className="w-16 h-8 rounded-full bg-glass backdrop-blur-sm border border-white/10 p-1 cursor-pointer"
              onClick={() => setAnnual(!annual)}
            >
              <div 
                className={`w-6 h-6 rounded-full bg-accent transition-all duration-300 ${
                  annual ? "translate-x-8" : "translate-x-0"
                }`} 
              />
            </div>
            <span className={`text-lg ${annual ? "text-[#f8f8fc]" : "text-[#f8f8fc]/50"}`}>
              Yearly <Badge variant="default" className="ml-2 bg-accent text-white">Save 33%</Badge>
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <CardNeon 
                  color={plan.color === "purple" ? "gold" : "amber"} 
                  className="relative p-6 h-full flex flex-col"
                >
                  {plan.popular && (
                    <Badge 
                      variant="default" 
                      className={`absolute -top-3 right-6 ${plan.color === "purple" ? "bg-accent text-white" : "bg-accent-cyan text-white"}`}
                    >
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-[#f8f8fc]/70">{plan.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-end">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      {plan.price > 0 && (
                        <span className="text-[#f8f8fc]/70 ml-2">/ {annual ? "year" : "month"}</span>
                      )}
                    </div>
                    {plan.price === 0 && <p className="text-sm text-[#f8f8fc]/70">Free forever</p>}
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        {feature.included ? (
                          <Check className={`w-5 h-5 mr-3 ${plan.color === "purple" ? "text-accent" : "text-accent-cyan"}`} />
                        ) : (
                          <X className="w-5 h-5 mr-3 text-[#f8f8fc]/30" />
                        )}
                        <span className={feature.included ? "text-[#f8f8fc]" : "text-[#f8f8fc]/50"}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <SignUpButton mode="modal">
                      <Button 
                        variant="default" 
                        className={`w-full ${plan.color === "purple" ? "bg-accent hover:bg-accent/90" : "bg-accent-cyan hover:bg-accent-cyan/90"}`}
                      >
                        {plan.price === 0 ? "Get Started" : "Upgrade to Pro"}
                      </Button>
                    </SignUpButton>
                  </div>
                </CardNeon>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export { Pricing }; 