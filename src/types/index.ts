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

// Chat types
export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  confidence?: number;
}

export interface ChatQuestion {
  question: string;
}

export interface ChatAnswer {
  answer: string;
  confidence?: number;
}
