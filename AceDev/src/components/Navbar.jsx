import {
  House,
  FolderSimple,
  Stack,
  EnvelopeSimple,
} from "@phosphor-icons/react";

const links = [
  { label: "Home", href: "#home", icon: House },
  { label: "Projects", href: "#work", icon: FolderSimple },
  { label: "Stack", href: "#skills", icon: Stack },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-16 shrink-0 border-r border-neutral-200 bg-white flex flex-col justify-between">
      <nav className="flex flex-col items-center gap-1 px-3 py-6">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            className="group relative flex items-center justify-center rounded-lg p-2.5 text-black hover:bg-neutral-100 transition-colors"
          >
            <Icon size={20} weight="regular" />
            <span className="pointer-events-none absolute left-full ml-2 whitespace-nowrap rounded-md bg-black px-2.5 py-1 text-xs text-white opacity-0 scale-95 origin-left transition-all duration-150 group-hover:opacity-100 group-hover:scale-100 z-50">
              {label}
            </span>
          </a>
        ))}
      </nav>

      <div className="px-3 py-6 flex justify-center">
        <a
          href="mailto:your-email@example.com"
          className="group relative flex items-center justify-center rounded-lg border border-black p-2.5 text-black hover:bg-black hover:text-white transition-colors"
        >
          <EnvelopeSimple size={20} weight="regular" />
          <span className="pointer-events-none absolute left-full ml-2 whitespace-nowrap rounded-md bg-black px-2.5 py-1 text-xs text-white opacity-0 scale-95 origin-left transition-all duration-150 group-hover:opacity-100 group-hover:scale-100 z-50">
            Get In Touch
          </span>
        </a>
      </div>
    </aside>
  );
}