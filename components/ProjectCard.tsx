"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  period?: string;
  location?: string;
  highlights: string[];
  tags: string[];
  image: string;
  index: number;
  featured?: boolean;
  category?: string;
}

export default function ProjectCard({
  title,
  subtitle,
  period,
  location,
  highlights,
  tags,
  image,
  index,
  featured,
  category,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`card-base group flex flex-col overflow-hidden ${
        featured ? "ring-1 ring-accent/30" : ""
      }`}
    >
      <div className="relative h-44 overflow-hidden bg-navy-card sm:h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {featured && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-navy">
            Featured
          </span>
        )}
        {category && (
          <span className="absolute right-3 top-3 rounded-full border border-border bg-navy/80 px-2.5 py-1 text-xs text-muted-light backdrop-blur-sm">
            {category}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-snug text-surface">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 text-sm font-medium text-accent">{subtitle}</p>
        )}

        {(period || location) && (
          <p className="mt-1 text-xs text-muted">
            {period}
            {period && location && " · "}
            {location}
          </p>
        )}

        <ul className="mt-3 flex-1 space-y-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm leading-relaxed text-muted"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-navy/60 px-2.5 py-0.5 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
