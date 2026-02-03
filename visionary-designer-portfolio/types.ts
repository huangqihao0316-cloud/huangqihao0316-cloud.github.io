
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
  color: string;
}

export interface DesignerWork {
  id: string;
  author: string;
  title: string;
  thumbnail: string;
  likes: number;
}

export interface PhotographyWork {
  id: string;
  title: string;
  location: string;
  image: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}
