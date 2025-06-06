import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0a0a0f", color: "#f8f8fc" }}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0a0a0f] opacity-90" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl" />
      </div>

      <Container size="sm" className="py-10">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent">
              BrandStory.ai
            </span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-[#f8f8fc]/70">Sign in to your account to continue</p>
        </div>

        <SignIn appearance={{
          elements: {
            formButtonPrimary: "bg-accent hover:bg-accent/80 text-white",
            card: "bg-[#0a0a0f]/80 border border-white/10 backdrop-blur-md",
            headerTitle: "text-[#f8f8fc]",
            headerSubtitle: "text-[#f8f8fc]/70",
            formFieldLabel: "text-[#f8f8fc]",
            formFieldInput: "bg-[#0a0a0f] border-white/10 text-[#f8f8fc]",
            footerActionLink: "text-accent hover:text-accent/80",
          }
        }} />

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-[#f8f8fc]/70 hover:text-accent">
            ← Back to home
          </Link>
        </div>
      </Container>
    </main>
  );
} 