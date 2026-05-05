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
            I'm a Program Assistant at the{" "}
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
            My research interests include geopolitics, industrial policy,
            maritime security, and national security law. I write about how
            the United States and its allies organize policy, capital, and
            law to compete in an increasingly contested maritime environment
            — from the submarine industrial workforce at home to development
            assistance across the Pacific.
          </p>
          <p>
            I'm preparing to pursue a legal education focused on national
            security law and a career in public service that bridges
            scholarship, policy, and practice.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
