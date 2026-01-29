import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="border-b border-blue-200">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-xl font-bold text-slate-800">
            New Blog!
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-slate-600 hover:text-slate-800"
          >
            About
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-8 text-3xl font-bold text-slate-800">About Us</h1>

        <div className="space-y-6 text-slate-600">
          <p>
            Welcome to New Blog! We're a team of passionate developers and
            writers dedicated to sharing knowledge about modern web development.
          </p>

          <p>
            Founded in 2026, our mission is to make complex technical concepts
            accessible to developers of all skill levels. Whether you're just
            starting out or you're a seasoned professional, we have something
            for you.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-slate-800">
            What We Cover
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>React and Next.js tutorials</li>
            <li>Modern CSS techniques</li>
            <li>Full-stack development guides</li>
            <li>Best practices and design patterns</li>
          </ul>

          <h2 className="pt-4 text-xl font-semibold text-slate-800">
            Get In Touch
          </h2>
          <p>
            Have questions or suggestions? We'd love to hear from you! Reach out
            to us on Twitter or GitHub.
          </p>
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
