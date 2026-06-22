import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SocialLinks } from "@/components/SocialLinks";
import { submitContactForm } from "@/lib/contact.functions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  message: z.string().min(1, "Message is required").max(2000),
});

type FormValues = z.infer<typeof formSchema>;

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      await submitContactForm({ data: values });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6">
        <h1 className="text-2xl font-medium mb-8">Contact</h1>

        {status === "success" ? (
          <div className="space-y-5 text-base leading-relaxed">
            <p className="text-ink-muted">
              Thank you for your message. I will get back to you as soon as I
              can.
            </p>
            <Button
              variant="outline"
              onClick={() => setStatus("idle")}
              type="button"
            >
              Send another message
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-ink-muted">
              For interview requests, panel invitations, commissioned writing,
              or speaking engagements, send a message below.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea rows={6} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting
                      ? "Sending..."
                      : "Send message"}
                  </Button>
                  {status === "error" && (
                    <p className="text-sm text-destructive">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </Form>
          </div>
        )}

        <div className="mt-10">
          <SocialLinks size={20} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
