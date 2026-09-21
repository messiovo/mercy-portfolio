import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-extrabold tracking-tight text-navy">
          MERCY A.
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate hover:text-teal transition-colors"
            >
              {link.name}
            </a>
          ))}
         <a
  href="/cv.pdf"
  target="_blank"
  rel="noreferrer"
  className="text-sm font-semibold bg-teal text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
>
  View / Download CV
</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-cream px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate hover:text-teal"
            >
              {link.name}
            </a>
          ))}
        <a
  href="/cv.pdf"
  target="_blank"
  rel="noreferrer"
  className="text-sm font-semibold bg-teal text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
>
  View / Download CV
</a>
        </div>
      )}
    </nav>
  );
}