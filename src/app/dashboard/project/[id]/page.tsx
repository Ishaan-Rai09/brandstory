"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  Copy, 
  Share2, 
  Save, 
  Sparkles, 
  Check,
  Link as LinkIcon,
  X,
  ChevronDown,
  ChevronUp,
  Edit,
  RefreshCw
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CardGlass, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "@/components/ui/loader";
import { Badge } from "@/components/ui/badge";

// Dummy data for the branding content
const brandingContent = {
  linkedInBio: "Results-driven frontend developer with 5+ years of experience crafting elegant, user-centered web applications. Specializing in React, Next.js, and modern UI frameworks to deliver performant, accessible digital experiences. Passionate about creating intuitive interfaces that solve real business problems.",
  aboutMe: "I'm a frontend developer who bridges the gap between design and engineering. With expertise in React and Next.js, I build responsive, accessible web applications that users love. My background in UI/UX design informs my development approach, ensuring that technical solutions always serve human needs. I'm passionate about clean code, performance optimization, and creating digital experiences that feel intuitive and delightful.",
  pitchLines: [
    "I transform complex design challenges into elegant, user-friendly interfaces",
    "Frontend developer specializing in React ecosystems and modern UI frameworks",
    "Creating accessible, performant web applications that users love"
  ],
  socialMediaBios: {
    twitter: "Frontend dev crafting elegant UIs with React & Next.js | UI/UX enthusiast | Building digital experiences that delight users",
    instagram: "💻 Frontend Developer | React & Next.js Specialist | Creating beautiful digital experiences | Based in San Francisco",
    linkedIn: "Frontend Developer with 5+ years of experience specializing in React, Next.js, and modern UI frameworks. Passionate about creating intuitive, accessible web experiences that solve real business problems."
  }
};

const tabs = [
  { id: "linkedin", label: "LinkedIn Bio" },
  { id: "about", label: "About Me" },
  { id: "pitch", label: "Pitch Lines" },
  { id: "social", label: "Social Media" },
];

export default function BrandingProjectPage({ params }) {
  const [activeTab, setActiveTab] = useState("linkedin");
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [editableContent, setEditableContent] = useState({
    linkedInBio: brandingContent.linkedInBio,
    aboutMe: brandingContent.aboutMe,
    pitchLines: brandingContent.pitchLines,
    socialMediaBios: brandingContent.socialMediaBios,
  });
  
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleRegenerate = (field) => {
    setIsGenerating(true);
    
    // Simulate regeneration
    setTimeout(() => {
      if (field === "linkedInBio") {
        setEditableContent({
          ...editableContent,
          linkedInBio: "Innovative frontend developer with 5+ years of experience building modern web applications. Expert in React, Next.js, and UI/UX best practices. Passionate about creating accessible, performant digital experiences that solve real business challenges."
        });
      } else if (field === "aboutMe") {
        setEditableContent({
          ...editableContent,
          aboutMe: "As a frontend developer with a design background, I create web experiences that are both beautiful and functional. I specialize in React and Next.js, focusing on performance, accessibility, and user experience. My approach combines technical expertise with design thinking to build interfaces that feel intuitive and delightful to use."
        });
      }
      setIsGenerating(false);
    }, 2000);
  };
  
  const handleContentChange = (field, value) => {
    setEditableContent({
      ...editableContent,
      [field]: value
    });
  };
  
  const handlePitchLineChange = (index, value) => {
    const newPitchLines = [...editableContent.pitchLines];
    newPitchLines[index] = value;
    setEditableContent({
      ...editableContent,
      pitchLines: newPitchLines
    });
  };
  
  const handleSocialMediaChange = (platform, value) => {
    setEditableContent({
      ...editableContent,
      socialMediaBios: {
        ...editableContent.socialMediaBios,
        [platform]: value
      }
    });
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Container className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold">Professional Brand Story</h1>
                <Badge variant="neon">Personal</Badge>
              </div>
              <p className="text-foreground/70">Generated on May 15, 2023</p>
            </div>
            
            <div className="flex space-x-3 mt-4 md:mt-0">
              <Button 
                variant="outline" 
                className="flex items-center space-x-2"
                onClick={() => handleCopy(editableContent[activeTab === "linkedin" ? "linkedInBio" : activeTab === "about" ? "aboutMe" : "pitchLines"])}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center space-x-2"
                onClick={() => setShowShareModal(true)}
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </Button>
              
              <Button 
                variant="default" 
                className="flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Save</span>
              </Button>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="mb-6 border-b border-white/10">
            <div className="flex space-x-1 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id 
                      ? "text-accent border-b-2 border-accent" 
                      : "text-foreground/60 hover:text-foreground hover:bg-white/5"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            {/* LinkedIn Bio */}
            {activeTab === "linkedin" && (
              <CardGlass>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>LinkedIn Bio</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex items-center space-x-2 text-accent hover:text-accent/80"
                      onClick={() => handleRegenerate("linkedInBio")}
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <Loader size="xs" className="mr-2" />
                      ) : (
                        <RefreshCw className="w-4 h-4 mr-2" />
                      )}
                      <span>Regenerate</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Professional summary for your LinkedIn profile</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    value={editableContent.linkedInBio} 
                    onChange={(e) => handleContentChange("linkedInBio", e.target.value)} 
                    className="min-h-[150px]"
                  />
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-foreground/60">
                  <span>Character count: {editableContent.linkedInBio.length}</span>
                  <span>Recommended: 200-300 characters</span>
                </CardFooter>
              </CardGlass>
            )}
            
            {/* About Me */}
            {activeTab === "about" && (
              <CardGlass>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>About Me</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex items-center space-x-2 text-accent hover:text-accent/80"
                      onClick={() => handleRegenerate("aboutMe")}
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <Loader size="xs" className="mr-2" />
                      ) : (
                        <RefreshCw className="w-4 h-4 mr-2" />
                      )}
                      <span>Regenerate</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Comprehensive personal or company description</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    value={editableContent.aboutMe} 
                    onChange={(e) => handleContentChange("aboutMe", e.target.value)} 
                    className="min-h-[250px]"
                  />
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-foreground/60">
                  <span>Word count: {editableContent.aboutMe.split(/\s+/).filter(Boolean).length}</span>
                  <span>Recommended: 100-150 words</span>
                </CardFooter>
              </CardGlass>
            )}
            
            {/* Pitch Lines */}
            {activeTab === "pitch" && (
              <CardGlass>
                <CardHeader>
                  <CardTitle>Pitch Lines</CardTitle>
                  <CardDescription>Short, impactful statements about your value proposition</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {editableContent.pitchLines.map((line, index) => (
                    <div key={index} className="relative">
                      <Textarea 
                        value={line} 
                        onChange={(e) => handlePitchLineChange(index, e.target.value)} 
                        className="pr-10"
                      />
                      <div className="absolute right-2 top-2 flex space-x-1">
                        <button 
                          className="text-foreground/60 hover:text-foreground"
                          onClick={() => handleCopy(line)}
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 border-dashed"
                    onClick={() => {
                      setEditableContent({
                        ...editableContent,
                        pitchLines: [...editableContent.pitchLines, ""]
                      });
                    }}
                  >
                    + Add Another Pitch Line
                  </Button>
                </CardContent>
              </CardGlass>
            )}
            
            {/* Social Media Bios */}
            {activeTab === "social" && (
              <div className="space-y-6">
                <CardGlass>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center mr-2">
                        <span className="text-xs font-bold text-white">X</span>
                      </div>
                      Twitter/X Bio
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      value={editableContent.socialMediaBios.twitter} 
                      onChange={(e) => handleSocialMediaChange("twitter", e.target.value)} 
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between text-sm text-foreground/60">
                    <span>Character count: {editableContent.socialMediaBios.twitter.length}</span>
                    <span>Limit: 160 characters</span>
                  </CardFooter>
                </CardGlass>
                
                <CardGlass>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-orange-600 flex items-center justify-center mr-2">
                        <span className="text-xs font-bold text-white">Ig</span>
                      </div>
                      Instagram Bio
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      value={editableContent.socialMediaBios.instagram} 
                      onChange={(e) => handleSocialMediaChange("instagram", e.target.value)} 
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between text-sm text-foreground/60">
                    <span>Character count: {editableContent.socialMediaBios.instagram.length}</span>
                    <span>Limit: 150 characters</span>
                  </CardFooter>
                </CardGlass>
                
                <CardGlass>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-2">
                        <span className="text-xs font-bold text-white">in</span>
                      </div>
                      LinkedIn Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      value={editableContent.socialMediaBios.linkedIn} 
                      onChange={(e) => handleSocialMediaChange("linkedIn", e.target.value)} 
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between text-sm text-foreground/60">
                    <span>Character count: {editableContent.socialMediaBios.linkedIn.length}</span>
                    <span>Recommended: under 300 characters</span>
                  </CardFooter>
                </CardGlass>
              </div>
            )}
          </div>
        </div>
      </Container>
      
      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <CardGlass className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Share Your Brand Story</span>
                <button 
                  className="text-foreground/60 hover:text-foreground"
                  onClick={() => setShowShareModal(false)}
                >
                  <X className="w-5 h-5" />
                </button>
              </CardTitle>
              <CardDescription>Generate a shareable link to your brand story</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex">
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-l-md py-2 px-3 text-sm overflow-hidden overflow-ellipsis whitespace-nowrap">
                    https://brandstory.ai/share/professional-brand-story-12345
                  </div>
                  <button 
                    className="bg-accent hover:bg-accent/90 text-white rounded-r-md px-3 flex items-center"
                    onClick={() => {
                      handleCopy("https://brandstory.ai/share/professional-brand-story-12345");
                    }}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-foreground/70 mb-2">Share directly to:</p>
                <div className="grid grid-cols-3 gap-3">
                  <button className="flex flex-col items-center justify-center py-3 px-4 rounded-md bg-white/5 hover:bg-white/10 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center mb-2">
                      <span className="text-xs font-bold text-white">in</span>
                    </div>
                    <span className="text-xs">LinkedIn</span>
                  </button>
                  
                  <button className="flex flex-col items-center justify-center py-3 px-4 rounded-md bg-white/5 hover:bg-white/10 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center mb-2">
                      <span className="text-xs font-bold text-white">X</span>
                    </div>
                    <span className="text-xs">Twitter</span>
                  </button>
                  
                  <button className="flex flex-col items-center justify-center py-3 px-4 rounded-md bg-white/5 hover:bg-white/10 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mb-2">
                      <LinkIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs">Copy Link</span>
                  </button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full flex justify-between">
                <Button variant="outline" onClick={() => setShowShareModal(false)}>
                  Cancel
                </Button>
                <Button variant="neon" onClick={() => setShowShareModal(false)}>
                  Done
                </Button>
              </div>
            </CardFooter>
          </CardGlass>
        </div>
      )}
    </div>
  );
} 