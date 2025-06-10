import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { sampleBlogPosts } from '@/sample-posts';
import type { BlogPost } from '@/types';
import { format } from 'date-fns';
import { CalendarDays, UserCircle } from 'lucide-react';
import { SITE_NAME } from '@/lib/constants';

async function getPost(slug: string): Promise<BlogPost | undefined> {
  return sampleBlogPosts.find((post) => post.slug === slug);
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: `Post Not Found | ${SITE_NAME}`,
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: post.author ? [post.author] : [],
    },
  };
}

export async function generateStaticParams() {
  return sampleBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }; // <-- change here: no Promise
}) {
  const { slug } = params; // <-- no await here
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-8">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CalendarDays className="mr-1.5 h-4 w-4" />
            <span>Published on {format(new Date(post.date), 'MMMM d, yyyy')}</span>
          </div>
          {post.author && (
            <div className="flex items-center">
              <UserCircle className="mr-1.5 h-4 w-4" />
              <span>By {post.author}</span>
            </div>
          )}
        </div>
      </header>

      {post.image && (
        <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="h-auto w-full object-cover"
            priority
            data-ai-hint={post.imageHint || 'technology article'}
          />
        </div>
      )}

      <div
        className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-md"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
