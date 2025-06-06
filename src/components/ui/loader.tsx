import React from "react";
import { cn } from "@/lib/utils";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "pulse" | "dots" | "spinner";
  color?: "primary" | "accent" | "cyan" | "blue";
}

const Loader = ({
  size = "md",
  variant = "default",
  color = "accent",
  className,
  ...props
}: LoaderProps) => {
  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const colorClasses = {
    primary: "border-primary",
    accent: "border-accent",
    cyan: "border-accent-cyan",
    blue: "border-accent-blue",
  };

  if (variant === "dots") {
    return (
      <div className={cn("flex space-x-2 items-center justify-center", className)} {...props}>
        <div
          className={cn(
            "animate-pulse rounded-full",
            sizeClasses.sm,
            color === "primary" && "bg-primary",
            color === "accent" && "bg-accent",
            color === "cyan" && "bg-accent-cyan",
            color === "blue" && "bg-accent-blue"
          )}
        />
        <div
          className={cn(
            "animate-pulse rounded-full animation-delay-200",
            sizeClasses.sm,
            color === "primary" && "bg-primary",
            color === "accent" && "bg-accent",
            color === "cyan" && "bg-accent-cyan",
            color === "blue" && "bg-accent-blue"
          )}
        />
        <div
          className={cn(
            "animate-pulse rounded-full animation-delay-500",
            sizeClasses.sm,
            color === "primary" && "bg-primary",
            color === "accent" && "bg-accent",
            color === "cyan" && "bg-accent-cyan",
            color === "blue" && "bg-accent-blue"
          )}
        />
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div
        className={cn(
          "relative flex items-center justify-center",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "absolute w-full h-full rounded-full animate-ping opacity-75",
            color === "primary" && "bg-primary",
            color === "accent" && "bg-accent",
            color === "cyan" && "bg-accent-cyan",
            color === "blue" && "bg-accent-blue"
          )}
        />
        <div
          className={cn(
            "rounded-full",
            sizeClasses.sm,
            color === "primary" && "bg-primary",
            color === "accent" && "bg-accent",
            color === "cyan" && "bg-accent-cyan",
            color === "blue" && "bg-accent-blue"
          )}
        />
      </div>
    );
  }

  if (variant === "spinner") {
    return (
      <div
        className={cn(
          "animate-spin rounded-full border-t-2 border-b-2 border-r-2",
          sizeClasses[size],
          colorClasses[color],
          className
        )}
        {...props}
      />
    );
  }

  // Default variant
  return (
    <div className={cn("relative", sizeClasses[size], className)} {...props}>
      <div
        className={cn(
          "absolute inset-0 rounded-full border-2 border-t-transparent animate-spin",
          colorClasses[color]
        )}
      />
      <div
        className={cn(
          "absolute inset-2 rounded-full border border-t-transparent animate-spin animation-delay-150",
          colorClasses[color]
        )}
      />
    </div>
  );
};

export { Loader }; 