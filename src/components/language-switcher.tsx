"use client";

import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex justify-center gap-2 my-4">
      <Button
        onClick={() => setLanguage('en')}
        className={cn(
          'transition-all shadow-md border border-primary/50 px-6 py-2 rounded-md',
          language === 'en'
              ? 'bg-gradient-to-r from-primary to-border text-primary-foreground shadow-lg shadow-primary/30'
              : 'bg-transparent text-primary hover:bg-gradient-to-r hover:from-primary hover:to-border hover:text-primary-foreground'
      )}
      >
        {t.english}
      </Button>
      <Button
        onClick={() => setLanguage('gu')}
        className={cn(
          'transition-all shadow-md border border-primary/50 px-6 py-2 rounded-md',
          language === 'gu'
              ? 'bg-gradient-to-r from-primary to-border text-primary-foreground shadow-lg shadow-primary/30'
              : 'bg-transparent text-primary hover:bg-gradient-to-r hover:from-primary hover:to-border hover:text-primary-foreground'
        )}
      >
        {t.gujarati}
      </Button>
    </div>
  );
}
