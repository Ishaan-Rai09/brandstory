"use client";

import React, { useState } from "react";
import { 
  CreditCard, 
  CheckCircle2, 
  Download, 
  AlertCircle,
  X
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CardGlass, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Dummy data for billing
const billingData = {
  currentPlan: "free",
  nextBillingDate: "N/A",
  paymentMethod: null,
  invoices: [
    { id: "INV-001", date: "2023-04-15", amount: "$19.00", status: "paid" },
    { id: "INV-002", date: "2023-05-15", amount: "$19.00", status: "paid" },
    { id: "INV-003", date: "2023-06-15", amount: "$19.00", status: "paid" },
  ]
};

const plans = [
  {
    id: "free",
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    description: "Perfect for trying out BrandStory.ai",
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
  },
  {
    id: "pro",
    name: "Pro",
    price: { monthly: 29, yearly: 19 },
    description: "Everything you need for professional branding",
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
  },
];

export default function BillingPage() {
  const [annual, setAnnual] = useState(true);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentFormData, setPaymentFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvc: "",
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentFormData({
      ...paymentFormData,
      [name]: value,
    });
  };
  
  const handleSubmitPayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setShowPaymentForm(false);
      // Update billing data would happen here
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Container className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Billing & Subscription</h1>
            <p className="text-foreground/70">Manage your subscription and payment methods</p>
          </div>
          
          {/* Current Plan */}
          <CardGlass className="mb-8">
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>Your current subscription details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold mr-3 capitalize">
                      {billingData.currentPlan} Plan
                    </h3>
                    <Badge variant="default" className={billingData.currentPlan === "free" ? "bg-accent text-white" : "bg-accent-cyan text-white"}>
                      {billingData.currentPlan === "free" ? "Current" : "Active"}
                    </Badge>
                  </div>
                  
                  {billingData.currentPlan !== "free" && (
                    <div className="text-sm text-foreground/70">
                      <p>Next billing date: {billingData.nextBillingDate}</p>
                      <p>Billing cycle: {annual ? "Yearly" : "Monthly"}</p>
                    </div>
                  )}
                </div>
                
                <div className="mt-4 md:mt-0">
                  {billingData.currentPlan === "free" ? (
                    <Button variant="default" className="bg-accent-cyan hover:bg-accent-cyan/90">Upgrade to Pro</Button>
                  ) : (
                    <Button variant="outline">Cancel Subscription</Button>
                  )}
                </div>
              </div>
            </CardContent>
          </CardGlass>
          
          {/* Payment Method */}
          <CardGlass className="mb-8">
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Manage your payment details</CardDescription>
            </CardHeader>
            <CardContent>
              {billingData.paymentMethod ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-8 bg-white/10 rounded-md flex items-center justify-center mr-4">
                      <CreditCard className="w-6 h-6 text-foreground/70" />
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-foreground/60">Expires 12/25</p>
                    </div>
                  </div>
                  <Button variant="outline">Edit</Button>
                </div>
              ) : (
                <div>
                  {showPaymentForm ? (
                    <form onSubmit={handleSubmitPayment}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium mb-2">
                            Card Number
                          </label>
                          <Input 
                            name="cardNumber" 
                            value={paymentFormData.cardNumber} 
                            onChange={handleInputChange} 
                            placeholder="1234 5678 9012 3456" 
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Cardholder Name
                          </label>
                          <Input 
                            name="cardName" 
                            value={paymentFormData.cardName} 
                            onChange={handleInputChange} 
                            placeholder="John Doe" 
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Expiry Date
                            </label>
                            <Input 
                              name="expiry" 
                              value={paymentFormData.expiry} 
                              onChange={handleInputChange} 
                              placeholder="MM/YY" 
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              CVC
                            </label>
                            <Input 
                              name="cvc" 
                              value={paymentFormData.cvc} 
                              onChange={handleInputChange} 
                              placeholder="123" 
                              required
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-3">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setShowPaymentForm(false)}
                        >
                          Cancel
                        </Button>
                        <Button type="submit" variant="default" className="bg-accent hover:bg-accent/90">
                          Save Card
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                        <CreditCard className="w-8 h-8 text-foreground/60" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">No Payment Method</h3>
                      <p className="text-foreground/60 mb-6">
                        Add a payment method to upgrade to Pro
                      </p>
                      <Button 
                        variant="default" 
                        className="bg-accent hover:bg-accent/90"
                        onClick={() => setShowPaymentForm(true)}
                      >
                        Add Payment Method
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </CardGlass>
          
          {/* Subscription Plans */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Subscription Plans</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
                Choose the plan that's right for you
              </p>

              <div className="flex items-center justify-center space-x-4 mb-12">
                <span className={`text-lg ${!annual ? "text-foreground" : "text-foreground/50"}`}>Monthly</span>
                <div 
                  className="w-16 h-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 p-1 cursor-pointer"
                  onClick={() => setAnnual(!annual)}
                >
                  <div 
                    className={`w-6 h-6 rounded-full bg-accent transition-all duration-300 ${
                      annual ? "translate-x-8" : "translate-x-0"
                    }`} 
                  />
                </div>
                <span className={`text-lg ${annual ? "text-foreground" : "text-foreground/50"}`}>
                  Yearly <Badge variant="default" className="ml-2 bg-accent text-white">Save 33%</Badge>
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {plans.map((plan) => (
                <CardGlass 
                  key={plan.id} 
                  className={`relative border ${
                    plan.color === "purple" 
                      ? "border-accent/20" 
                      : "border-accent-cyan/20"
                  }`}
                >
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="flex items-end">
                        <span className="text-4xl font-bold">
                          ${annual ? plan.price.yearly : plan.price.monthly}
                        </span>
                        {plan.price.monthly > 0 && (
                          <span className="text-foreground/70 ml-2">/ {annual ? "year" : "month"}</span>
                        )}
                      </div>
                      {plan.price.monthly === 0 && (
                        <p className="text-sm text-foreground/70">Free forever</p>
                      )}
                    </div>
                    
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          {feature.included ? (
                            <CheckCircle2 className={`w-5 h-5 mr-3 ${
                              plan.color === "purple" ? "text-accent" : "text-accent-cyan"
                            }`} />
                          ) : (
                            <X className="w-5 h-5 mr-3 text-foreground/30" />
                          )}
                          <span className={feature.included ? "text-foreground" : "text-foreground/50"}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    {billingData.currentPlan === plan.id ? (
                      <Button 
                        variant="outline" 
                        className="w-full"
                        disabled
                      >
                        Current Plan
                      </Button>
                    ) : (
                      <Button 
                        variant="default" 
                        className={`w-full ${
                          plan.color === "purple" 
                            ? "bg-accent hover:bg-accent/90" 
                            : "bg-accent-cyan hover:bg-accent-cyan/90"
                        }`}
                      >
                        {plan.id === "free" ? "Downgrade to Free" : "Upgrade to Pro"}
                      </Button>
                    )}
                  </CardFooter>
                </CardGlass>
              ))}
            </div>
          </div>
          
          {/* Billing History */}
          <CardGlass>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>Your recent invoices and payments</CardDescription>
            </CardHeader>
            <CardContent>
              {billingData.invoices.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 font-medium">Invoice</th>
                        <th className="text-left py-3 px-4 font-medium">Date</th>
                        <th className="text-left py-3 px-4 font-medium">Amount</th>
                        <th className="text-left py-3 px-4 font-medium">Status</th>
                        <th className="text-right py-3 px-4 font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {billingData.invoices.map((invoice) => (
                        <tr key={invoice.id} className="border-b border-white/5 hover:bg-white/5">
                          <td className="py-3 px-4">{invoice.id}</td>
                          <td className="py-3 px-4">{invoice.date}</td>
                          <td className="py-3 px-4">{invoice.amount}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              invoice.status === "paid" 
                                ? "bg-green-500/20 text-green-500" 
                                : "bg-yellow-500/20 text-yellow-500"
                            }`}>
                              {invoice.status === "paid" ? (
                                <CheckCircle2 className="w-3 h-3 mr-1" />
                              ) : (
                                <AlertCircle className="w-3 h-3 mr-1" />
                              )}
                              {invoice.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <Download className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 text-foreground/60">
                  No billing history available
                </div>
              )}
            </CardContent>
          </CardGlass>
        </div>
      </Container>
    </div>
  );
} 