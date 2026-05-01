import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SocialLinks, socialLinks } from "@/components/SocialLinks";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nicholas Weising" },
      {
        name: "description",
        content:
          "Get in touch with Nicholas Weising for writing, interviews, panels, and speaking inquiries.",
      },
      { property: "og:title", content: "Contact — Nicholas Weising" },
      {
        property: "og:description",
        content: "Writing, interviews, panels, and speaking inquiries.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const email = "nicholas.weising@gmail.com";
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <p className="smallcaps text-[0.7rem] text-accent-ink mb-3">Section</p>
        <h2 className="font-serif text-5xl font-semibold tracking-tight">
          Contact &amp; Speaking
        </h2>
        <div className="mt-8 editorial-rule-double border-t" />

        <div className="mt-10 font-serif text-xl leading-relaxed text-ink">
          <p>
            For interview requests, panel invitations, commissioned writing, or
            speaking engagements, please write directly:
          </p>
          <p className="mt-8 text-center">
            <a
              href={`mailto:${email}`}
              className="font-serif text-3xl sm:text-4xl text-accent-ink underline underline-offset-8 decoration-1 hover:opacity-80"
            >
              {email}
            </a>
          </p>
        </div>

        <div className="mt-12 border-t border-rule pt-8">
          <p className="smallcaps text-[0.7rem] text-accent-ink mb-4 text-center">
            Elsewhere
          </p>
          <div className="flex justify-center">
            <SocialLinks size={26} />
          </div>
          <ul className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-8 font-serif text-base text-ink-muted">
            {socialLinks.map(({ label, href }) => (
              <li key={label} className="text-center">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-ink transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-rule pt-8">
          <div>
            <p className="smallcaps text-[0.7rem] text-accent-ink mb-2">
              Available For
            </p>
            <ul className="font-serif text-lg space-y-1">
              <li>Op-eds &amp; essays</li>
              <li>Television &amp; radio</li>
              <li>Podcasts</li>
              <li>Panels &amp; lectures</li>
            </ul>
          </div>
          <div>
            <p className="smallcaps text-[0.7rem] text-accent-ink mb-2">Topics</p>
            <ul className="font-serif text-lg space-y-1">
              <li>Geopolitics</li>
              <li>Industrial policy</li>
              <li>Maritime security</li>
              <li>National security law</li>
            </ul>
          </div>
          <div>
            <p className="smallcaps text-[0.7rem] text-accent-ink mb-2">
              Response
            </p>
            <p className="font-serif text-lg leading-relaxed">
              Inquiries are typically answered within 48 hours.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
