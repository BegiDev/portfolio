export interface ChildProps {
	children: React.ReactNode
}

export interface ProjectCardProps {
	title: string;
	description: string;
	liveLink: string;
	repoLink: string;
	image: string;
	technologies: string[]
}

export interface Project {
	title: string;
	description: string;
	liveLink: string;
	repoLink: string;
	image: string;
	technologies: string[];
}
