import { useState } from "react";
import Lightbox from "./Lightbox";

export default function ScreenshotImage({ src, alt }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full bg-white border border-border rounded-xl overflow-hidden hover:border-teal transition-colors cursor-zoom-in"
        aria-label={`View ${alt} larger`}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
        />

        {/* Hover overlay + magnify icon */}
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 rounded-full p-3 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-navy"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
              <path d="M11 8v6M8 11h6" />
            </svg>
          </div>
        </div>
      </button>

      {open && (
        <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />
      )}
    </>
  );
}