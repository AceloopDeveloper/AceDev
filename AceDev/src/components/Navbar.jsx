import { useEffect, useState } from "react";

// Inline icons — no icon package required.
function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}
function IconX(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

// --- Easy to customize -------------------------------------------------
const BRAND = "YN.";
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
// Pure black & white theme — no color accent. -------------------------
// -------------------------------------------------------------------------

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the drawer on Escape.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <style>{`
        @keyframes navLinkIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6">
        <nav
          aria-label="Primary"
          className="flex w-full max-w-3xl items-center justify-between rounded-full border border-black/10 bg-white/80 px-4 py-2.5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] backdrop-blur-md sm:px-6"
        >
          <a
            href="#home"
            className="text-base font-semibold tracking-tight text-zinc-900 transition-transform active:scale-[0.98]"
          >
            {BRAND}
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-900 focus-visible:outline-none focus-visible:text-zinc-900"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-zinc-900 transition-all duration-300 ease-out group-hover:w-full group-focus-visible:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 transition-all duration-150 hover:bg-black/5 hover:text-zinc-900 active:scale-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-zinc-900 md:hidden"
          >
            <IconMenu width={20} height={20} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer + overlay */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-50 flex h-full w-[78%] max-w-xs flex-col border-l border-black/10 bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="text-base font-semibold tracking-tight text-zinc-900">
            {BRAND}
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 transition-all duration-150 hover:bg-black/5 hover:text-zinc-900 active:scale-90"
          >
            <IconX width={20} height={20} />
          </button>
        </div>

        <ul className="mt-4 flex flex-col gap-1 px-4">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              style={{
                animation: open ? `navLinkIn 0.35s ease-out both` : "none",
                animationDelay: open ? `${i * 60}ms` : "0ms",
              }}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-lg font-medium text-zinc-600 transition-colors hover:bg-black/5 hover:text-zinc-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-black/10 px-6 py-6 text-xs text-zinc-500">
          <span className="text-zinc-900">&#9679;</span> Available for new
          projects
        </div>
      </aside>
    </>
  );
}