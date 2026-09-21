import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
        Selected Projects
      </h2>
      <p className="text-slate mb-10 max-w-2xl">
        Hands-on projects exploring operations, productivity, AI, automation
        and project management systems.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}