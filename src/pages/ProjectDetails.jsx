import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import ScreenshotImage from "../components/ScreenshotImage";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-navy mb-4">Project not found</h1>
        <p className="text-slate mb-6">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/#projects" className="text-teal font-semibold hover:underline">
          ← Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <Link
        to="/#projects"
        className="text-sm text-slate hover:text-teal transition-colors"
      >
        ← Back to Projects
      </Link>

      {/* HEADER */}
      <header className="mt-8 mb-12">
        <p className="text-xs font-semibold text-teal uppercase tracking-wide mb-3">
          {project.category}
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight mb-6">
          {project.title}
        </h1>
        <p className="text-lg text-slate max-w-3xl leading-relaxed">
          {project.description}
        </p>

        {(project.projectType || project.experienceNote) && (
          <div className="mt-6 flex flex-wrap gap-3 text-xs">
            {project.projectType && (
              <span className="bg-white border border-border px-3 py-1.5 rounded-full text-slate">
                <span className="text-slate/60">Project Type:</span>{" "}
                <span className="font-semibold text-navy">
                  {project.projectType}
                </span>
              </span>
            )}
            {project.experienceNote && (
              <span className="bg-teal/5 border border-teal/20 text-teal px-3 py-1.5 rounded-full font-medium">
                {project.experienceNote}
              </span>
            )}
          </div>
        )}

        {project.tools && project.tools.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs text-slate bg-white border border-border px-3 py-1.5 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* COVER IMAGE — clickable */}
      {project.image && (
        <div className="mb-12">
          <ScreenshotImage src={project.image} alt={project.title} />
        </div>
      )}

      {/* OVERVIEW */}
      {project.overview && (
        <Section title="Project Overview">
          <p>{project.overview}</p>
        </Section>
      )}

      {/* VIDEO */}
      {project.video && (
        <section className="mt-16">
          <h2 className="text-xs font-bold text-navy uppercase tracking-widest mb-4">
            Project Walkthrough
          </h2>
          <p className="text-slate mb-6">
            A short walkthrough of the workflow and how the tools fit together.
          </p>
          <video
            controls
            className="w-full rounded-xl border border-border bg-black"
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      )}

      {/* WORKFLOW */}
      {project.workflow && project.workflow.length > 0 && (
        <Section title="The Workflow">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            {project.workflow.map((item, index) => (
              <div key={item.step} className="flex items-center gap-4">
                <div className="bg-white border border-border rounded-lg px-5 py-4">
                  <p className="font-bold text-navy">{item.step}</p>
                  <p className="text-sm text-slate">{item.detail}</p>
                </div>
                {index < project.workflow.length - 1 && (
                  <span className="text-teal text-2xl hidden md:block">→</span>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* CASE STUDY SECTIONS */}
      {project.problem && (
        <Section title="The Problem">
          <p>{project.problem}</p>
        </Section>
      )}

      {project.approach && (
        <Section title="The Approach">
          <p>{project.approach}</p>
        </Section>
      )}

      {project.built && project.built.length > 0 && (
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
      )}

      {project.learned && (
        <Section title="What I Learned">
          <p>{project.learned}</p>
        </Section>
      )}

      {/* GALLERY (grouped) */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="mt-20">
          <h2 className="text-xs font-bold text-navy uppercase tracking-widest mb-2">
            Screenshots
          </h2>
          <p className="text-slate mb-8">
            Click any screenshot to view it full size.
          </p>
          <div className="space-y-14">
            {project.gallery.map((group) => (
              <div key={group.label}>
                <h3 className="font-bold text-navy mb-5 text-lg">
                  {group.label}
                </h3>
                {/* Single column so UI screenshots stay readable */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {group.images.map((image, index) => (
                    <ScreenshotImage
                      key={image}
                      src={image}
                      alt={`${group.label} screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* GALLERY (flat fallback) */}
      {!project.gallery &&
        project.screenshots &&
        project.screenshots.length > 0 && (
          <section className="mt-20">
            <h2 className="text-xs font-bold text-navy uppercase tracking-widest mb-2">
              Screenshots
            </h2>
            <p className="text-slate mb-8">
              Click any screenshot to view it full size.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {project.screenshots.map((image, index) => (
                <ScreenshotImage
                  key={image}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                />
              ))}
            </div>
          </section>
        )}

      {/* PDF */}
      {project.pdf && (
        <section className="mt-20">
          <h2 className="text-xs font-bold text-navy uppercase tracking-widest mb-4">
            Project Documentation
          </h2>
          <p className="text-slate mb-6 max-w-2xl">
            The complete workflow, screenshots and implementation notes are
            documented in the project case study.
          </p>
          <a
            href={project.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            View Case Study PDF →
          </a>
        </section>
      )}

      <div className="mt-20 pt-8 border-t border-border">
        <Link to="/#projects" className="text-teal font-semibold hover:underline">
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-16">
      <h2 className="text-xs font-bold text-navy uppercase tracking-widest mb-4">
        {title}
      </h2>
      <div className="text-slate leading-relaxed max-w-3xl">{children}</div>
    </section>
  );
}