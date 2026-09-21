const groups = [
  {
    label: "Project & Operations",
    items: ["Asana", "Notion", "Trello", "ClickUp (Portfolio)"],
  },
  {
    label: "CRM & Communication",
    items: ["HubSpot", "Slack", "Google Workspace"],
  },
 {
  label: "AI & Productivity",
  items: ["ChatGPT", "Claude", "AI tools"],
},
{
  label: "Automation",
  items: ["Zapier", "Google Forms", "Process automation"],
},
  {
    label: "Content",
    items: ["Canva", "CapCut"],
  },
];

export default function Tools() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10">
        Tools & Platforms
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {groups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-semibold text-navy mb-4 uppercase tracking-wide">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs text-slate bg-white border border-border px-3 py-1.5 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}