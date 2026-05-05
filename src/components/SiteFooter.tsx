import { SocialLinks } from "./SocialLinks";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-3xl px-6 mt-24 pb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-ink-muted">
        <span>© {new Date().getFullYear()} Nicholas Weising</span>
        <SocialLinks size={18} />
      </div>
    </footer>
  );
}
