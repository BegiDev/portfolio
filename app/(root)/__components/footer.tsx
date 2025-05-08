'use client';

import React from 'react';
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <footer className="pt-10">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-3 md:mb-2 md:mb-0">
            <h2 className="text-2xl font-bold md:text-start text-center">Begzod`s portfolio</h2>
            <p className="text-gray-400 mt-0 md:mt-2">Front-End Developer | Next.js & TypeScript</p>
          </div>

          <div className="flex gap-3 mb-2 md:mb-0">
            <a href='https://www.linkedin.com/in/begzod-abduhamidov-a4966627a/'><Linkedin size={'24'} /></a>
            <a href='https://www.instagram.com/begi.dev/'><Instagram size={'24'} /></a>
            <a href='https://github.com/BegiDev'><Github size={'24'} /></a>
            <a href='https://x.com/begidev'><Twitter size={'24'} /></a>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-3 md:pt-6 mt-3 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Abduhamidov Begzod. {t('footer')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
