'use client';

import Article from '@/components/card/article';
import Experience from '@/components/card/experience';
import Projects from '@/components/shared/projects';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

export default function HomeClientPage() {
  const { t } = useTranslation('common');

  return (
    <div className='mt-[80px]'>
      <h1 className='text-[23px] md:text-3xl'>
        👋 {t('intro1')} <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black font-söhne">Abduhamidov Begzod</span>
      </h1>

      <p className='mt-7 text-xl md:text-2xl md:leading-10 text-black/80 dark:text-gray-400'>
        <Trans
          i18nKey="intro"
          t={t}
          components={{
            1: <strong className="dark:text-white" />,
            3: <strong className="dark:text-white" />,
            5: <strong className="dark:text-white" />,
            7: <a href="mailto:abdukhamidov0904@gmail.com" className="text-black font-semibold dark:text-white underline" target="_blank" />
          }}
        />
      </p>

      <div className='flex gap-3 md:gap-5 mt-5'>
        <a href='https://www.linkedin.com/in/begzod-abduhamidov-a4966627a/'><Linkedin size={24} /></a>
        <a href='https://www.instagram.com/begi.dev/'><Instagram size={24} /></a>
        <a href='https://github.com/BegiDev'><Github size={24} /></a>
        <a href='https://x.com/begidev'><Twitter size={24} /></a>
      </div>

      <div className="mt-[80px] space-y-6">
        <Experience />
      </div>

      <div className='mt-[80px]'>
        <Projects />
      </div>

      <div className='mt-[80px]'>
        <Article />
      </div>
    </div>
  );
}
