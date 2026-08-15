import { EnvelopeSimple } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border border-neutral-200 rounded-2xl px-8 py-10 md:px-12 md:py-12 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-center">
            <EnvelopeSimple
              size={28}
              weight="regular"
              className="text-black"
            />

            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Let&apos;s talk
            </h2>

            <p className="max-w-md text-sm leading-loose text-neutral-600">
              Have a project in mind or just want to say hello? My inbox is
              always open.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="border border-black rounded-full px-5 py-2 text-sm text-black hover:bg-black hover:text-white transition-colors mt-2"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}