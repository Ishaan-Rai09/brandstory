import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex rounded-md border text-sm transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-input bg-[#0a0a0f] hover:border-accent focus:border-accent",
        neon: "border-accent bg-[#0a0a0f]/50 focus:shadow-neon-glow focus:border-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ variant }),
          "h-10 px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#f8f8fc]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input }; 