export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
      <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
        Let's Work Together
      </h2>
      <p className="text-slate max-w-2xl mb-10">
        I'm open to remote opportunities in operations, project coordination,
        customer success and EdTech.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:messiovo@gmail.com"
          className="bg-teal text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/mercy-avwenagbiku"
          target="_blank"
          rel="noreferrer"
          className="border border-border text-navy font-semibold px-6 py-3 rounded-md hover:border-teal hover:text-teal transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="/cv.pdf"
          download
          className="border border-border text-navy font-semibold px-6 py-3 rounded-md hover:border-teal hover:text-teal transition-colors"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}