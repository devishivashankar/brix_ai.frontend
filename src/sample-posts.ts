// src/sample-posts.ts

import type { BlogPost } from '@/types';

export const sampleBlogPosts: BlogPost[] = [
  {
    slug: 'my-first-post',
    title: 'My First Post',
    excerpt: 'This is a summary of my first post.',
    date: '2025-06-01',
    author: 'Shiva',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'An illustrative image for the first post',
    content: `<p>This is the <strong>content</strong> of my first post.</p>`,
  },
  {
    slug: 'another-post',
    title: 'Another Interesting Post',
    excerpt: 'Summary for another post.',
    date: '2025-06-05',
    author: 'Shiva',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'Image hint for another post',
    content: `<p>More content for another post goes here.</p>`,
  },
];
