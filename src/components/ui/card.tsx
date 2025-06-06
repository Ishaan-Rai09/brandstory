import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-[#0a0a0f] shadow-sm transition-all duration-200",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardGlass = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-black/60 shadow-sm transition-all duration-300",
      "backdrop-blur-md border-amber-200/10 hover:border-amber-200/20",
      className
    )}
    {...props}
  />
));
CardGlass.displayName = "CardGlass";

const CardNeon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { color?: "gold" | "amber" | "yellow" }
>(({ className, color = "gold", ...props }, ref) => {
  const neonColors = {
    gold: "border-amber-200/30 hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]",
    amber: "border-amber-400/30 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]",
    yellow: "border-yellow-300/30 hover:shadow-[0_0_30px_rgba(252,211,77,0.2)]",
  };
  
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border bg-black/60 shadow-sm transition-all duration-300",
        "backdrop-blur-md",
        neonColors[color],
        className
      )}
      {...props}
    />
  );
});
CardNeon.displayName = "CardNeon";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-400", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardGlass,
  CardNeon,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
}; 