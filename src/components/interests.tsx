"use client";
import { Film, Plane, Trophy, UtensilsCrossed } from 'lucide-react';
import { SectionCard } from './section-card';
import { ReactElement } from 'react';
import { useLanguage } from '@/context/language-context';

export function Interests() {
  const { t } = useLanguage();

  const interests: { name: string, icon: ReactElement }[] = [
    { name: t.interestMovies, icon: <Film className="w-8 h-8" /> },
    { name: t.interestSports, icon: <Trophy className="w-8 h-8" /> },
    { name: t.interestFood, icon: <UtensilsCrossed className="w-8 h-8" /> },
    { name: t.interestTraveling, icon: <Plane className="w-8 h-8" /> },
  ];

  return (
    <SectionCard title={t.interestsTitle} id="interests">
      <div className="flex justify-center flex-wrap gap-4 text-center">
        {interests.map((interest) => (
          <div key={interest.name} className="p-4 bg-secondary/70 rounded-lg flex flex-col items-center justify-center gap-2 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 border border-transparent hover:border-primary/50 w-40">
            <div className="text-primary/80">{interest.icon}</div>
            <p className="font-semibold text-sm text-foreground">{interest.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-muted-foreground bg-secondary/70 p-4 rounded-lg">
        <p className='text-lg'>{t.lifestyle}</p>
      </div>
    </SectionCard>
  );
}
