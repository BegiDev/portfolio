import { I18nProvider } from "@/components/providers/i18n-provider";
import "./styles/globals.css";
import { ThemeProvider } from "@/components/providers/theme-providers";
import { ChildProps } from "@/types";
import type { Metadata } from "next";
import React from "react";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Begzod Abduhamidov",
  description: "Web Developer | Next.js, React, TypeScript, and Frontend Enthusiast",
  keywords: [
    "Begzod Abduhamidov",
    "Frontend Developer",
    "Web Developer",
    "Next.js",
    "React Developer",
    "JavaScript",
    "TypeScript",
    "Frontend Development",
    "Abduhamidov",
    "BegiDev",
    "Portfolio"
  ],
  authors: [{ name: "Begzod Abduhamidov", url: "https://github.com/BegiDev" }],
  openGraph: {
    title: "Begzod Abduhamidov | Portfolio",
    description: "Explore the portfolio of Begzod Abduhamidov, a passionate frontend developer.",
    url: "https://begidev.vercel.app/",
    siteName: "BegiDev Portfolio",
    images: [
      {
        url: "https://begidev.vercel.app/begidev.webp", 
        width: 1200,
        height: 630,
        alt: "Begzod Abduhamidov Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Begzod Abduhamidov | Portfolio",
    description: "Frontend portfolio by Begzod Abduhamidov",
    site: "@begidev",
    creator: "@begidev",
    images: ["https://begidev.vercel.app/begidev.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  metadataBase: new URL("https://begidev.vercel.app/"),
  category: "technology",
  alternates: {
    canonical: "https://begidev.vercel.app/",
  },
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Begzod Abduhamidov | Portfolio</title>

        <link rel="icon" href="https://begidev.vercel.app/begidev.webp" />

        <meta property="og:image" content="https://begidev.vercel.app/begidev.webp" />

        <meta name="twitter:image" content="https://begidev.vercel.app/begidev.webp" />
      </Head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
