import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-navy mb-4">Project not found</h1>
        <Link to="/" className="text-teal font-semibold hover:underline">
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link
        to="/#projects"
        className="text-sm text-slate hover:text-teal transition-colors"
      >
        ← Back to Projects
      </Link>

      <p className="text-xs font-semibold text-teal uppercase tracking-wide mt-8 mb-3">
        {project.category}
      </p>
      <h1 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight mb-8">
        {project.title}
      </h1>

      <div className="aspect-video bg-white border border-border rounded-xl overflow-hidden mb-12">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      <div className="space-y-12">
        <Section title="The Problem">
          <p>{project.problem}</p>
        </Section>

        <Section title="The Approach">
          <p>{project.approach}</p>
        </Section>

        <Section title="Tools">
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs text-slate bg-white border border-border px-3 py-1.5 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </Section>

        <Section title="What I Built">
          <ul className="space-y-3">
            {project.built.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-teal font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="What I Learned">
          <p>{project.learned}</p>
        </Section>
      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <Link
          to="/#projects"
          className="text-teal font-semibold hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-xs font-bold text-navy uppercase tracking-widest mb-4">
        {title}
      </h2>
      <div className="text-slate leading-relaxed">{children}</div>
    </div>
  );
}