import { useState, useCallback } from "react";
import useScrollReveal from "../animation/Scroll";
import {
  Barbell,
  PersonSimpleRun,
  Mountains,
  Image,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";

// --- Easy to customize -------------------------------------------------
// Each activity gets 2 photo slots by default (6 slides total). Add more
// activities, or more photo slots per activity, by editing PHOTOS_PER_ACTIVITY.
const ACTIVITIES = [
  {
    title: "Gym & Strength Training",
    description:
      "Regular strength training to stay consistent and build discipline that carries over into everything else.",
    icon: Barbell,
  },
  {
    title: "Running",
    description:
      "Early morning runs to clear my head before diving into code for the day.",
    icon: PersonSimpleRun,
  },
  {
    title: "Hiking",
    description:
      "Getting outdoors on weekends whenever I get the chance — good for resetting after a long week.",
    icon: Mountains,
  },
];
const PHOTOS_PER_ACTIVITY = 2;

// Swap each placeholder for a real <img> once you have photos, same
// pattern as HeroAbout.jsx and Project.jsx.
const SLIDES = ACTIVITIES.flatMap((activity, activityIndex) =>
  Array.from({ length: PHOTOS_PER_ACTIVITY }, (_, photoIndex) => ({
    ...activity,
    key: `${activity.title}-${photoIndex}`,
    slideIndex: activityIndex * PHOTOS_PER_ACTIVITY + photoIndex,
  }))
);
// -------------------------------------------------------------------------

// Coverflow tuning — the 3D feel comes from these. Adjust freely.
const CARD_WIDTH = 280;
const CARD_HEIGHT = 400;
const PHOTO_HEIGHT = 200;
const PERSPECTIVE = 1400;
const GAP_X = 140; // px between stacked cards
const DEPTH = 180; // how far back neighbors sit, in px
const SCALE_STEP = 0.14;
const TILT = 10; // deg of rotateY per step away from center
const MAX_VISIBLE = 2; // cards shown on each side of the active one
const MOVE_MS = 500;
const TRANSITION_CSS =
  "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease";

function PhotoPlaceholder({ index }) {
  return (
    <div
      className="relative flex shrink-0 items-center justify-center overflow-hidden border-b border-black/10 bg-black/2"
      style={{ height: PHOTO_HEIGHT }}
    >
      <span className="absolute left-4 top-2 select-none text-6xl font-semibold leading-none text-black/5">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex flex-col items-center gap-1.5 text-zinc-400">
        <Image size={22} weight="regular" />
        <span className="text-[11px]">Add photo</span>
      </div>
    </div>
  );
}

function SlideCard({ slide, isActive }) {
  const Icon = slide.icon;
  return (
    <div
      className="flex h-full select-none flex-col overflow-hidden rounded-2xl border bg-white"
      style={{
        borderColor: isActive ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.08)",
        boxShadow: isActive
          ? "0 24px 48px -24px rgba(0,0,0,0.28)"
          : "0 10px 20px -14px rgba(0,0,0,0.15)",
      }}
    >
      <PhotoPlaceholder index={slide.slideIndex} />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-2">
          <Icon size={18} weight="regular" className="text-zinc-700" />
          <h3 className="text-base font-semibold text-zinc-900">
            {slide.title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-zinc-600">
          {slide.description}
        </p>
      </div>
    </div>
  );
}

export default function BeyondTheCode() {
  const { ref: revealRef, visible } = useScrollReveal();
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  const total = SLIDES.length;

  const lock = useCallback(() => {
    setLocked(true);
    window.setTimeout(() => setLocked(false), MOVE_MS);
  }, []);

  const step = useCallback(
    (dir) => {
      if (locked) return;
      lock();
      setActive((a) => ((a + dir) % total + total) % total);
    },
    [locked, lock, total]
  );

  const goTo = useCallback(
    (i) => {
      if (locked || i === active) return;
      lock();
      setActive(i);
    },
    [locked, lock, active]
  );

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  };

  return (
    <section id="beyond" className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div
        ref={revealRef}
        className={`mx-auto max-w-5xl rounded-4xl border border-neutral-200 px-6 py-14 transition-all duration-700 ease-out sm:px-10 sm:py-16 md:px-14 md:py-20 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/3 px-3 py-1 text-xs font-medium tracking-wide text-zinc-700">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
            Beyond the Code
          </span>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 sm:text-4xl">
            Life outside the screen
          </h2>
          <p className="mx-auto max-w-[52ch] text-base leading-loose text-zinc-600">
            A few things I make time for when I&apos;m not building.
          </p>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Beyond the code"
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="relative mt-20 flex items-center justify-center overflow-hidden focus:outline-none sm:mt-24"
          style={{
            height: CARD_HEIGHT + 40,
            perspective: `${PERSPECTIVE}px`,
          }}
        >
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous photo"
            className="absolute left-1 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-zinc-700 shadow-[0_10px_25px_-10px_rgba(0,0,0,0.3)] transition-all duration-150 hover:bg-black/5 hover:text-zinc-900 active:scale-90 sm:left-4"
          >
            <CaretLeft size={18} weight="regular" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next photo"
            className="absolute right-1 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-zinc-700 shadow-[0_10px_25px_-10px_rgba(0,0,0,0.3)] transition-all duration-150 hover:bg-black/5 hover:text-zinc-900 active:scale-90 sm:right-4"
          >
            <CaretRight size={18} weight="regular" />
          </button>

          <div
            style={{
              position: "relative",
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              transformStyle: "preserve-3d",
            }}
          >
            {SLIDES.map((slide, i) => {
              let rel = i - active;
              if (rel > total / 2) rel -= total;
              if (rel < -total / 2) rel += total;
              const ax = Math.abs(rel);
              const isVisible = ax <= MAX_VISIBLE;
              const isActive = rel === 0;
              const sc = Math.max(0.55, 1 - ax * SCALE_STEP);
              const tx = rel * GAP_X;
              const tz = -ax * DEPTH;
              const ry = -rel * TILT;

              return (
                <div
                  key={slide.key}
                  onClick={() => goTo(i)}
                  aria-hidden={!isVisible}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT,
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                    transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${sc})`,
                    transition: TRANSITION_CSS,
                    opacity: isVisible ? (isActive ? 1 : 0.45) : 0,
                    pointerEvents: isVisible ? "auto" : "none",
                    cursor: isActive ? "default" : "pointer",
                    zIndex: total - ax,
                  }}
                >
                  <SlideCard slide={slide} isActive={isActive} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.key}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === active ? "w-6 bg-zinc-900" : "w-1.5 bg-black/15 hover:bg-black/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}