import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/mjgqvlzk";

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
  const [status, setStatus] = useState<"idle" | "submitting" | "succeeded" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Formspree rejected the submission.");
      }

      form.reset();
      setStatus("succeeded");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "succeeded") {
    return (
      <div className="min-h-screen bg-paper text-ink">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-6">
          <h1 className="text-2xl font-medium mb-8">Contact</h1>
          <div className="space-y-5 text-base leading-relaxed">
            <p className="text-ink-muted">
              Thank you for your message. I will get back to you as soon as I
              can.
            </p>
            <Button variant="outline" onClick={() => setStatus("idle")} type="button">
              Send another message
            </Button>
          </div>
          <div className="mt-10">
            <SocialLinks size={20} />
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6">
        <h1 className="text-2xl font-medium mb-8">Contact</h1>

        <div className="space-y-6">
          <p className="text-base leading-relaxed text-ink-muted">
            For interview requests, panel invitations, commissioned writing, or
            speaking engagements, send a message below.
          </p>

          <form
            action={FORMSPREE_ENDPOINT}
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                required
                maxLength={100}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                required
                maxLength={255}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                required
                maxLength={2000}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send message"}
              </Button>
              {status === "error" && <p className="text-sm text-destructive">{errorMessage}</p>}
            </div>
          </form>
        </div>

        <div className="mt-10">
          <SocialLinks size={20} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
