export interface Experience {
  title: string;
  company: string;
  date: string;
  skills: string[];
  description: string;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  link: string;
  image: string;
  video: string;
  downloads: string;
  bookmarked: string;
  builtWith: string[];
  madeAt: string;
}

export interface NavItem {
  label: string;
  id: string;
}
