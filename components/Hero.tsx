"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { heroDescription, heroSubtitle, heroTitle } from "@/lib/data";
import SocialIcons from "./SocialIcons";
import ProfileImage from "./ProfileImage";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-hero-glow pt-28 md:pt-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-sky/5 blur-3xl" />
      </div>

      <div className="section-container relative grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-16 lg:grid-cols-2 lg:gap-8">
        {/* Left content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1"
        >
          <motion.div variants={itemVariants} className="mb-6 hidden md:block">
            <SocialIcons />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4 md:hidden">
            <SocialIcons />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl font-extrabold leading-tight text-surface sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-accent">Amel</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg font-medium text-muted-light sm:text-xl"
          >
            {heroTitle}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-2 text-base font-medium text-accent sm:text-lg"
          >
            {heroSubtitle}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-xl text-muted leading-relaxed"
          >
            {heroDescription}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="/cv.pdf"
              download="Amel-Ben-Hazem-CV.pdf"
              className="btn-primary"
            >
              <Download size={18} />
              Download CV
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative order-1 flex justify-center lg:order-2"
        >
          <div className="relative w-full max-w-md lg:max-w-lg">
            <ProfileImage size="hero" priority className="mx-auto animate-float" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
