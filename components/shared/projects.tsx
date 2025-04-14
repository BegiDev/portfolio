'use client';

import { useTranslation } from 'react-i18next';
import ProjectCard from '../card/project-card';
import { Project } from '@/types';

const Projects = () => {
  const { t } = useTranslation();
  
  const projects = t('projects', { returnObjects: true }) as Project[];

  return (
    <section className="mt-20 space-y-8">
      <h1 className="text-4xl font-bold text-black dark:text-white">{t('projects.title', 'Projects')}</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project: Project, index: number) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
