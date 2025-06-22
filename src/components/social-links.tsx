"use client";
import { SectionCard } from './section-card';
import { Button } from './ui/button';
import { useLanguage } from '@/context/language-context';

const WhatsappIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8">
      <title>WhatsApp</title>
      <path d="M12.04 2.002c-5.524 0-10 4.476-10 10.002 0 1.75.45 3.42 1.25 4.9L2 22l5.25-1.375a9.92 9.92 0 0 0 4.79 1.226h.002c5.524 0 10-4.478 10-10.002s-4.476-10-10-10.002zm0 18.252c-1.55 0-3.04-.38-4.38-1.07l-.31-.18-3.25.85.87-3.18-.2-.33a8.2 8.2 0 0 1-1.26-4.44c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24s-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.8s-.39-.12-.56.12c-.17.25-.64.8-.79.97s-.3.17-.56.05c-.25-.12-1.07-.39-2.04-1.26s-1.47-1.92-1.64-2.24c-.17-.32-.02-.5.1-.62s.25-.3.37-.45.17-.25.25-.42.02-.3-.03-.42c-.05-.12-.56-1.35-.76-1.84s-.4-.4-.55-.4h-.5c-.17 0-.45.02-.68.27s-.88.85-.88 2.07.9 2.4 1.03 2.57.17.25 1.77 2.76 2.45 1.9 3.3 2.3.9.15 1.48.1c.62-.05 1.47-.6 1.68-1.18s.2-1.1.15-1.25c-.05-.12-.17-.2-.25-.32z"/>
    </svg>
);

const InstagramIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8">
      <title>Instagram</title>
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.305-1.457.717-2.126 1.384S.935 3.356.63 4.14C.333 4.905.13 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.26 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.885 5.885 0 0 0 4.14 23.37c.766.298 1.636.498 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.26 2.913-.558a5.885 5.885 0 0 0 2.126-1.384 5.885 5.885 0 0 0 1.384-2.126c.298-.765.498-1.636.558-2.913C23.988 15.667 24 15.26 24 12s-.015-3.667-.072-4.947c-.06-1.277-.26-2.148-.558-2.913a5.885 5.885 0 0 0-1.384-2.126A5.885 5.885 0 0 0 19.86.63c-.765-.298-1.636-.498-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.06 1.17-.249 1.805-.413 2.227a3.48 3.48 0 0 1-.896 1.382 3.48 3.48 0 0 1-1.381.896c-.423.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.06-1.805-.249-2.227-.413a3.48 3.48 0 0 1-1.382-.896 3.48 3.48 0 0 1-.896-1.381c-.164-.423-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.074-4.85c.06-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382a3.48 3.48 0 0 1 1.381-.896c.423-.164 1.057.36 2.227.413C8.415 2.175 8.793 2.16 12 2.16zm0 5.48c-2.336 0-4.22 1.884-4.22 4.22s1.884 4.22 4.22 4.22 4.22-1.884 4.22-4.22-1.884-4.22-4.22-4.22zm0 6.882c-1.474 0-2.662-1.188-2.662-2.662s1.188-2.662 2.662-2.662 2.662 1.188 2.662 2.662-1.188 2.662-2.662 2.662zm5.41-8.532c-.596 0-1.077.48-1.077 1.076s.48 1.076 1.077 1.076 1.077-.48 1.077-1.076-.48-1.076-1.077-1.076z"/>
    </svg>
);


export function SocialLinks() {
  const { t } = useLanguage();
  return (
    <SectionCard title={t.socialsTitle} id="socials">
      <div className="flex justify-center items-center flex-wrap gap-4">
        <Button 
          variant="outline" 
          size="lg" 
          className="rounded-full px-8 bg-transparent border-primary/50 text-primary hover:bg-gradient-to-br hover:from-primary hover:to-border hover:text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" 
          asChild
        >
          <a href="https://www.instagram.com/_chirag16/" aria-label={t.viewOnInstagram} target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
            <span>{t.viewOnInstagram}</span>
          </a>
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="rounded-full px-8 bg-transparent border-primary/50 text-primary hover:bg-gradient-to-br hover:from-primary hover:to-border hover:text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" 
          asChild
        >
          <a href="https://wa.me/919687885411" aria-label={t.contactOnWhatsApp} target="_blank" rel="noopener noreferrer">
            <WhatsappIcon />
            <span>{t.contactOnWhatsApp}</span>
          </a>
        </Button>
      </div>
    </SectionCard>
  );
}
