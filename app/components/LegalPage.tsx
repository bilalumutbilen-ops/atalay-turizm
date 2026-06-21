import Link from "next/link";

type Section = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: Section[];
};

export default function LegalPage({
  eyebrow,
  title,
  description,
  sections,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-24 pt-44 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#E00000]">
          {eyebrow}
        </p>

        <h1 className="mt-5 text-5xl font-black leading-tight tracking-[-0.055em] md:text-7xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65">
          {description}
        </p>

        <div className="mt-14 space-y-6">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl"
            >
              <h2 className="text-2xl font-black text-white">
                {section.title}
              </h2>

              <div className="mt-5 space-y-4 text-base leading-8 text-white/65">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/iletisim"
            className="inline-flex rounded-lg bg-[#C40000] px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-[#990000]"
          >
            İletişime Dön
          </Link>
        </div>
      </div>
    </main>
  );
}
