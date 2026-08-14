import useScrollReveal from "../animation/Scroll";

// Inline icons — no icon package required. Each is either a small brand
// glyph or a colored letter badge, drawn at true brand colors.
function IconReact(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="1.1">
        <ellipse cx="12" cy="12" rx="10" ry="4.4" />
        <ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}
function IconTailwind(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#38BDF8"
        d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.48 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.48 12 7 12z"
      />
    </svg>
  );
}
function IconNode(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="#339933" d="M12 2 3 7.2v9.6L12 22l9-5.2V7.2L12 2z" />
      <path
        fill="#0a0a0a"
        fillOpacity="0.15"
        d="M12 2 3 7.2l9 5.1 9-5.1L12 2z"
      />
    </svg>
  );
}
function IconGit(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#F05033" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="12" r="2" />
      <path d="M6 8v8M6 8c0 4 4 4 10 4" />
    </svg>
  );
}
function IconFigma(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="2" y="2" width="9" height="9" rx="4.5" fill="#F24E1E" />
      <rect x="13" y="2" width="9" height="9" rx="4.5" fill="#A259FF" />
      <rect x="2" y="13" width="9" height="9" rx="4.5" fill="#1ABCFE" />
      <circle cx="17.5" cy="17.5" r="4.5" fill="#0ACF83" />
    </svg>
  );
}
function TextBadge({ label, bg, color }) {
  return (
    <div
      className="flex h-9 w-9 items-center justify-center rounded-lg text-[10px] font-bold"
      style={{ backgroundColor: bg, color }}
    >
      {label}
    </div>
  );
}

// --- Easy to customize -------------------------------------------------
// Add, remove, or move entries between categories freely — each skill is
// just a { name, icon } pair.
const CATEGORIES = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <IconReact width={36} height={36} /> },
      { name: "JavaScript", icon: <TextBadge label="JS" bg="#F7DF1E" color="#000000" /> },
      { name: "TypeScript", icon: <TextBadge label="TS" bg="#3178C6" color="#FFFFFF" /> },
      { name: "Tailwind CSS", icon: <IconTailwind width={36} height={36} /> },
      { name: "HTML5", icon: <TextBadge label="HTML" bg="#E44D26" color="#FFFFFF" /> },
      { name: "CSS3", icon: <TextBadge label="CSS" bg="#1572B6" color="#FFFFFF" /> },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <IconNode width={36} height={36} /> },
      { name: "Express", icon: <TextBadge label="Ex" bg="#000000" color="#FFFFFF" /> },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: <IconGit width={36} height={36} /> },
      { name: "Figma", icon: <IconFigma width={36} height={36} /> },
    ],
  },
];
// Pure black & white theme everywhere else — only these skill icons carry
// their real brand colors, by design. ----------------------------------
// -------------------------------------------------------------------------

export default function TechStack() {
  const { ref: revealRef, visible } = useScrollReveal();

  return (
    <section id="skills" className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div
        ref={revealRef}
        className={`mx-auto max-w-5xl rounded-4xl border border-neutral-200 px-6 py-14 transition-all duration-700 ease-out sm:px-10 sm:py-16 md:px-14 md:py-20 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/3 px-3 py-1 text-xs font-medium tracking-wide text-zinc-700">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
            Tech Stack
          </span>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 sm:text-4xl">
            Tools I work with
          </h2>
          <p className="mx-auto max-w-[52ch] text-base leading-loose text-zinc-600">
            The languages, frameworks, and tools I reach for most.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-14 sm:mt-24">
          {CATEGORIES.map((category) => (
            <div key={category.name} className="flex flex-col items-start gap-5 text-left">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-18px_rgba(0,0,0,0.25)]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-zinc-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}