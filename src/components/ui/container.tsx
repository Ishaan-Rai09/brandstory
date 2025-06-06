import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  centered?: boolean;
}

const Container = ({
  children,
  className,
  size = "lg",
  centered = false,
  ...props
}: ContainerProps) => {
  const sizeClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "w-full px-4 sm:px-6 mx-auto",
        sizeClasses[size],
        centered && "flex flex-col items-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Container }; 