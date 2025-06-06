import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { CustomCursor } from "@/components/ui/custom-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrandStory.ai - AI-Powered Personal & Business Branding Generator",
  description: "Transform your personal or business branding with our AI-powered platform. Create compelling brand stories, bios, and pitches in minutes, not days.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
        <body className="min-h-screen antialiased bg-black text-white">
          <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-gray-900 to-black pointer-events-none"></div>
          <CustomCursor />
          <div className="w-full">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
