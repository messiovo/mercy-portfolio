const items = [
  {
    title: "Google Project Management",
    detail: "Courses 1–2 completed",
  },
  {
    title: "Excel Skills for Business — Macquarie University",
    detail: "Courses 1–2 completed",
  },
  {
    title: "People Management Skills — CIPD",
    detail: "",
  },
  {
    title: "Career Essentials in Administrative Assistance — Microsoft & LinkedIn",
    detail: "",
  },
  {
    title: "ALX Virtual Assistant Certificate",
    detail: "",
  },
];

export default function ProfessionalDevelopment() {
  return (
    <section
      id="development"
      className="max-w-6xl mx-auto px-6 py-16 border-t border-border"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10">
        Professional Development
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-border rounded-xl p-5"
          >
            <p className="font-semibold text-navy mb-1">{item.title}</p>
            {item.detail && (
              <p className="text-sm text-slate">{item.detail}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}