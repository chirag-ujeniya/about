import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay: number; // delay in ms
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, delay }) => {
  return (
    <div 
      className={cn("animate-fade-in [animation-fill-mode:backwards]", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
