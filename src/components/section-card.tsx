import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

const LeafIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-3 text-primary">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.24 16.24C15.65 16.83 14.9 17.29 14.07 17.58C13.23 17.87 12.33 18 11.4 18C9.54 18 7.89 17.28 6.64 16.03C5.39 14.78 4.67 13.13 4.67 11.27C4.67 10.15 4.9 9.11 5.34 8.19C5.78 7.27 6.42 6.48 7.24 5.86C7.83 5.47 8.48 5.17 9.17 4.97C9.86 4.77 10.58 4.67 11.33 4.67C12.94 4.67 14.41 5.25 15.59 6.34L14.18 7.75C13.32 6.9 12.28 6.47 11.12 6.47C10.23 6.47 9.42 6.74 8.75 7.29C8.08 7.84 7.64 8.57 7.48 9.42H11.5V11.22H7.21C7.22 12.42 7.66 13.48 8.49 14.31C9.32 15.14 10.29 15.57 11.4 15.57C12.15 15.57 12.87 15.39 13.52 15.05C14.17 14.71 14.71 14.23 15.12 13.63L16.24 16.24Z" fill="currentColor"/>
    </svg>
);


export function SectionCard({ title, children, className, id }: SectionCardProps) {
  return (
    <section id={id} className={cn("w-full transition-all duration-300 ease-in-out", className)}>
      <h2 className="font-headline text-4xl text-foreground/90 mb-6 flex items-center drop-shadow-[0_1px_2px_rgba(255,215,0,0.2)]">
        <LeafIcon />
        <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent print:bg-none print:text-primary">
          {title}
        </span>
      </h2>
      <div>
        {children}
      </div>
    </section>
  );
}
