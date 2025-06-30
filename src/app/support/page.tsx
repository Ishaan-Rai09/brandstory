"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Mail, 
  FileText,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CardGlass, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CustomCursor } from "@/components/ui/custom-cursor";

// FAQ data
const faqCategories = [
  {
    id: "general",
    name: "General Questions",
    questions: [
      {
        id: "what-is",
        question: "What is BrandStory.ai?",
        answer: "BrandStory.ai is an AI-powered platform that helps individuals and startups create compelling brand narratives, professional bios, and marketing content. Our advanced AI analyzes your information and generates tailored content that resonates with your target audience."
      },
      {
        id: "how-works",
        question: "How does BrandStory.ai work?",
        answer: "BrandStory.ai works in four simple steps: 1) Upload your resume or input your information, 2) Our AI analyzes your data, 3) We generate tailored brand content across multiple formats, 4) You can edit, refine, and share your brand story across platforms."
      },
      {
        id: "difference",
        question: "How is BrandStory.ai different from other AI writing tools?",
        answer: "BrandStory.ai is specifically designed for personal and startup branding, with specialized templates and AI models trained on successful brand narratives. We focus on creating authentic, compelling stories that highlight your unique value proposition, not just generic content."
      }
    ]
  },
  {
    id: "account",
    name: "Account & Billing",
    questions: [
      {
        id: "free-trial",
        question: "Is there a free trial?",
        answer: "Yes! BrandStory.ai offers a free plan that allows you to create up to 3 brand stories. This gives you the opportunity to experience our platform before upgrading to a Pro plan for unlimited generations and additional features."
      },
      {
        id: "cancel",
        question: "How do I cancel my subscription?",
        answer: "You can cancel your subscription at any time from your account settings. Navigate to Dashboard > Settings > Billing and click on 'Cancel Subscription'. Your access will continue until the end of your current billing period."
      },
      {
        id: "refund",
        question: "What is your refund policy?",
        answer: "We offer a 14-day money-back guarantee for all new Pro subscriptions. If you're not satisfied with our service, contact our support team within 14 days of your initial purchase for a full refund."
      }
    ]
  },
  {
    id: "technical",
    name: "Technical Questions",
    questions: [
      {
        id: "data-privacy",
        question: "How do you handle my data and privacy?",
        answer: "We take data privacy seriously. Your uploaded information is encrypted and used solely to generate your brand content. We do not sell your data to third parties. You can request deletion of your data at any time through your account settings."
      },
      {
        id: "supported-formats",
        question: "What file formats do you support for resume uploads?",
        answer: "BrandStory.ai supports PDF, DOC, DOCX, and TXT file formats for resume uploads. For best results, we recommend using PDF format as it preserves formatting more reliably."
      },
      {
        id: "export-options",
        question: "What export options are available?",
        answer: "You can export your brand stories in multiple formats including PDF, DOCX, plain text, and HTML. Pro users also have access to direct social media integration for LinkedIn, Twitter, and other platforms."
      }
    ]
  }
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("general");
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [showContactSuccess, setShowContactSuccess] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const toggleQuestion = (questionId) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };
  
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setShowContactSuccess(true);
      setContactForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowContactSuccess(false);
      }, 5000);
    }, 1000);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Filter questions based on search query
  const filteredQuestions = searchQuery 
    ? faqCategories.flatMap(category => 
        category.questions.filter(q => 
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : [];
  
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-accent/10 to-background py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full filter blur-3xl" />
        </div>
        
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How can we help?</h1>
            <p className="text-lg text-foreground/70 mb-8">
              Find answers to common questions or reach out to our support team
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60" />
              <Input 
                type="text"
                placeholder="Search for answers..."
                className="pl-10 py-6 text-lg"
                value={searchQuery}
                onChange={handleSearch}
              />
              
              {searchQuery && (
                <AnimatePresence>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 right-0 top-full mt-2 bg-background border border-white/10 rounded-md shadow-lg z-20 max-h-80 overflow-y-auto"
                  >
                    {filteredQuestions.length > 0 ? (
                      <div className="p-2">
                        {filteredQuestions.map((q) => (
                          <button
                            key={q.id}
                            className="w-full text-left p-3 hover:bg-white/5 rounded-md transition-colors"
                            onClick={() => {
                              setSearchQuery("");
                              setExpandedQuestions({ [q.id]: true });
                              
                              // Find category of this question
                              const category = faqCategories.find(cat => 
                                cat.questions.some(question => question.id === q.id)
                              );
                              if (category) {
                                setActiveCategory(category.id);
                              }
                              
                              // Scroll to the question
                              setTimeout(() => {
                                document.getElementById(q.id)?.scrollIntoView({ 
                                  behavior: 'smooth',
                                  block: 'center'
                                });
                              }, 100);
                            }}
                          >
                            <p className="font-medium">{q.question}</p>
                            <p className="text-sm text-foreground/60 truncate">{q.answer}</p>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-foreground/60">
                        No results found for "{searchQuery}"
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </Container>
      </div>
      
      {/* FAQ Section */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <nav className="space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      activeCategory === category.id 
                        ? "bg-accent text-white" 
                        : "hover:bg-white/5"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 p-4 bg-white/5 rounded-md border border-white/10">
                <h3 className="font-medium mb-2">Need more help?</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Can't find what you're looking for? Contact our support team.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold mb-6">
              {faqCategories.find(cat => cat.id === activeCategory)?.name || "Frequently Asked Questions"}
            </h2>
            
            <div className="space-y-4">
              {faqCategories
                .find(cat => cat.id === activeCategory)
                ?.questions.map((item) => (
                  <div 
                    key={item.id} 
                    id={item.id}
                    className={`border border-white/10 rounded-md overflow-hidden transition-all ${
                      expandedQuestions[item.id] ? "bg-white/5" : "bg-transparent hover:bg-white/5"
                    }`}
                  >
                    <button
                      className="w-full flex items-center justify-between p-4 text-left"
                      onClick={() => toggleQuestion(item.id)}
                    >
                      <h3 className="font-medium text-lg">{item.question}</h3>
                      {expandedQuestions[item.id] ? (
                        <ChevronUp className="w-5 h-5 text-foreground/60" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-foreground/60" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {expandedQuestions[item.id] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-4 pb-4 text-foreground/80">
                            <div className="pt-2 border-t border-white/10">
                              {item.answer}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </Container>
      
      {/* Contact Form */}
      <div className="bg-gradient-to-t from-accent/10 to-background py-16" id="contact-form">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
              <p className="text-foreground/70">
                Our support team is here to help. Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <CardGlass>
              <CardContent className="p-6">
                {showContactSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                    <p className="text-foreground/70 mb-6">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => setShowContactSuccess(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleContactSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={contactForm.name} 
                          onChange={handleInputChange} 
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={contactForm.email} 
                          onChange={handleInputChange} 
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        value={contactForm.subject} 
                        onChange={handleInputChange} 
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        rows={6} 
                        value={contactForm.message} 
                        onChange={handleInputChange} 
                        required
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit" variant="default" className="bg-accent hover:bg-accent/90">
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </CardGlass>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-medium mb-2">Live Chat</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Chat with our support team in real-time
                </p>
                <Button variant="outline" className="w-full">
                  Start Chat
                </Button>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-accent-cyan" />
                </div>
                <h3 className="text-lg font-medium mb-2">Email Support</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Send us an email and we'll respond within 24 hours
                </p>
                <Button variant="outline" className="w-full">
                  support@brandstory.ai
                </Button>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-lg font-medium mb-2">Documentation</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Browse our detailed documentation and guides
                </p>
                <Button variant="outline" className="w-full">
                  View Docs
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
} 