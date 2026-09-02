"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="section-padding bg-navy-light/30">
      <div className="section-container">
        <SectionHeading
          title="Compétences Techniques"
          subtitle="Technologies et outils que je maîtrise pour concevoir, déployer et monitorer des solutions robustes."
        />

        <div className="mx-auto max-w-5xl space-y-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-base p-5 sm:p-6"
            >
              <h3 className="font-display text-base font-bold text-accent sm:text-lg">
                {category.title}
                <span className="text-muted"> :</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {category.items.join("  ·  ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
