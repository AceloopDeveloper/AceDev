import { useEffect, useState } from "react";
import { ArrowSquareOut, GithubLogo, X } from "@phosphor-icons/react";
import useScrollReveal from "../animation/Scroll";
import piggySave from "../assets/projectsImg/piggySave.jpg";
import BaekCoffee from "../assets/projectsImg/BaekCoffee.jpg";
import RockMetal from "../assets/projectsImg/RockMetal.jpg";

const PROJECTS = [
  {
    title: "BlueNote",
    description:
      "A simple notes app for keeping ideas and important information organized.",
    image: piggySave,
    tags: ["JavaScript", "API", "CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "BaeK — Coffee Shop Website",
    description:
      "A simple coffee shop website where customers can explore the menu, learn about the shop, and find important information.",
    image: BaekCoffee,
    tags: ["React", "Tailwind", "Vite"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Vibe — Brand Identity",
    description:
      "A bold visual identity concept focused on creating a simple and memorable logo with a strong personality.",
    image: RockMetal,
    tags: ["Java"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

function ProjectImage({ project }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-black/15 shadow-[0_15px_35px_-20px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:-translate-y-3 group-hover:border-black/35 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
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
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-1.5 rounded-full border border-black px-4 py-1.5 text-xs font-medium text-black transition-colors hover:bg-black hover:text-white"
      >
        Live Demo
        <ArrowSquareOut size={14} weight="regular" />
      </a>

      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-1.5 rounded-full border border-black px-4 py-1.5 text-xs font-medium text-black transition-colors hover:bg-black hover:text-white"
      >
        <GithubLogo size={14} weight="regular" />
        Code
      </a>
    </div>
  );
}

function ProjectRow({ project, reverse, onSelect }) {
  const activate = () => onSelect(project);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={activate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activate();
        }
      }}
      className={`group flex cursor-pointer flex-col items-center gap-8 rounded-3xl outline-none transition-shadow duration-300 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black/30 md:gap-12 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full md:w-[46%]">
        <ProjectImage project={project} />
      </div>

      <div
        className={`flex w-full flex-col items-center gap-4 text-center md:w-[54%] ${
          reverse
            ? "md:items-end md:text-right"
            : "md:items-start md:text-left"
        }`}
      >
        <h3 className="text-xl font-dotgothic text-zinc-900 sm:text-2xl">
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
          className={`justify-center ${
            reverse ? "md:justify-end" : "md:justify-start"
          }`}
        />
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const [visible, setVisible] = useState(false);
  const [displayProject, setDisplayProject] = useState(null);

  useEffect(() => {
    if (project) {
      setDisplayProject(project);
      document.body.style.overflow = "hidden";
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    setVisible(false);
    document.body.style.overflow = "";
    const timeout = setTimeout(() => setDisplayProject(null), 300);
    return () => clearTimeout(timeout);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [project, onClose]);

  if (!displayProject) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        className={`relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-4xl border border-neutral-200 bg-white p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 sm:p-10 ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-zinc-700 transition-colors hover:bg-black hover:text-white"
        >
          <X size={16} weight="regular" />
        </button>

        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-black/15">
          <img
            src={displayProject.image}
            alt={`${displayProject.title} screenshot`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 text-left">
          <h3
            id="project-modal-title"
            className="text-2xl font-dotgothic tracking-tighter text-zinc-900 sm:text-3xl"
          >
            {displayProject.title}
          </h3>

          <p className="text-sm leading-loose text-zinc-600 sm:text-base">
            {displayProject.description}
          </p>

          <ul className="flex flex-wrap gap-2">
            {displayProject.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-black/10 px-2.5 py-1 text-xs text-zinc-600"
              >
                {tag}
              </li>
            ))}
          </ul>

          <ProjectLinks project={displayProject} />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref: revealRef, visible } = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState(null);

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
            Selected Works
          </span>
          <h2 className="text-3xl font-dotgothic tracking-tighter text-zinc-900 sm:text-4xl">
            What I built
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
              reverse={i % 2 === 1}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}