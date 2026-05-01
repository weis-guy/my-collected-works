import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { writings, appearances } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const lead = writings[0];
  const secondary = writings.slice(1);
  const featuredAppearance = appearances[0];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6">
        {/* Masthead lead */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pb-12 editorial-rule-double border-b mt-2">
          <article className="md:col-span-2 md:border-r md:border-rule md:pr-8">
            <p className="smallcaps text-[0.7rem] text-accent-ink mb-3">
              Lead Essay &nbsp;·&nbsp; {lead.outlet}
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-tight">
              <a href={lead.url} target="_blank" rel="noreferrer" className="hover:text-accent-ink transition-colors">
                {lead.title}
              </a>
            </h2>
            <p className="mt-5 font-serif text-lg leading-relaxed text-ink drop-cap">
              {lead.dek}
            </p>
            <p className="mt-6 text-[0.72rem] smallcaps text-ink-muted">
              {lead.date} &nbsp;/&nbsp;{" "}
              <a href={lead.url} target="_blank" rel="noreferrer" className="text-accent-ink hover:underline">
                Read at {lead.outlet} →
              </a>
            </p>
          </article>

          <aside className="md:col-span-1 flex flex-col">
            <p className="smallcaps text-[0.7rem] text-accent-ink mb-3">
              From the Author
            </p>
            <p className="font-serif text-xl leading-snug italic text-ink">
              “Strategy is the art of distributing scarce means among unlimited ends.”
            </p>
            <div className="my-6 editorial-rule" />
            <p className="text-sm leading-relaxed text-ink">
              Nicholas Weising is a Program Assistant at the{" "}
              <span className="font-semibold">Center for Maritime Strategy</span>,
              writing on geopolitics, industrial policy, maritime security, and
              national security law.
            </p>
            <Link
              to="/about"
              className="mt-5 smallcaps text-[0.7rem] text-accent-ink hover:underline self-start"
            >
              Read the full bio →
            </Link>
          </aside>
        </section>

        {/* Latest Writing */}
        <section className="py-12">
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="font-serif text-3xl font-semibold">Selected Writing</h3>
            <Link to="/writing" className="smallcaps text-[0.7rem] text-accent-ink hover:underline">
              All publications →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondary.map((w) => (
              <article key={w.url} className="border-t border-rule pt-6">
                <p className="smallcaps text-[0.68rem] text-ink-muted mb-2">
                  {w.outlet} &nbsp;·&nbsp; {w.date}
                </p>
                <h4 className="font-serif text-2xl font-semibold leading-tight">
                  <a href={w.url} target="_blank" rel="noreferrer" className="hover:text-accent-ink">
                    {w.title}
                  </a>
                </h4>
                {w.dek && <p className="mt-3 text-ink-muted leading-relaxed">{w.dek}</p>}
              </article>
            ))}
          </div>
        </section>

        {/* In the Media */}
        <section className="py-12 border-t border-rule">
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="font-serif text-3xl font-semibold">In the Media</h3>
            <Link to="/media" className="smallcaps text-[0.7rem] text-accent-ink hover:underline">
              All appearances →
            </Link>
          </div>
          <article className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <p className="smallcaps text-[0.68rem] text-accent-ink mb-2">
                {featuredAppearance.format} &nbsp;·&nbsp; {featuredAppearance.outlet}
              </p>
              <p className="text-[0.72rem] smallcaps text-ink-muted">
                {featuredAppearance.date}
              </p>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-serif text-2xl font-semibold leading-tight">
                <a
                  href={featuredAppearance.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent-ink"
                >
                  {featuredAppearance.title}
                </a>
              </h4>
              {featuredAppearance.dek && (
                <p className="mt-3 text-ink-muted leading-relaxed">
                  {featuredAppearance.dek}
                </p>
              )}
            </div>
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
