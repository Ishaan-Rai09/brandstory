"use client";

import React from "react";
import { DashboardNavbar } from "@/components/dashboard/navbar";
import { useAuth } from "@clerk/nextjs";

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded, userId } = useAuth();
  
  // Show loading state while Clerk loads
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }
  
  // If user is logged in, show the dashboard layout
  if (userId) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardNavbar />
        <div className="md:pl-64">
          <div className="md:pt-0 pt-16">
            {children}
          </div>
        </div>
      </div>
    );
  }
  
  // If not logged in, just show the content without dashboard navbar
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  );
} 