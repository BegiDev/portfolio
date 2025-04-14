import { Metadata } from 'next';

export const metadata: Metadata  = {
    title: "Abduhamidov Begzod | Portfolio",
    description: "Welcome to the personal portfolio of Abduhamidov Begzod — a passionate and creative Frontend Developer. Explore modern web projects, professional experience, and get in touch for collaborations!",
    keywords: [
      "Abduhamidov Begzod", "Begzod Abduhamidov", "Begzod", "begzod", "begzod abduhamidov", 
      "abduhamidov", "begi", "begidev", "begi.dev", "BegiDev", 
      "frontend developer", "front-end developer", "React developer", 
      "Next.js developer", "JavaScript", "TypeScript", 
      "portfolio developer", "developer from Uzbekistan", "personal website", 
      "Abduhamidov", "begzod uz", "abduhamidov portfolio", "begidev.uz"
    ],
    authors: [
      { name: "Abduhamidov Begzod", url: "https://github.com/BegiDev" }
    ],
    openGraph: {
      title: "Abduhamidov Begzod | Portfolio",
      description: "Explore projects and experience of Abduhamidov Begzod, a passionate frontend developer from Uzbekistan.",
      url: "https://begidev.vercel.app/",
      siteName: "BegiDev Portfolio",
      images: [
        {
          url: "https://begidev.vercel.app/begidev.webp",
          width: 1200,
          height: 630,
          alt: "Abduhamidov Begzod Portfolio",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Abduhamidov Begzod | Portfolio",
      description: "Frontend portfolio by Abduhamidov Begzod, built with Next.js and React.",
      site: "@begidev",
      creator: "@begidev",
      images: ["https://begidev.vercel.app/begidev.webp"],
    },
    metadataBase: new URL("https://begidev.vercel.app"),
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    category: "technology",
    alternates: {
      canonical: "https://begidev.vercel.app/",
    },
  };
  
export { default } from './home-client';
