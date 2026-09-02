"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="section-padding bg-navy-light/30">
      <div className="section-container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Une idée de projet, une opportunité ou une simple question ? N'hésitez pas à me contacter."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Illustration + contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative mb-8 flex justify-center lg:justify-start">
              <Image
                src="/images/contact-illustration.svg"
                alt="Contact — Amel Ben Hazem"
                width={400}
                height={350}
                className="w-full max-w-sm"
              />
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Mail size={18} />
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Phone size={18} />
                </div>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MapPin size={18} />
                </div>
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="card-base p-6 md:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
