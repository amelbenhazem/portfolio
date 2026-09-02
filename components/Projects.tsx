import { projects } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="My Projects"
          subtitle={`A selection of real-world projects combining\nfull-stack development, Cloud, and DevOps.`}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              codeUrl={project.codeUrl}
              demoUrl={project.demoUrl}
              image={project.image}
              index={index}
              featured={project.featured}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/amelbenhazem"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View All Projects
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
