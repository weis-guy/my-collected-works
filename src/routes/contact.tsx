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
      <main className="mx-auto max-w-3xl px-6">
        <h1 className="text-2xl font-medium mb-8">Contact</h1>
        <div className="space-y-5 text-base leading-relaxed">
          <p>
            For interview requests, panel invitations, commissioned writing,
            or speaking engagements, email me at{" "}
            <a
              href={`mailto:${email}`}
              className="underline underline-offset-2 hover:text-accent-ink"
            >
              {email}
            </a>
            .
          </p>
          <p>
            You can also find me on{" "}
            {socialLinks.map((s, i) => (
              <span key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-accent-ink"
                >
                  {s.label}
                </a>
                {i < socialLinks.length - 2
                  ? ", "
                  : i === socialLinks.length - 2
                    ? ", and "
                    : "."}
              </span>
            ))}
          </p>
        </div>
        <div className="mt-10">
          <SocialLinks size={20} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
