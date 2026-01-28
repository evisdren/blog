import Link from "next/link";

// Sample blog posts data
const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js 16",
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
  {
    id: 4,
    title: "The Future of Web Development",
    excerpt:
      "Exploring emerging trends and technologies that will shape the future of web development.",
    date: "January 10, 2026",
    category: "Opinion",
    readTime: "4 min read",
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
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="border-b border-amber-200">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-xl font-bold text-stone-800">
            The Dev Blog
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-stone-600 hover:text-stone-900"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-stone-600 hover:text-stone-900"
            >
              About
            </Link>
            <Link
              href="/archive"
              className="text-sm font-medium text-stone-600 hover:text-stone-900"
            >
              Archive
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Hero / Featured Post */}
        <section className="mb-16">
          <span className="mb-4 inline-block rounded-full bg-amber-200 px-3 py-1 text-xs font-medium text-amber-900">
            Featured
          </span>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-stone-800 sm:text-4xl">
            {featuredPost.title}
          </h1>
          <p className="mb-4 text-lg text-stone-600">
            {featuredPost.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-stone-500">
            <span>{featuredPost.date}</span>
            <span>·</span>
            <span>{featuredPost.readTime}</span>
            <span>·</span>
            <span className="text-amber-700">{featuredPost.category}</span>
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="mb-8 text-xl font-semibold text-stone-800">
            Recent Posts
          </h2>
          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group border-b border-amber-200 pb-8 last:border-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="mb-2 inline-block text-xs font-medium text-amber-700">
                      {post.category}
                    </span>
                    <h3 className="mb-2 text-lg font-semibold text-stone-800 group-hover:text-amber-700">
                      <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="mb-3 text-stone-600">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-stone-500">
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
          <button className="rounded-full border border-amber-300 bg-amber-100 px-6 py-2 text-sm font-medium text-stone-700 transition-colors hover:border-amber-400 hover:bg-amber-200">
            Load more posts
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-200 bg-amber-100/50">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-stone-500">
              © 2026 The Dev Blog. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-sm text-stone-500 hover:text-stone-700"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-stone-500 hover:text-stone-700"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm text-stone-500 hover:text-stone-700"
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
