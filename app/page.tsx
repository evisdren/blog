import Link from "next/link";

// Sample blog posts data
const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js 18",
    excerpt:
      "Learn how to build modern web applications with the latest version of Next.js and its powerful new features.",
    date: "January 25, 2026",
    category: "Tutorial",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Understanding React Server Components",
    excerpt:
      "A deep dive into React Server Components and how they change the way we think about building React applications.",
    date: "January 20, 2026",
    category: "React",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Tailwind CSS Tips and Tricks",
    excerpt:
      "Discover advanced techniques and best practices for building beautiful UIs with Tailwind CSS.",
    date: "January 15, 2026",
    category: "CSS",
    readTime: "6 min read",
  },
];

const featuredPost = {
  id: 0,
  title: "Building a Full-Stack App with Next.js and Postgres",
  excerpt:
    "A comprehensive guide to building production-ready applications using Next.js, Server Actions, and PostgreSQL. We'll cover everything from project setup to deployment.",
  date: "January 27, 2026",
  category: "Full Stack",
  readTime: "12 min read",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="border-b border-blue-200">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-xl font-bold text-slate-800">
            New Blog!
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Hero / Featured Post */}
        <section className="mb-16">
          <span className="mb-4 inline-block rounded-full bg-blue-200 px-3 py-1 text-xs font-medium text-blue-900">
            Featured
          </span>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-800 sm:text-4xl">
            {featuredPost.title}
          </h1>
          <p className="mb-4 text-lg text-slate-600">
            {featuredPost.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>{featuredPost.date}</span>
            <span>·</span>
            <span>{featuredPost.readTime}</span>
            <span>·</span>
            <span className="text-blue-700">{featuredPost.category}</span>
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="mb-8 text-xl font-semibold text-slate-800">
            Recent Posts
          </h2>
          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group border-b border-blue-200 pb-8 last:border-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="mb-2 inline-block text-xs font-medium text-blue-700">
                      {post.category}
                    </span>
                    <h3 className="mb-2 text-lg font-semibold text-slate-800 group-hover:text-blue-700">
                      <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="mb-3 text-slate-600">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="rounded-full border border-blue-300 bg-blue-100 px-6 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-blue-400 hover:bg-blue-200">
            Load more posts
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-200 bg-blue-100/50">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              © 2026 The Dev Blog. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-slate-700"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-slate-700"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-slate-700"
              >
                RSS
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
