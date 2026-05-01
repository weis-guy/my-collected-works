import { Linkedin, Twitter, BookOpen, Mail } from "lucide-react";

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicholas-weising-3269b7183/",
    Icon: Linkedin,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/nickweising",
    Icon: Twitter,
  },
  {
    label: "Substack — Stray Electrons",
    href: "https://strayelectrons.substack.com/",
    Icon: BookOpen,
  },
] as const;

type SocialLinksProps = {
  size?: number;
  includeEmail?: boolean;
  email?: string;
  className?: string;
  iconClassName?: string;
};

export function SocialLinks({
  size = 18,
  includeEmail = false,
  email = "nicholas.weising@gmail.com",
  className = "",
  iconClassName = "",
}: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-5 ${className}`}>
      {socialLinks.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`inline-flex text-ink-muted hover:text-accent-ink transition-colors ${iconClassName}`}
          >
            <Icon size={size} strokeWidth={1.5} />
          </a>
        </li>
      ))}
      {includeEmail && (
        <li>
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            className={`inline-flex text-ink-muted hover:text-accent-ink transition-colors ${iconClassName}`}
          >
            <Mail size={size} strokeWidth={1.5} />
          </a>
        </li>
      )}
    </ul>
  );
}
