import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Nicholas Weising" },
      {
        name: "description",
        content:
          "Collaborative reports, co-authored publications, and newsletters that Nicholas Weising contributed to.",
      },
      { property: "og:title", content: "Projects — Nicholas Weising" },
      {
        property: "og:description",
        content: "Collaborative reports, co-authored publications, and newsletters.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6">
        <h1 className="text-2xl font-medium mb-8">Projects</h1>
        <p className="text-base leading-relaxed text-ink-muted mb-10">
          Policy reports, collaborative publications, and newsletters I've
          contributed to but did not solely author.
        </p>
        {projects.length === 0 ? (
          <p className="text-sm text-ink-muted">
            More to be added soon.
          </p>
        ) : (
          <ul className="space-y-8">
            {projects.map((p) => {
              const Title = p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-accent-ink"
                >
                  {p.title}
                </a>
              ) : (
                <span>{p.title}</span>
              );
              return (
                <li key={p.title} className="text-base leading-relaxed">
                  {Title}
                  <div className="text-sm text-ink-muted mt-1">
                    {[p.role, p.outlet, p.format, p.date]
                      .filter(Boolean)
                      .join(" · ")}
                  </div>
                  {p.dek && <p className="mt-2 text-ink-muted">{p.dek}</p>}
                </li>
              );
            })}
          </ul>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
