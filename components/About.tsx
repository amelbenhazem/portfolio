"use client";

import { motion } from "framer-motion";
import { aboutBio } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import ProfileImage from "./ProfileImage";

export default function About() {
  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <ProfileImage size="about" className="relative z-10 mx-auto" />
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-3xl font-bold text-accent md:text-4xl">
                About Me
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-accent" />

              <div className="mt-6 space-y-4">
                {aboutBio.map((paragraph) => (
                  <p key={paragraph} className="text-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
