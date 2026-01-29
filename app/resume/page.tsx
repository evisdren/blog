import Link from "next/link";

export default function Resume() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="border-b border-blue-200">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-xl font-bold text-slate-800">
            New Blog!
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
              className="text-sm font-medium text-slate-800"
            >
              Resume
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Name and Title */}
        <section className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold text-slate-800">
            Alex Thompson
          </h1>
          <p className="text-xl text-slate-600">Senior Software Engineer</p>
          <p className="mt-2 text-sm text-slate-500">
            San Francisco, CA · alex.johnson@email.com · (555) 123-4567
          </p>
        </section>

        {/* Summary */}
        <section className="mb-10">
          <h2 className="mb-4 border-b border-blue-200 pb-2 text-lg font-semibold text-slate-800">
            Summary
          </h2>
          <p className="text-slate-600">
            Experienced software engineer with 8+ years of expertise in
            full-stack development, specializing in React, Node.js, and cloud
            infrastructure. Passionate about building scalable, user-centric
            applications and mentoring junior developers.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="mb-4 border-b border-blue-200 pb-2 text-lg font-semibold text-slate-800">
            Experience
          </h2>

          <div className="mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Senior Software Engineer
                </h3>
                <p className="text-blue-700">TechCorp Inc.</p>
              </div>
              <span className="text-sm text-slate-500">2021 - Present</span>
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-slate-600">
              <li>
                Led development of a microservices architecture serving 2M+
                daily users
              </li>
              <li>
                Reduced API response times by 40% through optimization and
                caching strategies
              </li>
              <li>Mentored a team of 5 junior developers</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Software Engineer
                </h3>
                <p className="text-blue-700">StartupXYZ</p>
              </div>
              <span className="text-sm text-slate-500">2018 - 2021</span>
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-slate-600">
              <li>
                Built and maintained the company&apos;s core React application
              </li>
              <li>
                Implemented CI/CD pipelines reducing deployment time by 60%
              </li>
              <li>Collaborated with design team to improve UX consistency</li>
            </ul>
          </div>

          <div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Junior Developer
                </h3>
                <p className="text-blue-700">WebAgency Co.</p>
              </div>
              <span className="text-sm text-slate-500">2016 - 2018</span>
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-slate-600">
              <li>Developed responsive websites for 20+ clients</li>
              <li>Created reusable component libraries</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="mb-4 border-b border-blue-200 pb-2 text-lg font-semibold text-slate-800">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "Docker",
              "Kubernetes",
              "GraphQL",
              "REST APIs",
              "Git",
              "Rust",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="mb-4 border-b border-blue-200 pb-2 text-lg font-semibold text-slate-800">
            Education
          </h2>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-slate-800">
                B.S. Computer Science
              </h3>
              <p className="text-blue-700">University of California, Berkeley</p>
            </div>
            <span className="text-sm text-slate-500">2012 - 2016</span>
          </div>
        </section>
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
