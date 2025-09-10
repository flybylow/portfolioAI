import { notFound } from 'next/navigation';
import { MainNavigation } from '@/components/MainNavigation';
import { Footer } from '@/components/Footer';
import { blogPosts } from '@/data/blog';
import { formatDateYYYYMMDD } from '@/lib/utils';
import { marked } from 'marked';

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: Params) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  function stripLeadingH1(markdown: string): string {
    // Remove a single leading level-1 heading (e.g., "# Title") at the very start
    return markdown.replace(/^#\s+[^\n\r]*(\r?\n)?/, '');
  }

  // Configure marked for soft line breaks
  marked.setOptions({ breaks: true });

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation currentPage={undefined} />

      <article className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-sm text-gray-500 mb-3">{formatDateYYYYMMDD(post.date)}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: marked.parse(stripLeadingH1(post.content)) as string }}
          />
        </div>
      </article>

      <Footer />
    </div>
  );
}


