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
          "Nicholas Weising is a Program Assistant at the Center for Maritime Strategy. His research interests include geopolitics, industrial policy, maritime security, and national security law.",
      },
      { property: "og:title", content: "About Nicholas Weising" },
      {
        property: "og:description",
        content:
          "Program Assistant at the Center for Maritime Strategy. Geopolitics, industrial policy, maritime security, national security law.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const interests = [
    "Geopolitics",
    "Industrial Policy",
    "Maritime Security",
    "National Security Law",
  ];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <p className="smallcaps text-[0.7rem] text-accent-ink mb-3">Section</p>
        <h2 className="font-serif text-5xl font-semibold tracking-tight">About</h2>
        <div className="mt-8 editorial-rule-double border-t" />

        <div className="mt-10 font-serif text-xl leading-relaxed text-ink space-y-6">
          <p className="drop-cap">
            Nicholas Weising is a Program Assistant at the{" "}
            <span className="font-semibold">Center for Maritime Strategy</span>,
            where he supports research and programming at the intersection of
            seapower, alliance politics, and the defense industrial base.
          </p>
          <p>
            His writing examines how the United States and its allies organize
            policy, capital, and law to compete in an increasingly contested
            maritime environment — from the submarine industrial workforce at
            home to development assistance across the Pacific.
          </p>
          <p>
            He is preparing to pursue a legal education focused on national
            security law and is committed to a career in public service that
            bridges scholarship, policy, and practice.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-rule pt-8">
          <div>
            <p className="smallcaps text-[0.7rem] text-accent-ink mb-3">
              Research Interests
            </p>
            <ul className="space-y-2 font-serif text-lg">
              {interests.map((i) => (
                <li key={i} className="border-b border-rule pb-2">
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="smallcaps text-[0.7rem] text-accent-ink mb-3">
              Affiliation
            </p>
            <p className="font-serif text-lg">
              Center for Maritime Strategy
              <br />
              <span className="text-ink-muted italic">Program Assistant</span>
            </p>
            <p className="smallcaps text-[0.7rem] text-accent-ink mt-6 mb-3">
              Based in
            </p>
            <p className="font-serif text-lg">Washington, D.C.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
