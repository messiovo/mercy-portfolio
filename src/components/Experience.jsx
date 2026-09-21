const experience = [
  {
    period: "2025 – Present",
    company: "CuriousLab Academy",
    role: "Operations & Education",
    summary:
      "Day-to-day academy operations, tutor coordination, scheduling, parent support and virtual learning delivery.",
  },
  {
    period: "2023 – 2025",
    company: "Lugo Agency",
    role: "Customer Support / Client Operations",
    summary:
      "Remote customer support, client communication, issue resolution and CRM-based workflow management.",
  },
  {
    period: "2021 – 2023",
    company: "Emperor Telecoms",
    role: "Operations / Administration",
    summary:
      "Team coordination, administrative support, workflow improvement, KPI tracking and client service operations.",
  },
  {
    period: "2014 – 2016",
    company: "Christ Embassy",
    role: "Administrative Assistant",
    summary:
      "Administrative support, records management, scheduling, communication and day-to-day office coordination.",
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
    <div className="md:col-span-2">
      <p className="text-slate mb-2">{item.role}</p>
      {item.summary && (
        <p className="text-sm text-slate/80">{item.summary}</p>
      )}
    </div>
  </div>
))}
      </div>
      
    </section>
  );
}