import { LinkedInIcon, GitHubIcon } from "./icons/BrandIcons";
import { navLinks, siteConfig } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-navy-card">
      <div className="section-container py-12">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          {/* Brand */}
          <div>
            <a href="#home" className="font-display text-xl font-bold text-surface">
              Portfolio<span className="text-accent">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted leading-relaxed">
              Ingénieure Cloud & DevOps — Je transforme les idées en solutions
              industrialisées et prêtes pour la production.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface">
              Social
            </h3>
            <div className="flex gap-3">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-accent/40 hover:text-[#0A66C2]"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-accent/40 hover:text-surface"
              >
                <GitHubIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted">
          <p>
            &copy; {currentYear} Amel Ben Hazem. Designed &amp; built by Amel Ben Hazem
          </p>
        </div>
      </div>
    </footer>
  );
}
