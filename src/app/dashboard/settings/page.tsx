"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserProfile } from "@clerk/nextjs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Bell, Globe, Lock, Moon, Palette, Shield, User } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account");
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="p-6 md:p-8 max-w-6xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-foreground/60">Manage your account and preferences</p>
        </div>

        <Tabs defaultValue="account" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-6">
            <TabsTrigger value="account" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="hidden md:inline">Account</span>
            </TabsTrigger>
            <TabsTrigger value="appearance" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              <span className="hidden md:inline">Appearance</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              <span className="hidden md:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span className="hidden md:inline">Privacy</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="hidden md:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value="language" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span className="hidden md:inline">Language</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="space-y-6">
            <Card className="border border-white/10 bg-glass">
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Manage your Clerk account information</CardDescription>
              </CardHeader>
              <CardContent>
                <UserProfile 
                  appearance={{
                    elements: {
                      rootBox: "w-full mx-auto",
                      card: "bg-transparent shadow-none border-0",
                      navbar: "hidden",
                      pageScrollBox: "p-0"
                    }
                  }}
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance" className="space-y-6">
            <Card className="border border-white/10 bg-glass">
              <CardHeader>
                <CardTitle>Theme</CardTitle>
                <CardDescription>Customize the look and feel of the application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Moon className="w-5 h-5 text-accent" />
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                  </div>
                  <Switch id="dark-mode" defaultChecked />
                </div>
                
                <div className="space-y-2">
                  <Label>Accent Color</Label>
                  <div className="grid grid-cols-6 gap-2">
                    {["#7C3AED", "#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#EC4899"].map((color) => (
                      <button 
                        key={color}
                        className="w-full aspect-square rounded-full border-2 border-white/10 hover:border-white/30 transition-all"
                        style={{ backgroundColor: color }}
                        aria-label={`Select ${color} as accent color`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="animation-level">Animation Level</Label>
                    <span className="text-sm text-foreground/60">High</span>
                  </div>
                  <Slider defaultValue={[75]} max={100} step={25} />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-white/10 bg-glass">
              <CardHeader>
                <CardTitle>Interface Density</CardTitle>
                <CardDescription>Adjust the spacing and density of the user interface</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  <button className="border border-white/10 hover:border-accent rounded-md p-4 flex flex-col items-center justify-center gap-2 bg-white/5 hover:bg-white/10 transition-all">
                    <div className="w-full h-2 bg-white/20 rounded-sm mb-1"></div>
                    <div className="w-full h-2 bg-white/20 rounded-sm mb-1"></div>
                    <div className="w-full h-2 bg-white/20 rounded-sm"></div>
                    <span className="text-sm mt-2">Compact</span>
                  </button>
                  <button className="border border-accent rounded-md p-4 flex flex-col items-center justify-center gap-3 bg-accent/5 hover:bg-accent/10 transition-all">
                    <div className="w-full h-2 bg-accent/40 rounded-sm mb-2"></div>
                    <div className="w-full h-2 bg-accent/40 rounded-sm mb-2"></div>
                    <div className="w-full h-2 bg-accent/40 rounded-sm"></div>
                    <span className="text-sm mt-2">Default</span>
                  </button>
                  <button className="border border-white/10 hover:border-accent rounded-md p-4 flex flex-col items-center justify-center gap-4 bg-white/5 hover:bg-white/10 transition-all">
                    <div className="w-full h-2 bg-white/20 rounded-sm mb-3"></div>
                    <div className="w-full h-2 bg-white/20 rounded-sm mb-3"></div>
                    <div className="w-full h-2 bg-white/20 rounded-sm"></div>
                    <span className="text-sm mt-2">Comfortable</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
            <Card className="border border-white/10 bg-glass">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose what notifications you receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Project Updates</p>
                      <p className="text-sm text-foreground/60">Get notified when your projects are updated</p>
                    </div>
                    <Switch id="project-updates" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Emails</p>
                      <p className="text-sm text-foreground/60">Receive emails about new features and offers</p>
                    </div>
                    <Switch id="marketing" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Social Notifications</p>
                      <p className="text-sm text-foreground/60">Get notified when someone mentions you</p>
                    </div>
                    <Switch id="social" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Security Alerts</p>
                      <p className="text-sm text-foreground/60">Get notified about security issues</p>
                    </div>
                    <Switch id="security" defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-white/10 bg-glass">
              <CardHeader>
                <CardTitle>Email Digest</CardTitle>
                <CardDescription>Configure your weekly summary email</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="digest-enabled">Weekly Digest</Label>
                    <Switch id="digest-enabled" defaultChecked />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="digest-day">Delivery Day</Label>
                      <select id="digest-day" className="w-full bg-background border border-white/10 rounded-md p-2">
                        <option>Monday</option>
                        <option>Wednesday</option>
                        <option>Friday</option>
                        <option>Sunday</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="digest-time">Delivery Time</Label>
                      <select id="digest-time" className="w-full bg-background border border-white/10 rounded-md p-2">
                        <option>Morning (8 AM)</option>
                        <option>Afternoon (1 PM)</option>
                        <option>Evening (6 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="privacy" className="space-y-6">
            <Card className="border border-white/10 bg-glass">
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control your data and privacy preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Data Collection</p>
                      <p className="text-sm text-foreground/60">Allow us to collect usage data to improve our service</p>
                    </div>
                    <Switch id="data-collection" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Profile Visibility</p>
                      <p className="text-sm text-foreground/60">Make your profile visible to other users</p>
                    </div>
                    <Switch id="profile-visibility" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Cookie Preferences</p>
                      <p className="text-sm text-foreground/60">Manage cookies and tracking technologies</p>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="space-y-6">
            <Card className="border border-white/10 bg-glass">
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>Add an extra layer of security to your account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-foreground/60">Secure your account with 2FA</p>
                    </div>
                    <Button variant="outline">Setup 2FA</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-white/10 bg-glass">
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  
                  <Button>Update Password</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="language" className="space-y-6">
            <Card className="border border-white/10 bg-glass">
              <CardHeader>
                <CardTitle>Language & Region</CardTitle>
                <CardDescription>Set your language and regional preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <select id="language" className="w-full bg-background border border-white/10 rounded-md p-2">
                        <option>English (US)</option>
                        <option>English (UK)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                        <option>Japanese</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <select id="timezone" className="w-full bg-background border border-white/10 rounded-md p-2">
                        <option>Pacific Time (UTC-8)</option>
                        <option>Mountain Time (UTC-7)</option>
                        <option>Central Time (UTC-6)</option>
                        <option>Eastern Time (UTC-5)</option>
                        <option>UTC</option>
                        <option>Central European Time (UTC+1)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button>Save Preferences</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
}