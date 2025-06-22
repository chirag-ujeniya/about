"use client";

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from '@/context/language-context';
import { cn } from '@/lib/utils';

export function ProfileHeader() {
  const { t } = useLanguage();
  const [imageLoading, setImageLoading] = useState(true);

  const personalDetails = [
    { label: t.birthDateLabel, value: t.birthDate },
    { label: t.heightLabel, value: t.height },
    { label: t.weightLabel, value: t.weight },
    { label: t.occupationLabel, value: t.business },
    { label: t.addressLabel, value: t.address },
  ];

  return (
    <header className="text-center space-y-8">
      <Avatar className={cn(
        "w-32 h-32 mx-auto border-4 border-primary shadow-xl shadow-primary/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40",
        imageLoading && "animate-pulse bg-muted"
      )}>
        <AvatarImage 
          src="https://raw.githubusercontent.com/chirag-ujeniya/pics/main/aa.jpg" 
          alt="Chirag Ujeniya" 
          onLoadingStatusChange={(status) => {
            if (status === 'loaded' || status === 'error') {
              setImageLoading(false);
            }
          }}
        />
        <AvatarFallback>CU</AvatarFallback>
      </Avatar>
      <div>
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-foreground">Chirag Ujeniya</h1>
        <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto mt-4">
          {t.introduction}
        </p>
      </div>

      <div className="space-y-4 pt-6 border-t border-primary/20 text-left">
        {personalDetails.map((detail, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 max-w-2xl mx-auto">
            <p className="md:col-span-1 font-semibold text-md">
              <span className="bg-gradient-to-r from-primary to-border bg-clip-text text-transparent print:bg-none print:text-primary">
                {detail.label}:
              </span>
            </p>
            <p className="md:col-span-2 text-lg text-foreground">{detail.value}</p>
          </div>
        ))}
      </div>
    </header>
  );
}
