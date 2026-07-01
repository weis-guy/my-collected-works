import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { appearances, citations } from "@/data/portfolio";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Speaking & Media — Nicholas Weising" },
      {
        name: "description",
        content:
          "Television, podcast, and panel appearances featuring Nicholas Weising, plus institutional citations of his work.",
      },
      { property: "og:title", content: "Speaking & Media — Nicholas Weising" },
      {
        property: "og:description",
        content: "Appearances, press quotes, and citations of work.",
      },
    ],
  }),
  component: MediaPage,
});

function MediaPage() {
  const speaking = appearances.filter((a) =>
    ["Podcast", "Panel", "Radio", "Interview"].includes(a.format)
  );
  const press = appearances.filter((a) =>
    ["Television", "Press"].includes(a.format)
  );

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6">
        <h1 className="text-2xl font-medium mb-8">Speaking & Media</h1>

        <section>
          <h2 className="text-lg font-medium mb-6">Speaking Engagements</h2>
          <ul className="space-y-8">
            {speaking.map((a) => (
              <li key={a.url} className="text-base leading-relaxed">
                <a
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-accent-ink"
                >
                  {a.title}
                </a>
                <div className="text-sm text-ink-muted mt-1">
                  {a.outlet} · {a.format} · {a.date}
                </div>
                {a.dek && <p className="mt-2 text-ink-muted">{a.dek}</p>}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-lg font-medium mb-6">Media Interviews &amp; Press</h2>
          <ul className="space-y-8">
            {press.map((a) => (
              <li key={a.url} className="text-base leading-relaxed">
                <a
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-accent-ink"
                >
                  {a.title}
                </a>
                <div className="text-sm text-ink-muted mt-1">
                  {a.outlet} · {a.format} · {a.date}
                </div>
                {a.dek && <p className="mt-2 text-ink-muted">{a.dek}</p>}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-lg font-medium mb-6">Citations &amp; Recognition</h2>
          <ul className="space-y-8">
            {citations.map((c) => (
              <li key={c.url} className="text-base leading-relaxed">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-accent-ink"
                >
                  {c.title}
                </a>
                <div className="text-sm text-ink-muted mt-1">
                  {c.institution} · {c.date}
                </div>
                {c.dek && <p className="mt-2 text-ink-muted">{c.dek}</p>}
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-12 text-sm text-ink-muted">
          Available for interviews, panels, and commentary on request.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
