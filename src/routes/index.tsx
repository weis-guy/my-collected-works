import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { writings, appearances } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6">
        <section className="space-y-5 text-base leading-relaxed">
          <p>
            I'm Nicholas Weising, a Program Assistant at the{" "}
            <a
              href="https://centerformaritimestrategy.org/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-accent-ink"
            >
              Center for Maritime Strategy
            </a>{" "}
            in Washington, D.C.
          </p>
          <p>
            I write about geopolitics, industrial policy, maritime security,
            and national security law. I'm preparing to pursue a legal
            education focused on national security law.
          </p>
          <p>
            You can read my{" "}
            <Link to="/writing" className="underline underline-offset-2 hover:text-accent-ink">
              published writing
            </Link>
            , see where I've appeared in{" "}
            <Link to="/media" className="underline underline-offset-2 hover:text-accent-ink">
              the media
            </Link>
            , read more{" "}
            <Link to="/about" className="underline underline-offset-2 hover:text-accent-ink">
              about me
            </Link>
            , or{" "}
            <Link to="/contact" className="underline underline-offset-2 hover:text-accent-ink">
              get in touch
            </Link>
            .
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-sm font-medium text-ink-muted uppercase tracking-wide mb-4">
            Recent writing
          </h2>
          <ul className="space-y-4">
            {writings.map((w) => (
              <li key={w.url} className="text-base leading-relaxed">
                <a
                  href={w.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-accent-ink"
                >
                  {w.title}
                </a>
                <span className="text-ink-muted"> — {w.outlet}, {w.date}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-sm font-medium text-ink-muted uppercase tracking-wide mb-4">
            Recent media
          </h2>
          <ul className="space-y-4">
            {appearances.map((a) => (
              <li key={a.url} className="text-base leading-relaxed">
                <a
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-accent-ink"
                >
                  {a.title}
                </a>
                <span className="text-ink-muted"> — {a.outlet} ({a.format})</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
