import Image from "next/image";
import { siteConfig } from "@/lib/data";

interface ProfileImageProps {
  size?: "hero" | "about";
  className?: string;
  priority?: boolean;
}

const sizeStyles = {
  hero: {
    container: "max-w-md lg:max-w-lg",
    image: "aspect-[4/5] w-full max-w-sm sm:max-w-md lg:max-w-lg",
    width: 480,
    height: 600,
  },
  about: {
    container: "max-w-md",
    image: "aspect-square w-full max-w-xs sm:max-w-sm",
    width: 400,
    height: 400,
  },
};

export default function ProfileImage({
  size = "hero",
  className = "",
  priority = false,
}: ProfileImageProps) {
  const styles = sizeStyles[size];
  const imageSrc = size === "about" ? siteConfig.aboutImage : siteConfig.profileImage;

  return (
    <div className={`relative ${styles.container} ${className}`}>
      {/* Glow ring */}
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/30 via-accent/10 to-transparent blur-sm" />
      <div className="absolute -inset-1 rounded-2xl border border-accent/40" />

      <div className={`relative overflow-hidden rounded-2xl border-2 border-accent/50 bg-navy-card shadow-xl shadow-accent/10 ${styles.image}`}>
        <Image
          src={imageSrc}
          alt={`${siteConfig.name} — ${size === "about" ? "about me" : "photo de profil"}`}
          width={styles.width}
          height={styles.height}
          priority={priority}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
