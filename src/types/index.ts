export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // Full content, could be markdown
  image?: string;
  imageHint?: string;
  author?: string;
};
