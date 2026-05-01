import { SocialLinks } from "./SocialLinks";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[0.72rem] smallcaps text-ink-muted">
        <span>© {new Date().getFullYear()} Nicholas Weising</span>
        <SocialLinks size={18} />
        <a
          href="mailto:nicholas.weising@gmail.com"
          className="normal-case tracking-normal font-sans text-xs hover:text-accent-ink transition-colors"
        >
          nicholas.weising@gmail.com
        </a>
      </div>
    </footer>
  );
}
