export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
        About Me
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4 text-slate leading-relaxed">
          <p>
            I'm an operations and education professional with experience across
            customer support, operations, project coordination and online
            education.
          </p>
          <p>
            I've worked with teams and clients across remote environments and
            enjoy turning disorganized processes into clear, trackable
            workflows.
          </p>
          <p>
            Alongside my professional experience, I build practical portfolio
            projects exploring AI, automation, project management systems and
            productivity tools.
          </p>
        </div>
        <div className="bg-white border border-border rounded-xl p-6 space-y-4 text-sm">
          <div>
            <p className="text-slate mb-1">Based in</p>
            <p className="font-semibold text-navy">Lagos, Nigeria</p>
          </div>
          <div>
            <p className="text-slate mb-1">Available for</p>
            <p className="font-semibold text-navy">Remote opportunities</p>
          </div>
          <div>
            <p className="text-slate mb-1">Focus</p>
            <p className="font-semibold text-navy">
              Operations · Project Coordination · Customer Success · EdTech
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}