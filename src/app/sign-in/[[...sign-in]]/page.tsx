import { SignIn } from "@clerk/nextjs";
import { Navbar } from "@/components/landing/navbar";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-12 flex items-center justify-center">
        <SignIn 
          appearance={{
            elements: {
              card: "bg-glass backdrop-blur-md border border-white/10",
              headerTitle: "text-2xl font-bold text-foreground",
              headerSubtitle: "text-foreground/70",
              formButtonPrimary: "bg-accent hover:bg-accent/90 text-white",
              formFieldLabel: "text-foreground/70",
              formFieldInput: "bg-background border border-white/10 text-foreground",
              footerActionLink: "text-accent hover:text-accent/90",
              dividerLine: "bg-white/10",
              dividerText: "text-foreground/60"
            }
          }}
        />
      </div>
    </div>
  );
} 