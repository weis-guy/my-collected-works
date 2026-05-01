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
    <header className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-5xl px-6 pt-8 pb-4">
        <div className="flex items-center justify-between gap-6 text-[0.7rem] text-ink-muted smallcaps">
          <span>Vol. I &nbsp;·&nbsp; Washington, D.C.</span>
          <span className="hidden sm:inline">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <Link to="/" className="block text-center mt-2">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-ink">
            Nicholas Weising
          </h1>
          <p className="mt-2 text-[0.72rem] smallcaps text-ink-muted">
            Writing &nbsp;·&nbsp; Research &nbsp;·&nbsp; Public Affairs
          </p>
        </Link>
      </div>
      <nav className="border-t border-b border-rule">
        <ul className="mx-auto max-w-5xl flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-3 text-[0.72rem] smallcaps text-ink">
          {nav.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-accent-ink underline underline-offset-4" }}
                className="hover:text-accent-ink transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
