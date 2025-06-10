export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date string format e.g. "2025-06-01"
  author?: string;
  image?: string;
  imageHint?: string;
  content: string; // HTML content as a string
}
