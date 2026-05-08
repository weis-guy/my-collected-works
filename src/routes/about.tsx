import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nicholas Weising" },
      {
        name: "description",
        content:
          "Nicholas Weising is a Program Assistant at the Center for Maritime Strategy. Research interests include geopolitics, industrial policy, maritime security, and national security law.",
      },
      { property: "og:title", content: "About — Nicholas Weising" },
      {
        property: "og:description",
        content:
          "Program Assistant at the Center for Maritime Strategy.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6">
        <h1 className="text-2xl font-medium mb-8">About</h1>
        <div className="space-y-5 text-base leading-relaxed">
          <p>
            I'm a Program Associate at the{" "}
            <a
              href="https://centerformaritimestrategy.org/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-accent-ink"
            >
              Center for Maritime Strategy
            </a>{" "}
            in Washington, D.C., where I support research and programming on
            seapower, alliance politics, and the defense industrial base.
          </p>
          <p>
            My work sits at the intersection of statecraft, industry, and
            law. I write about how the United States and its allies organize
            policy, capital, and law to compete in an increasingly contested
            maritime environment — from the submarine industrial workforce
            at home to development assistance across the Pacific.
          </p>
          <p>
            I'm preparing to pursue a legal education focused on national
            security law and a career in public service that bridges
            scholarship, policy, and practice.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-sm font-medium text-ink-muted uppercase tracking-wide mb-3">
            Areas of focus
          </h2>
          <ul className="text-base leading-relaxed list-disc pl-5 space-y-1">
            <li>Geopolitics</li>
            <li>Industrial policy</li>
            <li>Maritime security</li>
            <li>National security law</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-sm font-medium text-ink-muted uppercase tracking-wide mb-3">
            Curriculum vitae
          </h2>
          <p className="text-base leading-relaxed">
            <a
              href="/NicholasWeisingCV.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-accent-ink"
            >
              View CV (PDF)
            </a>
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
