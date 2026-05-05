import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/writing", label: "Writing" },
  { to: "/media", label: "Media" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="mx-auto max-w-3xl px-6 pt-10 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
        <Link to="/" className="text-xl font-medium text-ink hover:text-accent-ink transition-colors">
          Nicholas Weising
        </Link>
        <nav>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-muted">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-ink underline underline-offset-4" }}
                  className="hover:text-ink transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
