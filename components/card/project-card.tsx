'use client';

import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const ProjectCard = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-black dark:text-white">{t('project')}</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <Card className="transition-shadow hover:shadow-md dark:bg-muted bg-white overflow-hidden">
          <Image
            src='/cupon.webp'
            alt='Cupon finder'
            width={600}
            height={300}
            loading='lazy'
            className="w-full h-[200px] object-cover"
          />

          <CardHeader>
            <CardTitle className="text-xl text-primary">Cupon Finder</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Bu loyha cupon topish uchun qilingan, ya`ni sitedan discount uchun turli xil promocodelar topishingiz mumkin.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge className="text-xs text-gray-700 dark:text-gray-200 bg-primary/30">React</Badge>
              <Badge className="text-xs text-gray-700 dark:text-gray-200 bg-primary/30">Typescript</Badge>
              <Badge className="text-xs text-gray-700 dark:text-gray-200 bg-primary/30">Tailwind CSS</Badge>
              <Badge className="text-xs text-gray-700 dark:text-gray-200 bg-primary/30">Shadcn</Badge>
              <Badge className="text-xs text-gray-700 dark:text-gray-200 bg-primary/30">Firebase</Badge>
            </div>

            <div className="flex gap-4">
              <Link href='https://cuponuz.vercel.app' target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
                <ExternalLink size={16} /> Live Demo
              </Link>

              <Link href='https://github.com/BegiDev/coupon' target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:underline">
                <Github size={16} /> Code
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-shadow hover:shadow-md dark:bg-muted bg-white overflow-hidden">
          <Image
            src='/block.webp'
            alt='BlockDrop'
            width={600}
            height={300}
            loading='lazy'
            className="w-full h-[200px] object-cover"
          />

          <CardHeader>
            <CardTitle className="text-xl text-primary">BlockDrop</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Bu loyha blockchainga asoslangan bo`lib filearni xavfsiz jo`natish uchun mo`ljallangan.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge className="text-xs text-gray-700 dark:text-gray-200 bg-primary/30">Python</Badge>
              <Badge className="text-xs text-gray-700 dark:text-gray-200 bg-primary/30">Streamlit</Badge>
            </div>

            <div className="flex gap-4">
              <Link href='https://blockdrop.ngrok.dev' target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
                <ExternalLink size={16} /> Live Demo
              </Link>

              <Link href='https://github.com/BegiDev/blockdrop' target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:underline">
                <Github size={16} /> Code
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-shadow hover:shadow-md dark:bg-muted bg-white overflow-hidden">
          <Image
            src='/pero.webp'
            alt='PeroTravel'
            width={600}
            height={300}
            loading='lazy'
            className="w-full h-[200px] object-cover"
          />

          <CardHeader>
            <CardTitle className="text-xl text-primary">PeroTravel</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Bu loyha turizm uchun qilingan(buyurtma asosida qilingan).
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge className="text-xs text-gray-700 dark:text-gray-200 bg-primary/30">React.js</Badge>
              <Badge className="text-xs text-gray-700 dark:text-gray-200 bg-primary/30">Tailwind CSS</Badge>
            </div>

            <div className="flex gap-4">
              <Link href='https://shoxjahoon7.netlify.app/' target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
                <ExternalLink size={16} /> Live Demo
              </Link>

              <Link href='https://github.com/BegiDev/pero-travel' target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:underline">
                <Github size={16} /> Code
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-shadow hover:shadow-md dark:bg-muted bg-white overflow-hidden">
          <Image
            src='/adolat.webp'
            alt='Adolat qutisi'
            width={600}
            height={300}
            loading='lazy'
            className="w-full h-[200px] object-cover"
          />

          <CardHeader>
            <CardTitle className="text-xl text-primary">Adolat qutisi</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Bu loyha orqali maktabdagi adolat qutisini avtomatlashtirganman, hozirda bu loyha bir necha muammolarni yechilishiga sababchi bo`ldi(500+ user).
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge className="text-xs text-gray-700 dark:text-gray-200 bg-primary/30">Next.js</Badge>
              <Badge className="text-xs text-gray-700 dark:text-gray-200 bg-primary/30">Tailwind CSS</Badge>
              <Badge className="text-xs text-gray-700 dark:text-gray-200 bg-primary/30">Shadcn</Badge>
            </div>

            <div className="flex gap-4">
              <Link href='https://adolat-qutisi.vercel.app/' target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
                <ExternalLink size={16} /> Live Demo
              </Link>

              <Link href='https://github.com/BegiDev/justice-box' target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:underline">
                <Github size={16} /> Code
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectCard;
