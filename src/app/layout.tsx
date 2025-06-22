import type {Metadata} from 'next';
import { Belleza, Alegreya, Noto_Sans_Gujarati } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from '@/context/language-context';
import { cn } from '@/lib/utils';

const belleza = Belleza({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-belleza',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-alegreya',
});

const notoSansGujarati = Noto_Sans_Gujarati({
  subsets: ['gujarati', 'latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-sans-gujarati',
});


export const metadata: Metadata = {
  title: 'Chirag Ujeniya - Matrimonial Profile',
  description: 'Personal profile of Chirag Ujeniya for matrimonial purposes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "font-body antialiased",
        belleza.variable,
        alegreya.variable,
        notoSansGujarati.variable
      )}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
