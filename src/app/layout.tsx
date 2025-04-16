// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Providers from "./Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sylvano Albertin – Portfolio",
  description: "Découvrez le portfolio de Sylvano Albertin : développeur web passionné et créatif.",
  icons: {
    icon: "/favicon.png",
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 ${geistSans.variable} ${geistMono.variable}`}
      >
        <Providers>
          {children}
        </Providers>
      </body>

    </html>
  );
}
