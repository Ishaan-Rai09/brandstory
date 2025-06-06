"use client";

import React, { useState } from "react";
import { 
  BarChart, 
  LineChart, 
  PieChart, 
  Calendar, 
  ArrowUp, 
  ArrowDown, 
  Users, 
  Eye, 
  Share2, 
  Download,
  ChevronDown,
  Info
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CardGlass, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// This is a placeholder for actual chart components
// In a real implementation, you would use a library like Chart.js, Recharts, or similar
const ChartPlaceholder = ({ type, height = 200 }) => {
  return (
    <div 
      className="relative w-full rounded-md overflow-hidden"
      style={{ height: `${height}px` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-cyan/10 flex items-center justify-center">
        {type === "line" && (
          <div className="w-full h-full p-4 flex items-center justify-center">
            <svg viewBox="0 0 100 30" className="w-full h-full">
              <path 
                d="M0,25 Q10,20 20,22 T40,15 T60,20 T80,10 T100,15" 
                fill="none" 
                stroke="rgba(139, 92, 246, 0.7)" 
                strokeWidth="2"
              />
              <path 
                d="M0,25 Q10,20 20,22 T40,15 T60,20 T80,10 T100,15" 
                fill="none" 
                stroke="rgba(139, 92, 246, 0.3)" 
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="0,100"
                strokeDashoffset="0"
                className="animate-dash"
              >
                <animate 
                  attributeName="stroke-dasharray" 
                  from="0,100" 
                  to="100,0" 
                  dur="2s" 
                  repeatCount="indefinite" 
                />
              </path>
              <circle cx="20" cy="22" r="2" fill="rgba(139, 92, 246, 1)" />
              <circle cx="40" cy="15" r="2" fill="rgba(139, 92, 246, 1)" />
              <circle cx="60" cy="20" r="2" fill="rgba(139, 92, 246, 1)" />
              <circle cx="80" cy="10" r="2" fill="rgba(139, 92, 246, 1)" />
            </svg>
          </div>
        )}
        
        {type === "bar" && (
          <div className="w-full h-full p-4 flex items-end justify-around">
            {[40, 70, 30, 85, 50, 65, 45].map((height, index) => (
              <div 
                key={index} 
                className="w-[8%] bg-gradient-to-t from-accent to-accent-cyan rounded-t-sm"
                style={{ 
                  height: `${height}%`,
                  animation: `grow 1s ease-out ${index * 0.1}s backwards`
                }}
              />
            ))}
          </div>
        )}
        
        {type === "pie" && (
          <div className="w-full h-full p-4 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-8 border-accent relative overflow-hidden">
              <div className="absolute inset-0 bg-accent-cyan" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)' }}></div>
              <div className="absolute inset-0 bg-accent" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 50%, 50% 50%)' }}></div>
              <div className="absolute inset-0 border-4 border-background rounded-full"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Dummy data for analytics
const analyticsData = {
  totalViews: 1247,
  viewsChange: 12.5,
  totalShares: 86,
  sharesChange: -3.2,
  totalDownloads: 342,
  downloadsChange: 24.7,
  topProject: "LinkedIn Profile Bio",
  topProjectViews: 523,
  recentActivity: [
    { type: "view", project: "LinkedIn Profile Bio", date: "2 hours ago" },
    { type: "share", project: "Pitch Deck Bio", date: "Yesterday" },
    { type: "download", project: "About Me Page", date: "3 days ago" },
    { type: "view", project: "Twitter Bio", date: "1 week ago" },
  ]
};

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d");
  
  return (
    <div className="min-h-screen bg-background">
      <Container className="py-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Analytics Dashboard</h1>
              <p className="text-foreground/70">Track engagement with your brand stories</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-3">
              <div className="bg-white/5 rounded-md border border-white/10 p-1 flex">
                {["7d", "30d", "90d", "1y"].map((range) => (
                  <button
                    key={range}
                    className={`px-3 py-1 text-sm rounded-sm ${
                      timeRange === range 
                        ? "bg-accent text-white" 
                        : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                    }`}
                    onClick={() => setTimeRange(range)}
                  >
                    {range}
                  </button>
                ))}
              </div>
              
              <Button variant="outline" className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Custom Range</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <CardGlass>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Total Views</p>
                  <h3 className="text-3xl font-bold">{analyticsData.totalViews}</h3>
                  <div className={`flex items-center mt-2 ${
                    analyticsData.viewsChange >= 0 ? "text-green-500" : "text-red-500"
                  }`}>
                    {analyticsData.viewsChange >= 0 ? (
                      <ArrowUp className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDown className="w-4 h-4 mr-1" />
                    )}
                    <span className="text-sm">{Math.abs(analyticsData.viewsChange)}%</span>
                    <span className="text-xs text-foreground/50 ml-1">vs. previous period</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-accent" />
                </div>
              </div>
            </CardContent>
          </CardGlass>
          
          <CardGlass>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Total Shares</p>
                  <h3 className="text-3xl font-bold">{analyticsData.totalShares}</h3>
                  <div className={`flex items-center mt-2 ${
                    analyticsData.sharesChange >= 0 ? "text-green-500" : "text-red-500"
                  }`}>
                    {analyticsData.sharesChange >= 0 ? (
                      <ArrowUp className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDown className="w-4 h-4 mr-1" />
                    )}
                    <span className="text-sm">{Math.abs(analyticsData.sharesChange)}%</span>
                    <span className="text-xs text-foreground/50 ml-1">vs. previous period</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-accent-cyan" />
                </div>
              </div>
            </CardContent>
          </CardGlass>
          
          <CardGlass>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Total Downloads</p>
                  <h3 className="text-3xl font-bold">{analyticsData.totalDownloads}</h3>
                  <div className={`flex items-center mt-2 ${
                    analyticsData.downloadsChange >= 0 ? "text-green-500" : "text-red-500"
                  }`}>
                    {analyticsData.downloadsChange >= 0 ? (
                      <ArrowUp className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDown className="w-4 h-4 mr-1" />
                    )}
                    <span className="text-sm">{Math.abs(analyticsData.downloadsChange)}%</span>
                    <span className="text-xs text-foreground/50 ml-1">vs. previous period</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Download className="w-5 h-5 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </CardGlass>
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <CardGlass className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Views Over Time</span>
                <button className="text-foreground/60 hover:text-foreground">
                  <Info className="w-4 h-4" />
                </button>
              </CardTitle>
              <CardDescription>Track how your brand stories are performing</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartPlaceholder type="line" height={250} />
            </CardContent>
          </CardGlass>
          
          <CardGlass>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Engagement Distribution</span>
                <button className="text-foreground/60 hover:text-foreground">
                  <Info className="w-4 h-4" />
                </button>
              </CardTitle>
              <CardDescription>Views, shares, and downloads</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartPlaceholder type="pie" height={250} />
            </CardContent>
          </CardGlass>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardGlass>
            <CardHeader>
              <CardTitle>Top Performing Projects</CardTitle>
              <CardDescription>Projects with the most engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartPlaceholder type="bar" height={200} />
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-md">
                  <div className="flex items-center">
                    <div className="w-2 h-10 bg-accent rounded-sm mr-3"></div>
                    <div>
                      <p className="font-medium">{analyticsData.topProject}</p>
                      <p className="text-sm text-foreground/60">Personal Brand Story</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{analyticsData.topProjectViews} views</p>
                    <p className="text-sm text-green-500">+12% this month</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-md">
                  <div className="flex items-center">
                    <div className="w-2 h-10 bg-accent-cyan rounded-sm mr-3"></div>
                    <div>
                      <p className="font-medium">Pitch Deck Bio</p>
                      <p className="text-sm text-foreground/60">Startup Brand Story</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">342 views</p>
                    <p className="text-sm text-green-500">+8% this month</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </CardGlass>
          
          <CardGlass>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest interactions with your brand stories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-white/5 rounded-md">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'view' 
                        ? 'bg-accent/10' 
                        : activity.type === 'share' 
                          ? 'bg-accent-cyan/10' 
                          : 'bg-purple-500/10'
                    }`}>
                      {activity.type === 'view' && <Eye className="w-4 h-4 text-accent" />}
                      {activity.type === 'share' && <Share2 className="w-4 h-4 text-accent-cyan" />}
                      {activity.type === 'download' && <Download className="w-4 h-4 text-purple-500" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium capitalize">{activity.type}</p>
                        <span className="text-sm text-foreground/60">{activity.date}</span>
                      </div>
                      <p className="text-sm text-foreground/70">{activity.project}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Activity</Button>
            </CardFooter>
          </CardGlass>
        </div>
        
        {/* AI Insights */}
        <div className="mt-8">
          <CardGlass className="border border-accent/20 bg-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-2">
                  <Users className="w-4 h-4 text-accent" />
                </div>
                AI-Powered Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-white/5 rounded-md border-l-2 border-accent">
                <p className="text-sm">
                  <span className="font-medium">Engagement Trend:</span> Your LinkedIn Bio is performing 23% better than similar content in your industry. Consider using similar language in your other brand stories.
                </p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-md border-l-2 border-accent-cyan">
                <p className="text-sm">
                  <span className="font-medium">Optimization Tip:</span> Adding 2-3 more industry-specific keywords could improve the discoverability of your Pitch Deck Bio.
                </p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-md border-l-2 border-purple-500">
                <p className="text-sm">
                  <span className="font-medium">Action Recommendation:</span> Your content is being viewed but not shared as much. Consider adding more shareable one-liners to increase social media engagement.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="neon" className="w-full">
                Generate Detailed Report
              </Button>
            </CardFooter>
          </CardGlass>
        </div>
      </Container>
    </div>
  );
} 