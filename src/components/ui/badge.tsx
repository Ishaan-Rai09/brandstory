import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-red-500 text-white",
        outline:
          "text-[#f8f8fc]",
        neon:
          "border-accent bg-accent/20 text-accent shadow-neon-glow",
        "neon-cyan":
          "border-accent-cyan bg-accent-cyan/20 text-accent-cyan shadow-neon-glow-cyan",
        "neon-blue":
          "border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white hover:shadow-neon-glow-blue transition-all duration-300",
        glass:
          "border-white/10 bg-glass backdrop-blur-md text-white",
      },
      glow: {
        true: "shadow-neon-glow",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      glow: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, glow, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, glow, className }))} {...props} />
  );
}

export { Badge, badgeVariants }; 