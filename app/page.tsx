import Link from "next/link";

/**
 * Formats a date into a readable string (e.g., "January 25, 2026").
 */
function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Sample blog posts data
const posts = [
  {
    id: 11,
    title: "CSS Container Queries: The Future of Responsive Design",
    excerpt:
      "Discover how container queries revolutionize component-based styling. Learn to build truly modular UI components that adapt to their context.",
    date: "January 29, 2026",
    category: "CSS",
    readTime: "6 min read",
  },
  {
    id: 10,
    title: "Edge Computing with Next.js Middleware",
    excerpt:
      "Explore the power of edge functions and middleware in Next.js. Handle authentication, geolocation, and A/B testing at the edge.",
    date: "January 29, 2026",
    category: "Performance",
    readTime: "8 min read",
  },
  {
    id: 9,
    title: "Testing React Applications with Vitest",
    excerpt:
      "A practical guide to testing React components using Vitest. Covers unit tests, integration tests, and mocking strategies for modern apps.",
    date: "January 28, 2026",
    category: "Testing",
    readTime: "9 min read",
  },
  {
    id: 8,
    title: "Building APIs with Next.js Route Handlers",
    excerpt:
      "Learn how to create powerful REST APIs using Next.js Route Handlers. Covers request handling, validation, and best practices.",
    date: "January 28, 2026",
    category: "API",
    readTime: "7 min read",
  },
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
    id: 4,
    title: "TypeScript Generics Demystified",
    excerpt:
      "Master TypeScript generics with practical examples. Learn how to write flexible, reusable code that maintains type safety.",
    date: "January 10, 2026",
    category: "TypeScript",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Authentication Patterns in Modern Web Apps",
    excerpt:
      "Explore different authentication strategies including JWT, sessions, and OAuth. Learn when to use each approach.",
    date: "January 5, 2026",
    category: "Security",
    readTime: "10 min read",
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

const hasMorePosts = false;

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="border-b border-blue-200">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-xl font-bold text-slate-800">
            Tech Blog!
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm font-medium text-slate-600 hover:text-slate-800"
            >
              About
            </Link>
            <Link
              href="/resume"
              className="text-sm font-medium text-slate-600 hover:text-slate-800"
            >
              Resume
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Hero / Featured Post */}
        <section className="mb-16">
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
        {hasMorePosts && (
          <div className="mt-12 text-center">
            <button className="rounded-full border border-blue-300 bg-blue-100 px-6 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-blue-400 hover:bg-blue-200">
              Load more posts
            </button>
          </div>
        )}
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
