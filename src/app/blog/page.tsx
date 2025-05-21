import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { sampleBlogPosts } from './sample-posts';
import type { BlogPost } from '@/types';
import { format } from 'date-fns';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest insights, news, and articles from Brix AI on artificial intelligence, data analytics, and business solutions.',
};

export default function BlogPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 lg:py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Brix AI Blog</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-primary-foreground/80">
            Stay updated with the latest in AI, data analytics, and enterprise solutions. 
            Explore insights, trends, and best practices from our experts.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sampleBlogPosts.map((post: BlogPost) => (
            <Card key={post.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {post.image && (
                <Link href={`/blog/${post.slug}`} className="block">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="h-48 w-full object-cover"
                    data-ai-hint={post.imageHint || "technology blog"}
                  />
                </Link>
              )}
              <CardHeader>
                <CardTitle className="text-xl hover:text-primary">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <CalendarDays className="mr-1.5 h-4 w-4" />
                  <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                  {post.author && <span className="mx-1.5">•</span>}
                  {post.author && <span>By {post.author}</span>}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="p-0 text-primary">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {/* Placeholder for pagination or load more if needed */}
        {/* <div className="mt-12 text-center">
          <Button variant="outline">Load More Posts</Button>
        </div> */}
      </section>
    </div>
  );
}
