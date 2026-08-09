import { useState } from "react";

// Inline icons — no icon package required.
function IconExternalLink(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
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
function IconImage(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}
function IconChevronLeft(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
function IconChevronRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

// --- Easy to customize -------------------------------------------------
// Swap the image area (marked below) for a real <img> per project once
// you have screenshots — same pattern as the photo swap in HeroAbout.jsx.
const PROJECTS = [
  {
    title: "Project One",
    description:
      "Short placeholder description — what it does, the problem it solves, and your role in building it.",
    tags: ["React", "Tailwind", "Vite"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "Short placeholder description — what it does, the problem it solves, and your role in building it.",
    tags: ["Next.js", "TypeScript"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "Short placeholder description — what it does, the problem it solves, and your role in building it.",
    tags: ["Node.js", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Four",
    description:
      "Short placeholder description — what it does, the problem it solves, and your role in building it.",
    tags: ["React", "Figma"],
    liveUrl: "#",
    repoUrl: "#",
  },
];
// Pure black & white theme — no color accent. -------------------------
// -------------------------------------------------------------------------

export default function Projects() {
  const [index, setIndex] = useState(0);
  const total = PROJECTS.length;

  const goTo = (i) => setIndex(((i % total) + total) % total);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  const project = PROJECTS[index];

  return (
    <section id="work" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/3 px-3 py-1 text-xs font-medium tracking-wide text-zinc-700">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
            Selected Work
          </span>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 sm:text-4xl">
            Projects
          </h2>
          <p className="max-w-[52ch] text-base leading-relaxed text-zinc-600">
            A few things I&apos;ve built recently. Each one links out to a
            live demo and the source.
          </p>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects"
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="relative mx-auto mt-12 max-w-2xl focus:outline-none"
        >
          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-0 top-[38%] z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-zinc-700 shadow-[0_10px_25px_-10px_rgba(0,0,0,0.3)] transition-all duration-150 hover:bg-black/5 hover:text-zinc-900 active:scale-90"
          >
            <IconChevronLeft width={18} height={18} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="absolute right-0 top-[38%] z-10 flex h-9 w-9 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-zinc-700 shadow-[0_10px_25px_-10px_rgba(0,0,0,0.3)] transition-all duration-150 hover:bg-black/5 hover:text-zinc-900 active:scale-90"
          >
            <IconChevronRight width={18} height={18} />
          </button>

          {/* Slide */}
          <article
            aria-live="polite"
            className="flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white"
          >
            <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-black/10 bg-black/2">
              <span className="absolute left-4 top-2 select-none text-6xl font-semibold leading-none text-black/6">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col items-center gap-1.5 text-zinc-400">
                <IconImage width={22} height={22} />
                <span className="text-[11px]">Add project image</span>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="text-xl font-semibold text-zinc-900">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-black/10 px-2.5 py-1 text-xs text-zinc-600"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-2 flex items-center gap-4 pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 transition-opacity hover:opacity-70 active:scale-[0.98] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  Live Demo
                  <IconExternalLink width={14} height={14} />
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  <IconGithub width={14} height={14} />
                  Code
                </a>
              </div>
            </div>
          </article>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {PROJECTS.map((p, i) => (
              <button
                key={p.title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${p.title}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === index ? "w-6 bg-zinc-900" : "w-1.5 bg-black/15 hover:bg-black/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}