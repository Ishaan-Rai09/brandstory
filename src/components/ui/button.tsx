import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-200/30 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-amber-200 to-yellow-400 hover:from-amber-300 hover:to-yellow-500 text-black",
        destructive:
          "bg-red-900/80 text-red-100 hover:bg-red-900 border border-red-800/50",
        outline:
          "border border-amber-200/30 bg-transparent hover:bg-amber-900/20 text-amber-200 hover:border-amber-200/60",
        secondary:
          "bg-gray-800/80 text-gray-100 hover:bg-gray-800 border border-gray-700/50",
        ghost:
          "hover:bg-amber-900/20 text-gray-300 hover:text-amber-100",
        link:
          "text-amber-200 underline-offset-4 hover:underline",
        gold:
          "relative bg-gradient-to-r from-amber-200 to-yellow-400 hover:from-amber-300 hover:to-yellow-500 text-black font-medium shadow-lg hover:shadow-amber-900/20",
        glass:
          "bg-black/30 backdrop-blur-md border border-amber-200/10 text-white hover:border-amber-200/30 transition-all duration-300",
      },
      size: {
        default: "h-10 px-5 py-2 rounded-md",
        sm: "h-9 px-4 py-2 rounded-md text-sm",
        lg: "h-12 px-6 py-3 rounded-lg text-base",
        xl: "h-14 px-8 py-4 rounded-lg text-lg",
        icon: "h-10 w-10 rounded-full",
      },
      glow: {
        true: "hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]",
        false: "",
      },
      rounded: {
        full: "rounded-full",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      glow: false,
      rounded: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, glow, rounded, asChild = false, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, glow, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };