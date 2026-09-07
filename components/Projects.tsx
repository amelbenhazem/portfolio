import { projectSections } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  let cardIndex = 0;

  return (
    <AnimatedSection id="projects" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="My Projects"
          subtitle={`A selection of real-world projects combining\nfull-stack development, Cloud, and DevOps.`}
        />

        <div className="space-y-14">
          {projectSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-6 font-display text-xl font-bold text-surface md:text-2xl">
                {section.title}
              </h3>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {section.projects.map((project) => {
                  const index = cardIndex++;
                  return (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      subtitle={project.subtitle}
                      period={project.period}
                      location={project.location}
                      highlights={project.highlights}
                      tags={project.tags}
                      image={project.image}
                      index={index}
                      featured={project.featured}
                      category={project.category}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
