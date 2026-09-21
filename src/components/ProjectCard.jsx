import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group bg-white border border-border rounded-xl overflow-hidden hover:border-teal transition-colors flex flex-col"
    >
      <div className="aspect-video bg-cream border-b border-border overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-semibold text-teal uppercase tracking-wide mb-2">
          {project.category}
        </p>
        <h3 className="font-bold text-navy mb-3 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-slate mb-5 flex-1">
          {project.shortDescription}
        </p>
        <span className="text-sm font-semibold text-teal group-hover:underline">
          View Project →
        </span>
      </div>
    </Link>
  );
}