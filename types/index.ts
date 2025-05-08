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

export interface BlogCardProps {
	title: string;
	description: string;
	image: string;
	date: string;
	slug: string;
}

export type PageProps = {
	params: {
		slug: string
	}
}
