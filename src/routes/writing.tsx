import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { writings } from "@/data/portfolio";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Nicholas Weising" },
      {
        name: "description",
        content:
          "Published essays and analysis by Nicholas Weising on geopolitics, industrial policy, maritime security, and national security law.",
      },
      { property: "og:title", content: "Writing — Nicholas Weising" },
      {
        property: "og:description",
        content: "Published essays and analysis by Nicholas Weising.",
      },
    ],
  }),
  component: WritingPage,
});

function WritingItem({ w }: { w: (typeof writings)[number] }) {
  return (
    <li className="text-base leading-relaxed">
      <a
        href={w.url}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2 hover:text-accent-ink"
      >
        {w.title}
      </a>
      <div className="text-sm text-ink-muted mt-1">
        {w.outlet} · {w.date}
      </div>
      {w.dek && <p className="mt-2 text-ink-muted">{w.dek}</p>}
      {w.republishedIn && w.republishedIn.length > 0 && (
        <p className="mt-2 text-sm text-ink-muted">
          Also republished in{" "}
          {w.republishedIn.map((r, i) => (
            <span key={r.url}>
              <a
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-accent-ink"
              >
                {r.outlet}
              </a>
              {i < w.republishedIn!.length - 2
                ? ", "
                : i === w.republishedIn!.length - 2
                  ? ", and "
                  : "."}
            </span>
          ))}
        </p>
      )}
    </li>
  );
}

function WritingPage() {
  const publications = writings.filter(
    (w) => !w.outlet.toLowerCase().includes("substack")
  );
  const substack = writings.filter((w) =>
    w.outlet.toLowerCase().includes("substack")
  );

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6">
        <h1 className="text-2xl font-medium mb-8">Writing</h1>

        <section>
          <h2 className="text-xl font-medium mb-6">Publications</h2>
          <ul className="space-y-8">
            {publications.map((w) => (
              <WritingItem key={w.url} w={w} />
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-medium mb-6">Substack</h2>
          <div className="mb-8 rounded-lg border border-ink/10 bg-ink/[0.02] p-5">
            <a
              href="https://strayelectrons.substack.com/"
              target="_blank"
              rel="noreferrer"
              className="text-base font-medium underline underline-offset-2 hover:text-accent-ink"
            >
              More Bread Fewer Circuses
            </a>
            <p className="mt-1 text-sm text-ink-muted">
              Follow my newsletter for new posts.
            </p>
          </div>
          <ul className="space-y-8">
            {substack.map((w) => (
              <WritingItem key={w.url} w={w} />
            ))}
          </ul>
        </section>

        <p className="mt-12 text-sm text-ink-muted">
          More pieces will be added as they're published.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
