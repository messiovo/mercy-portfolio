export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate">
        <p>© {new Date().getFullYear()} Mercy A. All rights reserved.</p>
        <p>Operations · Project Coordination · Customer Success · EdTech</p>
      </div>
    </footer>
  );
}