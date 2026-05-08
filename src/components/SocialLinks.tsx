import { Linkedin, Twitter, Mail } from "lucide-react";

function SubstackIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  );
}

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
    Icon: SubstackIcon,
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
