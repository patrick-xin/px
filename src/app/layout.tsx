import type { Metadata } from 'next'
import {
  Raleway,
  Poppins,
  Space_Mono,
  Architects_Daughter,
} from "next/font/google";
import './globals.css'
import { cn } from 'lib/utils';
import NoiseOverlay from '@/components/overlay';

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-code",
  weight: ["400", "700"],
});

const architectsDaughtere = Architects_Daughter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quote",
  weight: "400",
});

const montserrat = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        spaceMono.variable,
        montserrat.variable,
        poppins.variable,
        architectsDaughtere.variable,
        "relative min-h-full max-w-[100vw]",
      )}>
        {children}
        {/* <NoiseOverlay /> */}
      </body>
    </html>
  )
}
