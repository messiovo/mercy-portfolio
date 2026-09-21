const items = [
  {
    title: "Operations",
    lines: ["Workflow improvement", "Process documentation", "Systems building"],
  },
  {
    title: "Project Coordination",
    lines: ["Planning", "Coordination", "Tracking & reporting"],
  },
  {
    title: "AI & Automation",
    lines: ["AI-assisted workflows", "Tool setup & configuration", "Process automation"],
  },
  {
    title: "Customer Success",
    lines: ["Client communication", "Support & coordination", "Onboarding"],
  },
];

export default function WhatIDo() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10">
        What I Do
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-border rounded-xl p-6 hover:border-teal transition-colors"
          >
            <h3 className="font-bold text-navy mb-4">{item.title}</h3>
            <ul className="space-y-2">
              {item.lines.map((line) => (
                <li key={line} className="text-sm text-slate">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}