"use client";

import { Printer } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '@/context/language-context';

export function DownloadPdfButton() {
  const { t } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="text-center mt-12">
        <Button 
          variant="outline" 
          size="lg" 
          className="rounded-full px-8 bg-transparent border-primary/50 text-primary hover:bg-gradient-to-br hover:from-primary hover:to-border hover:text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" 
          onClick={handlePrint}
        >
          <Printer className="w-6 h-6" />
          <span>{t.downloadPDF}</span>
        </Button>
    </div>
  );
}
