import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { to: "/writing", label: "Writing" },
  { to: "/projects", label: "Projects" },
  { to: "/media", label: "Media" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <main className="flex-1 mx-auto max-w-2xl w-full px-6 pt-24 sm:pt-32">
        <div className="flex flex-col sm:flex-row sm:items-start gap-10">
          <div
            aria-label="Headshot placeholder"
            className="shrink-0 w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-rule bg-[oklch(0.96_0_0)] flex items-center justify-center text-xs text-ink-muted"
          >
            Headshot
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl font-medium leading-snug">
              Nicholas Weising
            </h1>
            <p className="text-base leading-relaxed text-ink">
              Program Assistant at the Center for Maritime Strategy in
              Washington, D.C. I write on geopolitics, industrial policy,
              maritime security, and national security law.
            </p>
            <nav>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
                {nav.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="hover:text-ink underline underline-offset-4 decoration-rule hover:decoration-ink transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
