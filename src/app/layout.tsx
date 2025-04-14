import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head"; // 👈 Import pour injection manuelle dans <head>
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
  title: "Portfolio Sylvano Albertin",
  description: "Nirindrainy Sylvano Albertin developpeur",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        {/* Balise de vérification Google Search Console */}
        <meta
          name="google-site-verification"
          content="kLIWa6XfD_tBSAVIdEg902-TgyK4XT3gI-yliuPBErk"
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
