// Inline icons — no icon package required.
function IconDownload(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3v13" />
      <path d="m7 12 5 5 5-5" />
      <path d="M4 21h16" />
    </svg>
  );
}
function IconArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
function IconGithub(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4.5-1 4.5-4.5a3.6 3.6 0 0 0-1-2.5c.1-.3.4-1.4-.1-2.9 0 0-.8-.3-2.8 1a9.4 9.4 0 0 0-5 0c-2-1.3-2.8-1-2.8-1-.5 1.5-.2 2.6-.1 2.9A3.6 3.6 0 0 0 6 9.5C6 13 8.5 13.8 10.5 14c-.4.4-.6.9-.6 1.5V19" />
    </svg>
  );
}
function IconLinkedin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

import AceDev from "../assets/AceDev.png";

// --- Easy to customize -------------------------------------------------
// "Your Name" is a placeholder that intentionally matches the "YN." brand
// initials used in Navbar.jsx — swap both together when you add your name.
const NAME = "Your Name";
const ROLE = "Frontend Developer";
const BIO =
  "I build fast, accessible interfaces with a strong eye for detail. " +
  "Currently focused on React, design systems, and turning clean ideas into clean code.";
const FOCUS_AREAS = ["React", "TypeScript", "UI/UX", "Node.js"];
const RESUME_URL = "/resume.pdf";
const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/", Icon: IconGithub },
  { label: "LinkedIn", href: "https://linkedin.com/", Icon: IconLinkedin },
  { label: "Email", href: "mailto:hello@example.com", Icon: IconMail },
];
// Pure black & white theme — no color accent. -------------------------
// -------------------------------------------------------------------------

export default function HeroAbout() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden bg-white px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <style>{`
        @keyframes introFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .intro-animate { animation: introFadeUp 0.7s ease-out both; }
        }
      `}</style>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: hero + about copy */}
        <div className="intro-animate flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/3 px-3 py-1 text-xs font-medium tracking-wide text-zinc-700">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
            {ROLE}
          </span>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tighter text-zinc-900 sm:text-5xl md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="border-b-2 border-zinc-900">{NAME}</span>
          </h1>

          <p className="max-w-[52ch] text-base leading-relaxed text-zinc-600">
            {BIO}
          </p>

          <ul className="flex flex-wrap gap-2">
            {FOCUS_AREAS.map((area) => (
              <li
                key={area}
                className="rounded-full border border-black/10 px-3 py-1 text-xs text-zinc-600"
              >
                {area}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              Download Resume
              <IconDownload width={16} height={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/20 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-all duration-200 hover:bg-black/5 active:scale-[0.98] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-black/40"
            >
              Get In Touch
              <IconArrowRight width={16} height={16} />
            </a>
          </div>

          <div className="mt-2 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors duration-200 hover:bg-black/5 hover:text-zinc-900"
              >
                <Icon width={18} height={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
          <div className="h-full w-full overflow-hidden rounded-4xl border border-black/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)]">
            <img
              src={AceDev}
              alt={NAME}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}