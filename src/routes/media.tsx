import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { appearances } from "@/data/portfolio";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media Appearances — Nicholas Weising" },
      {
        name: "description",
        content:
          "Television, podcast, and panel appearances featuring Nicholas Weising on policy and national security topics.",
      },
      { property: "og:title", content: "Media Appearances — Nicholas Weising" },
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
      <main className="mx-auto max-w-3xl px-6 py-12">
        <p className="smallcaps text-[0.7rem] text-accent-ink mb-3">Section</p>
        <h2 className="font-serif text-5xl font-semibold tracking-tight">
          Media Appearances
        </h2>
        <p className="mt-4 font-serif text-xl italic text-ink-muted leading-relaxed">
          Selected television, radio, and podcast appearances.
        </p>
        <div className="mt-10 editorial-rule-double border-t" />

        <ul className="divide-y divide-rule">
          {appearances.map((a) => (
            <li key={a.url} className="py-8 grid grid-cols-1 sm:grid-cols-4 gap-6">
              <div className="sm:col-span-1">
                <p className="smallcaps text-[0.68rem] text-accent-ink">
                  {a.format}
                </p>
                <p className="font-serif text-lg mt-1">{a.outlet}</p>
                <p className="text-[0.7rem] smallcaps text-ink-muted mt-1">
                  {a.date}
                </p>
              </div>
              <div className="sm:col-span-3">
                <h3 className="font-serif text-2xl font-semibold leading-tight">
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent-ink"
                  >
                    {a.title}
                  </a>
                </h3>
                {a.dek && (
                  <p className="mt-3 leading-relaxed text-ink-muted">{a.dek}</p>
                )}
                <a
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block smallcaps text-[0.7rem] text-accent-ink hover:underline"
                >
                  Watch / listen →
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-12 font-serif italic text-ink-muted">
          Available for interviews, panels, and commentary on request.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
