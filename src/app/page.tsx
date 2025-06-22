"use client"

import { ProfileHeader } from '@/components/profile-header';
import { EducationCareer } from '@/components/education-career';
import { Interests } from '@/components/interests';
import { PhotoGallery } from '@/components/photo-gallery';
import { SocialLinks } from '@/components/social-links';
import { AnimatedSection } from '@/components/animated-section';
import { FamilyDetails } from '@/components/family-details';
import { LanguageSwitcher } from '@/components/language-switcher';
import { GoldenLeaves } from '@/components/golden-leaves';
import { useLanguage } from '@/context/language-context';
import { DownloadPdfButton } from '@/components/download-pdf-button';

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-foreground p-4 sm:p-6 md:p-8 overflow-hidden print:p-8 print:block print:min-h-0 print:bg-transparent">
      
      <div className="w-full max-w-4xl relative z-10 print:max-w-none print:w-full">
        <header className="w-full max-w-4xl print:hidden">
          <LanguageSwitcher />
        </header>

        <main id="printable-area" className="w-full max-w-4xl space-y-12 md:space-y-16 mt-8 p-4 sm:p-8 rounded-2xl bg-card/80 backdrop-blur-sm shadow-2xl shadow-primary/10 print:mt-0 print:p-0 print:rounded-none print:bg-transparent print:backdrop-blur-none print:shadow-none print:border-none">
          <div>
            <GoldenLeaves position="top-left" />
            <GoldenLeaves position="bottom-right" />
          </div>
          
          <div className="print:py-20">
            <AnimatedSection delay={0}>
              <ProfileHeader />
            </AnimatedSection>
          </div>

          <AnimatedSection delay={100} className="print:break-before-page print:pt-8">
            <PhotoGallery />
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <EducationCareer />
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <FamilyDetails />
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <Interests />
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <SocialLinks />
          </AnimatedSection>

          <div className="print:hidden">
            <AnimatedSection delay={600}>
              <DownloadPdfButton />
            </AnimatedSection>
          </div>
        </main>
      </div>

      <footer className="relative z-10 text-center p-8 text-muted-foreground text-sm mt-16 print:hidden">
        <p>&copy; {new Date().getFullYear()} Chirag Ujeniya. {t.footerRights}</p>
      </footer>
    </div>
  );
}
