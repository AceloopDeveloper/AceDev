import { useEffect, useState } from "react";
import {
  User,
  BarChart3,
  FolderKanban,
  Mail,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

// Swap this for your actual name — it doubles as the "home" link.
const YOUR_NAME = "Your Name";

// Each `id` must match the `id` attribute on the matching page section
// (e.g. <section id="about">) so scroll-linking and click-to-scroll work.
const NAV_ITEMS = [
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: BarChart3 },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false); // desktop icon-only toggle
  const [mobileOpen, setMobileOpen] = useState(false); // mobile slide-in drawer
  const [active, setActive] = useState(NAV_ITEMS[0].id);

  // Keep the active nav item in sync with whichever section is on screen.
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setActive(id);
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-30 flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-5 md:hidden">
        <button onClick={goHome} className="text-sm font-semibold tracking-tight text-neutral-900">
          {YOUR_NAME}
        </button>
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700"
        >
          <Menu size={18} />
        </button>
      </div>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-neutral-200 bg-white transition-transform duration-300 ease-in-out md:translate-x-0 md:transition-[width] ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } ${collapsed ? "md:w-21" : "md:w-60"}`}
      >
        {/* Logo row */}
        <div className="flex h-20 items-center gap-3 px-5">
          <button
            onClick={goHome}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white"
            aria-label="Scroll to top"
          >
            {YOUR_NAME.charAt(0)}
          </button>
          <span
            className={`overflow-hidden whitespace-nowrap text-sm font-semibold tracking-tight text-neutral-900 transition-all duration-200 ${
              collapsed ? "md:w-0 md:opacity-0" : "w-auto opacity-100"
            }`}
          >
            {YOUR_NAME}
          </span>

          {/* Mobile close button */}
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg text-neutral-500 md:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* Desktop collapse toggle */}
        <button
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="absolute -right-3 top-9 hidden h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 shadow-sm hover:text-neutral-900 md:flex"
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        {/* Nav items */}
        <nav className="mt-4 flex flex-1 flex-col gap-1 px-3">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <div key={id} className="group relative">
                <button
                  onClick={() => goTo(id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
                  } ${collapsed ? "md:justify-center" : ""}`}
                >
                  <Icon size={18} className="shrink-0" />
                  <span className={collapsed ? "md:hidden" : ""}>{label}</span>
                </button>

                {/* Tooltip — only relevant when collapsed on desktop */}
                {collapsed && (
                  <span className="pointer-events-none absolute left-full top-1/2 z-10 ml-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-neutral-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 md:block">
                    {label}
                  </span>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-neutral-100 px-5 py-5 text-xs text-neutral-400">
          <span className={collapsed ? "md:hidden" : ""}>© {new Date().getFullYear()}</span>
        </div>
      </aside>
    </>
  );
}