"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import { education } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <AnimatedSection id="education" className="section-padding bg-navy-light/30">
      <div className="section-container">
        <SectionHeading
          title="Education"
          subtitle="Mon parcours académique en génie logiciel et systèmes d'information."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-[7px] top-0 w-0.5 bg-border md:left-[11px]" />

          <div className="space-y-10">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10 md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-accent bg-navy md:h-[26px] md:w-[26px]">
                  <div className="h-2 w-2 rounded-full bg-accent md:h-2.5 md:w-2.5" />
                </div>

                <div className="card-base p-5 md:p-6">
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold leading-snug text-surface md:text-lg">
                    {item.degree}
                  </h3>

                  <div className="mt-3 space-y-1.5">
                    {item.schoolUrl ? (
                      <a
                        href={item.schoolUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                      >
                        {item.school}
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-accent">
                        {item.school}
                      </p>
                    )}

                    <a
                      href={item.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                    >
                      <MapPin size={14} className="shrink-0" />
                      {item.location}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
