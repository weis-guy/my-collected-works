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
      <main className="mx-auto max-w-3xl px-6 py-12">
        <p className="smallcaps text-[0.7rem] text-accent-ink mb-3">Section</p>
        <h2 className="font-serif text-5xl font-semibold tracking-tight">Writing</h2>
        <p className="mt-4 font-serif text-xl italic text-ink-muted leading-relaxed">
          Essays, analysis, and commentary — published in policy journals and
          national security outlets.
        </p>
        <div className="mt-10 editorial-rule-double border-t" />

        <ul className="divide-y divide-rule">
          {writings.map((w) => (
            <li key={w.url} className="py-8">
              <p className="smallcaps text-[0.68rem] text-ink-muted mb-2">
                {w.outlet} &nbsp;·&nbsp; {w.date}
              </p>
              <h3 className="font-serif text-3xl font-semibold leading-tight">
                <a
                  href={w.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent-ink"
                >
                  {w.title}
                </a>
              </h3>
              {w.dek && (
                <p className="mt-3 font-serif text-lg leading-relaxed text-ink">
                  {w.dek}
                </p>
              )}
              <div className="mt-4 flex items-center gap-4 text-[0.7rem] smallcaps">
                {w.topics?.map((t) => (
                  <span key={t} className="text-ink-muted">
                    {t}
                  </span>
                ))}
                <a
                  href={w.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto text-accent-ink hover:underline"
                >
                  Read →
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-12 font-serif italic text-ink-muted">
          Additional pieces will be added as they are published.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
