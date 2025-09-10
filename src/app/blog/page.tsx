import Link from 'next/link';
import { MainNavigation } from '@/components/MainNavigation';
import { Footer } from '@/components/Footer';
import { blogPosts } from '@/data/blog';

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <MainNavigation currentPage={undefined} />

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">Thoughts on designing trustworthy AI and blockchain experiences.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-500 mb-2">{new Date(post.date).toLocaleDateString()}</div>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


