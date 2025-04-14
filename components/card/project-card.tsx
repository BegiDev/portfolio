'use client';

import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; 
import Image from 'next/image';
import Link from "next/link";
import { ProjectCardProps } from '@/types';

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, liveLink, repoLink, image, technologies }) => {
  return (
    <Card className="transition-shadow hover:shadow-md dark:bg-muted bg-white overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={600}
        height={300}
        loading='lazy'
        className="w-full h-[200px] object-cover"
      />
      
      <CardHeader>
        <CardTitle className="text-xl text-primary">{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech: string, index: number) => (
            <Badge key={index} className="text-xs text-gray-700 dark:text-gray-200 bg-primary/30">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4">
          <Link href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
            <ExternalLink size={16} /> Live Demo
          </Link>

          <Link href={repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:underline">
            <Github size={16} /> Code
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
