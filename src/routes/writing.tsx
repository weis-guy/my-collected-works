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

function WritingPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6">
        <h1 className="text-2xl font-medium mb-8">Writing</h1>
        <ul className="space-y-8">
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
              <div className="text-sm text-ink-muted mt-1">
                {w.outlet} · {w.date}
              </div>
              {w.dek && <p className="mt-2 text-ink-muted">{w.dek}</p>}
            </li>
          ))}
        </ul>
        <p className="mt-12 text-sm text-ink-muted">
          More pieces will be added as they're published.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
