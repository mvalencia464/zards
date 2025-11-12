import Link from "next/link";

const pages = [
  { href: "/landing", title: "Landing", description: "Main landing page" },
  { href: "/landing2", title: "Landing 2", description: "Alternative landing page" },
  { href: "/design", title: "Design", description: "Design system showcase" },
  { href: "/experience", title: "Experience", description: "Experience overview" },
  { href: "/mechanics", title: "Mechanics", description: "Game mechanics details" },
  { href: "/program", title: "Program", description: "Program information" },
  { href: "/research", title: "Research", description: "Research content" },
  { href: "/romero-decks", title: "Romero Decks", description: "Romero decks showcase" },
  { href: "/speaker", title: "Speaker", description: "Speaker information" },
  { href: "/toolkit", title: "Toolkit", description: "Developer toolkit" },
  { href: "/workshop", title: "Workshop", description: "Workshop details" },
  { href: "/workshop2", title: "Workshop 2", description: "Alternative workshop page" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Navigation Hub
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Explore all available pages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group block p-6 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {page.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {page.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
