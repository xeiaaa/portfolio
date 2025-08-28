export interface Experience {
  title: string;
  company: {
    url: string;
    name: string;
  };
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
  demoLink?: string;
  company: {
    url: string;
    name: string;
  };
}

export interface NavItem {
  label: string;
  id: string;
}

export interface AboutParagraph {
  paragraph: string;
  highlights: string[];
  bold: string[];
  italic: string[];
}
