export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.72rem] smallcaps text-ink-muted">
        <span>© {new Date().getFullYear()} Nicholas Weising</span>
        <span className="font-serif italic text-sm normal-case tracking-normal">
          “Sapere aude.”
        </span>
        <a
          href="mailto:nicholas.weising@gmail.com"
          className="hover:text-accent-ink transition-colors"
        >
          nicholas.weising@gmail.com
        </a>
      </div>
    </footer>
  );
}
