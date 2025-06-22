"use client";
import { Briefcase, GraduationCap } from 'lucide-react';
import { SectionCard } from './section-card';
import { useLanguage } from '@/context/language-context';

export function EducationCareer() {
  const { t } = useLanguage();
  return (
    <SectionCard title={t.educationCareerTitle} id="education">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <h3 className="font-headline text-2xl mb-6 flex items-center gap-3 text-foreground/80"><GraduationCap className="w-7 h-7 text-primary" /> {t.educationTitle}</h3>
          <div className="relative pl-6 space-y-6 border-l-2 border-primary/50">
            <div className="relative">
              <div className="absolute -left-[32px] top-1.5 h-4 w-4 rounded-full bg-primary shadow-lg shadow-primary/50" />
              <p className="font-semibold text-lg text-foreground/90">{t.bachelorDegree}</p>
              <p className="text-md text-muted-foreground">{t.universityName}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-headline text-2xl mb-6 flex items-center gap-3 text-foreground/80"><Briefcase className="w-7 h-7 text-primary" /> {t.businessTitle}</h3>
          <div className="relative pl-6 space-y-6 border-l-2 border-primary/50">
            <div className="relative">
                <div className="absolute -left-[32px] top-1.5 h-4 w-4 rounded-full bg-primary shadow-lg shadow-primary/50" />
              <p className="font-semibold text-lg text-foreground/90">{t.businessName}</p>
              <p className="text-md text-muted-foreground">{t.businessType}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
