"use client"
import Image from 'next/image';
import { SectionCard } from './section-card';
import { useLanguage } from '@/context/language-context';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from "@/lib/utils";

const photos = [
  { src: "https://raw.githubusercontent.com/chirag-ujeniya/pics/main/Snapchat-548482614_imresizer.jpg", alt: "Chirag Ujeniya selfie", hint: "man selfie" },
  { src: "https://raw.githubusercontent.com/chirag-ujeniya/pics/main/1000020865%20(1)_imresizer.jpg", alt: "Chirag Ujeniya portrait", hint: "man portrait" },
  { src: "https://raw.githubusercontent.com/chirag-ujeniya/pics/main/12.jpg", alt: "Chirag in traditional wear", hint: "man traditional" },
  { src: "https://raw.githubusercontent.com/chirag-ujeniya/pics/main/IMG_20231025_141353_imresizer.jpg", alt: "Chirag casual photo", hint: "man casual" },
  { src: "https://raw.githubusercontent.com/chirag-ujeniya/pics/main/IMG_20250613_145000_imresizer.jpg", alt: "Chirag Ujeniya outdoors", hint: "man outdoors" },
  { src: "https://raw.githubusercontent.com/chirag-ujeniya/pics/main/Snapchat-1323153047_imresizer.jpg", alt: "Chirag traveling", hint: "man travel" },
];

export function PhotoGallery() {
  const { t } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string } | null>(null);
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  return (
    <SectionCard title={t.galleryTitle} id="gallery">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 print:grid-cols-3">
        {photos.map((photo, index) => {
          const isLoading = loadingStates[photo.src] !== false;
          return (
            <div 
              key={index} 
              className={cn(
                "overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group aspect-[2/3] print:aspect-[2/3] hover:-translate-y-1 border-2 border-transparent hover:border-primary/50 cursor-pointer",
                isLoading && "animate-pulse bg-muted"
              )}
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                data-ai-hint={photo.hint}
                width={400}
                height={600}
                className={cn(
                  "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                  isLoading ? "opacity-0" : "opacity-100"
                )}
                onLoadingComplete={() => {
                  setLoadingStates(prev => ({ ...prev, [photo.src]: false }));
                }}
              />
            </div>
          )
        })}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={(isOpen) => { if (!isOpen) setSelectedPhoto(null); }}>
        <DialogContent 
            className="bg-transparent border-0 shadow-none p-0 max-w-[90vw] w-auto"
        >
            <DialogTitle className="sr-only">{selectedPhoto?.alt}</DialogTitle>
            {selectedPhoto && (
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  width={1920}
                  height={1080}
                  className="max-h-[90vh] object-contain rounded-lg shadow-2xl w-full h-auto"
                />
            )}
        </DialogContent>
      </Dialog>
    </SectionCard>
  );
}
