const experience = [
  {
    period: "2025 – Present",
    company: "CuriousLab Academy",
    role: "Operations & Education",
  },
  {
    period: "2023 – 2025",
    company: "Lugo Agency",
    role: "Customer Support / Client Operations",
  },
  {
    period: "2021 – 2023",
    company: "Emperor Telecoms",
    role: "Operations / Administration",
  },
  {
    period: "2014 – 2016",
    company: "Christ Embassy",
    role: "Administrative Assistant",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10">
        Experience
      </h2>
      <div className="space-y-6">
        {experience.map((item) => (
          <div
            key={item.company}
            className="grid md:grid-cols-4 gap-4 py-6 border-b border-border last:border-0"
          >
            <p className="text-sm text-slate font-medium">{item.period}</p>
            <p className="font-bold text-navy md:col-span-1">{item.company}</p>
            <p className="text-slate md:col-span-2">{item.role}</p>
          </div>
        ))}
      </div>
      <a
        href="/cv.pdf"
        download
        className="inline-block mt-8 border border-border text-navy font-semibold px-6 py-3 rounded-md hover:border-teal hover:text-teal transition-colors"
      >
        View / Download CV →
      </a>
    </section>
  );
}