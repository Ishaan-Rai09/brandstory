"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CardGlass, CardContent } from "@/components/ui/card";
import { Plus, Sparkles, ChevronRight } from "lucide-react";

export default function DashboardPage() {
  const { isLoaded, userId } = useAuth();
  
  // Show loading state while Clerk loads
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-200"></div>
      </div>
    );
  }
  
  // Redirect if not signed in
  if (!userId) {
    redirect("/");
  }

  return (
    <main className="flex-1 overflow-auto bg-gradient-to-b from-black via-gray-900 to-black min-h-screen pt-8 pb-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200">
              Craft Your Narrative
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Create compelling brand stories powered by Llama 4's advanced AI
            </p>
          </div>
          
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-200/5 via-yellow-300/5 to-amber-200/5 blur-lg rounded-3xl"></div>
            <CardGlass className="border border-amber-200/20 backdrop-blur-md rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-6 text-white">Begin Your Journey</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                      Transform your ideas into captivating brand stories with our premium AI-powered platform.
                    </p>
                    <Link href="/dashboard/create">
                      <Button 
                        className="bg-gradient-to-r from-amber-200 to-yellow-400 hover:from-amber-300 hover:to-yellow-500 text-black font-medium text-lg px-8 py-3 rounded-full flex items-center group"
                      >
                        <span>Create New Story</span>
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                  <div className="bg-gradient-to-br from-amber-900/20 to-black/40 p-10 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-amber-200 to-yellow-400 flex items-center justify-center">
                        <Sparkles className="w-16 h-16 text-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CardGlass>
          </div>
          
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Premium Quality",
                  description: "Elevate your brand with professionally crafted narratives",
                  icon: <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-200 to-yellow-400 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6 text-black" />
                  </div>
                },
                {
                  title: "Advanced AI",
                  description: "Powered by Llama 4 for sophisticated, nuanced storytelling",
                  icon: <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-200 to-yellow-400 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
                    </svg>
                  </div>
                },
                {
                  title: "Effortless Creation",
                  description: "Simple interface designed for a seamless creative experience",
                  icon: <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-200 to-yellow-400 flex items-center justify-center mb-6">
                    <Plus className="w-6 h-6 text-black" />
                  </div>
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-amber-200/10 rounded-2xl p-8 hover:border-amber-200/30 transition-all duration-300"
                >
                  {feature.icon}
                  <h3 className="text-xl font-bold mb-3 text-amber-100">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/dashboard/create">
              <Button 
                variant="outline" 
                className="border-amber-200/30 hover:border-amber-200/60 text-amber-200 hover:bg-amber-900/20 rounded-full px-8 py-3"
              >
                Start Creating Now
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
} 