"use client";

import type { ComponentType } from "react";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "./icons/BrandIcons";

type IconName = "linkedin" | "github" | "instagram";

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

type SocialIconComponent = ComponentType<{ size?: number; className?: string }>;

const icons: Record<
  IconName,
  { Icon: SocialIconComponent; href: string; label: string; color: string }
> = {
  linkedin: {
    Icon: LinkedInIcon,
    href: "https://linkedin.com/in/amal-ben-hazem",
    label: "LinkedIn",
    color: "hover:text-[#0A66C2]",
  },
  github: {
    Icon: GitHubIcon,
    href: "https://github.com/amelbenhazem",
    label: "GitHub",
    color: "hover:text-surface",
  },
  instagram: {
    Icon: InstagramIcon,
    href: "https://instagram.com",
    label: "Instagram",
    color: "hover:text-[#E4405F]",
  },
};

export default function SocialIcons({
  className = "",
  iconSize = 20,
}: SocialIconsProps) {
  const items = Object.values(icons);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map(({ Icon, href, label, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-border bg-navy-light/60 text-muted transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 ${color}`}
        >
          <Icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}

export { icons as socialIconMap };
