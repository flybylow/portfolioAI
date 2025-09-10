import { notFound } from 'next/navigation';
import { MainNavigation } from '@/components/MainNavigation';
import { Footer } from '@/components/Footer';
import { blogPosts } from '@/data/blog';

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: Params) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation currentPage={undefined} />

      <article className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-sm text-gray-500 mb-3">{new Date(post.date).toLocaleDateString()}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="prose prose-gray max-w-none">
            {post.content.split('\n').map((line, idx) => (
              <p key={idx} className="mb-4 whitespace-pre-wrap">{line}</p>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}


