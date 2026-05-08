import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { appearances } from "@/data/portfolio";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media — Nicholas Weising" },
      {
        name: "description",
        content:
          "Television, podcast, and panel appearances featuring Nicholas Weising.",
      },
      { property: "og:title", content: "Media — Nicholas Weising" },
      {
        property: "og:description",
        content: "Television, podcast, and panel appearances.",
      },
    ],
  }),
  component: MediaPage,
});

function MediaPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6">
        <h1 className="text-2xl font-medium mb-8">Media</h1>
        <ul className="space-y-8">
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
              <div className="text-sm text-ink-muted mt-1">
                {a.outlet} · {a.format} · {a.date}
              </div>
              {a.dek && <p className="mt-2 text-ink-muted">{a.dek}</p>}
              {a.reprints && a.reprints.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-ink-muted">
                  {a.reprints.map((r) => (
                    <li key={r.url}>
                      ·{" "}
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 hover:text-accent-ink"
                      >
                        {r.outlet}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-12 text-sm text-ink-muted">
          Available for interviews, panels, and commentary on request.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
