"use client";
import { SectionCard } from './section-card';
import { useLanguage } from '@/context/language-context';

export function FamilyDetails() {
  const { t } = useLanguage();

  const familyDetails = [
      { relation: t.father, name: t.fatherName, from: t.fatherFrom },
      { relation: t.mother, name: t.motherName, from: "" },
      { relation: t.brother, name: t.brotherName, from: "" },
      { relation: t.maternalSide, name: t.mosalName, from: t.mosalFrom },
  ];

  return (
    <SectionCard title={t.familyDetailsTitle} id="family">
        <div className="space-y-6">
            {familyDetails.map((member, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4">
                    <p className="md:col-span-1 font-semibold text-md">
                      <span className="bg-gradient-to-r from-primary to-border bg-clip-text text-transparent print:bg-none print:text-primary">
                        {member.relation}:
                      </span>
                    </p>
                    <div className="md:col-span-2">
                        <p className="text-lg text-foreground">{member.name}</p>
                        {member.from && <p className="text-sm text-muted-foreground">{t.from}: {member.from}</p>}
                    </div>
                </div>
            ))}
        </div>
    </SectionCard>
  );
}
