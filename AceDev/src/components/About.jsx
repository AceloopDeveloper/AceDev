import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

// --- Easy to customize -------------------------------------------------
// Swap this out for your real bio — starts with the tagline, then keeps
// going into your story. It's now a single paragraph, so keep it flowing.
const BIO = `I’m an aspiring full-stack developer who enjoys building websites and learning how things work behind the scenes. I’m focused on improving my skills in both frontend and backend development, while working on real projects that help me grow. I enjoy solving problems, learning new technologies, and turning ideas into useful and simple web experiences.
`;
// -------------------------------------------------------------------------

export default function HeroAbout() {
  return (
    <section id="home" className="w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border border-neutral-200 rounded-2xl px-8 py-10 md:px-12 md:py-12 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center">
            <img
              src="src/assets/AceDev.png"
              alt="AceDev Logo"
              className="w-24 h-24 md:w-28 md:h-28 rounded-lg object-cover shrink-0"
            />
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <h1 className="font-dotgothic text-2xl md:text-3xl text-black">
                  Assi Jumao-as
                </h1>
                <p className="text-sm md:text-base text-neutral-500">
                  Aspiring Full Stack Developer
                </p>
              </div>

              <p
                className="max-w-xl text-sm leading-loose text-neutral-600"
                style={{ textAlign: "justify" }}
              >
                {BIO}
              </p>

              <div className="flex gap-3 mt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="border border-black rounded-full px-5 py-2 text-sm text-black hover:bg-black hover:text-white transition-colors"
                >
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="border border-black rounded-full px-5 py-2 text-sm text-black hover:bg-black hover:text-white transition-colors"
                >
                  Get In Touch
                </a>
              </div>

              <div className="flex gap-4 mt-1">
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-black hover:text-neutral-500 transition-colors"
                >
                  <GithubLogo size={22} weight="regular" />
                </a>
                <a
                  href="https://linkedin.com/in/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-black hover:text-neutral-500 transition-colors"
                >
                  <LinkedinLogo size={22} weight="regular" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}