export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2">
          <p className="text-teal font-semibold text-sm tracking-wide uppercase mb-4">
            AI • Automation • Customer Success
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-navy mb-6">
            Operations &<br />
            Project Coordination
          </h1>
          <p className="text-lg text-slate max-w-2xl mb-8 leading-relaxed">
            I bring together operations, project coordination, customer support
            and digital tools to help teams stay organized, improve workflows
            and deliver work efficiently.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-teal text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              View My Projects
            </a>
            <a
              href="/cv.pdf"
              download
              className="border border-border text-navy font-semibold px-6 py-3 rounded-md hover:border-teal hover:text-teal transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="aspect-square rounded-2xl bg-white border border-border overflow-hidden">
            <img
              src="/images/mercy.jpg"
              alt="Mercy A."
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}