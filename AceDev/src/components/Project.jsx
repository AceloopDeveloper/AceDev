import useScrollReveal from "../animation/Scroll";
import { ArrowSquareOut, GithubLogo, Image } from "@phosphor-icons/react";

// --- Easy to customize -------------------------------------------------
// Swap each image placeholder for a real <img> once you have screenshots —
// same pattern as the photo swap in HeroAbout.jsx.
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
];
// Pure black & white theme — no color accent. -------------------------
// -------------------------------------------------------------------------

function ImagePlaceholder({ index }) {
  return (
    <div className="group-hover:-translate-y-1 relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-black/2 transition-all duration-200 group-hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
      <span className="absolute left-4 top-2 select-none text-6xl font-semibold leading-none text-black/5">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex flex-col items-center gap-1.5 text-zinc-400">
        <Image size={22} weight="regular" />
        <span className="text-[11px]">Add project image</span>
      </div>
    </div>
  );
}

function ProjectLinks({ project, className = "" }) {
  return (
    <div className={`mt-2 flex items-center gap-3 ${className}`}>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-black px-4 py-1.5 text-xs font-medium text-black transition-colors hover:bg-black hover:text-white"
      >
        Live Demo
        <ArrowSquareOut size={14} weight="regular" />
      </a>
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-black px-4 py-1.5 text-xs font-medium text-black transition-colors hover:bg-black hover:text-white"
      >
        <GithubLogo size={14} weight="regular" />
        Code
      </a>
    </div>
  );
}

// One alternating row per project — image and text swap sides going down the list.
function ProjectRow({ project, index, reverse }) {
  return (
    <div
      className={`group flex flex-col items-center gap-8 md:gap-12 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full md:w-[46%]">
        <ImagePlaceholder index={index} />
      </div>
      <div
        className={`flex w-full flex-col items-center gap-4 text-center md:w-[54%] ${
          reverse ? "md:items-end md:text-right" : "md:items-start md:text-left"
        }`}
      >
        <h3 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
          {project.title}
        </h3>
        <p className="max-w-[42ch] text-sm leading-loose text-zinc-600 sm:text-base">
          {project.description}
        </p>
        <ul
          className={`flex flex-wrap justify-center gap-2 ${
            reverse ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-black/10 px-2.5 py-1 text-xs text-zinc-600"
            >
              {tag}
            </li>
          ))}
        </ul>
        <ProjectLinks
          project={project}
          className={`justify-center ${reverse ? "md:justify-end" : "md:justify-start"}`}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref: revealRef, visible } = useScrollReveal();

  return (
    <section id="work" className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div
        ref={revealRef}
        className={`mx-auto max-w-5xl rounded-4xl border border-neutral-200 px-6 py-14 transition-all duration-700 ease-out sm:px-10 sm:py-16 md:px-14 md:py-20 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/3 px-3 py-1 text-xs font-medium tracking-wide text-zinc-700">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
            Selected Work
          </span>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 sm:text-4xl">
            Projects
          </h2>
          <p className="mx-auto max-w-[52ch] text-base leading-loose text-zinc-600">
            A few things I&apos;ve built recently. Each one links out to a
            live demo and the source.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-20 sm:mt-24 sm:gap-24">
          {PROJECTS.map((project, i) => (
            <ProjectRow
              key={project.title}
              project={project}
              index={i}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}