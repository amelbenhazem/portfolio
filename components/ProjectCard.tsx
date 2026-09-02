"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./icons/BrandIcons";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  codeUrl: string;
  demoUrl: string;
  image: string;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  codeUrl,
  demoUrl,
  image,
  index,
  featured,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`card-base group flex flex-col overflow-hidden ${
        featured ? "ring-1 ring-accent/30" : ""
      }`}
    >
      {/* Project image */}
      <div className="relative h-48 overflow-hidden bg-navy-card sm:h-52">
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
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-surface">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
          {description}
        </p>

        {/* Tags */}
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

        {/* Actions */}
        <div className="mt-5 flex gap-3">
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-surface transition-colors hover:border-accent/40 hover:text-accent"
          >
            <GitHubIcon size={16} />
            Code
          </a>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 py-2 text-sm"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
