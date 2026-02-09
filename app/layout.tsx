import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "@/components/Navbar";
import SportsLoader from "@/components/ui/Loader";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"


import Footer from "@/components/Footer";


const ethnocentric = localFont({
  src: [
    {
      path: './fonts/Ethnocentric-Regular.otf',
      weight: '200',
      style: 'normal',
    },

  ],
  variable: '--font-ethno'
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sportech",
  description: "Official Website of Sportech, IIT Delhi",
  icons: {
    icon: "/bsa_logo-name.png",
    apple: "/bsa_logo-name.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ethnocentric.variable} antialiased min-h-screen flex flex-col`}
      >
        <SportsLoader />
        <Navbar />
        {children}
        <Footer />
         <Analytics />
          <SpeedInsights />
      </body>
    </html>
  );
}
