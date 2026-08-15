import { useState } from "react";
import useScrollReveal from "../animation/Scroll";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";

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
    <section id="activity" className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div
        ref={revealRef}
        className={`mx-auto max-w-5xl rounded-4xl border border-neutral-200 px-6 py-14 transition-all duration-700 ease-out sm:px-10 sm:py-16 md:px-14 md:py-20 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/3 px-3 py-1 text-xs font-medium tracking-wide text-zinc-700">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
            GitHub Activity
          </span>
          <h2 className="text-3xl font-dotgothic tracking-tighter text-zinc-900 sm:text-4xl">
            What I&apos;ve been building
          </h2>
          <p className="mx-auto max-w-[52ch] text-base leading-loose text-zinc-600">
            A live look at my contribution history, pulled straight from
            GitHub.
          </p>
        </div>

        <div className="mt-20 sm:mt-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-zinc-900">
                <GithubLogo size={18} weight="regular" />
              </div>
              <span className="text-sm font-medium text-zinc-700">
                @{GITHUB_USERNAME}
              </span>
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 transition-opacity hover:opacity-70 active:scale-[0.98] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              View Profile
              <ArrowSquareOut size={14} weight="regular" />
            </a>
          </div>

          <div className="mt-8">
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