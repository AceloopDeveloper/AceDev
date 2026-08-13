import { useState } from "react";
import useScrollReveal from "../animation/Scroll";

// Inline icons — no icon package required.
function IconGithub(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4.5-1 4.5-4.5a3.6 3.6 0 0 0-1-2.5c.1-.3.4-1.4-.1-2.9 0 0-.8-.3-2.8 1a9.4 9.4 0 0 0-5 0c-2-1.3-2.8-1-2.8-1-.5 1.5-.2 2.6-.1 2.9A3.6 3.6 0 0 0 6 9.5C6 13 8.5 13.8 10.5 14c-.4.4-.6.9-.6 1.5V19" />
    </svg>
  );
}
function IconExternalLink(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

// --- Easy to customize -------------------------------------------------
const GITHUB_USERNAME = "AceloopDeveloper";
// Heatmap image comes from ghchart.rshah.org — a free public widget that
// renders a real GitHub contribution graph as an image, no API key needed.
// No color param = GitHub's classic default green shades.
const CHART_URL = `https://ghchart.rshah.org/${GITHUB_USERNAME}`;
// -------------------------------------------------------------------------

export default function GithubActivity() {
  const [imgFailed, setImgFailed] = useState(false);
  const { ref: revealRef, visible } = useScrollReveal();

  return (
    <section id="activity" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div
        ref={revealRef}
        className={`mx-auto max-w-7xl transition-all duration-700 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/3 px-3 py-1 text-xs font-medium tracking-wide text-zinc-700">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
            GitHub Activity
          </span>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 sm:text-4xl">
            What I&apos;ve been building
          </h2>
          <p className="max-w-[52ch] text-base leading-relaxed text-zinc-600">
            A live look at my contribution history, pulled straight from
            GitHub.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-zinc-900">
                <IconGithub width={18} height={18} />
              </div>
              <span className="text-sm font-medium text-zinc-700">
                @{GITHUB_USERNAME}
              </span>
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 transition-opacity hover:opacity-70 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              View Profile
              <IconExternalLink width={14} height={14} />
            </a>
          </div>

          <div className="mt-6">
            {imgFailed ? (
              <p className="py-8 text-center text-sm text-zinc-500">
                Couldn&apos;t load the contribution graph right now —{" "}
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-900 underline underline-offset-2"
                >
                  view it directly on GitHub
                </a>
                .
              </p>
            ) : (
              <img
                src={CHART_URL}
                alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
                className="mx-auto block h-auto w-full"
                onError={() => setImgFailed(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}