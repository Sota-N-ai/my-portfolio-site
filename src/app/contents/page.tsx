import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { CONTENTS } from "@/lib/constants";

export default function Contents() {
  return (
    <>
      {/* Hero */}
      <section className="h-[50vh] md:h-[60vh] bg-deep-black flex flex-col items-center justify-center text-off-white px-6 pt-16">
        <FadeIn className="text-center">
          <p className="text-gold text-xs tracking-widest uppercase mb-4">
            Contents
          </p>
          <h1 className="text-4xl md:text-5xl font-light">Contents</h1>
        </FadeIn>
      </section>

      {/* Contents Grid */}
      <section className="py-24 px-6 bg-beige">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-3">
              Links
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-deep-black">
              コンテンツ
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTENTS.map((content, i) => (
              <FadeIn key={i} delay={i * 0.15} className="h-full">
                <Link
                  href={content.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full flex flex-col bg-white border border-charcoal/10 shadow-sm p-8 hover:border-gold/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    {content.icon === "blog" ? (
                      <Image
                        src="/blog-logo.png"
                        alt="人コマブログ"
                        width={140}
                        height={40}
                        className="h-10 w-auto object-contain"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-charcoal/10">
                        <Image
                          src="/profile.jpeg"
                          alt={content.title}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-deep-black mb-3">
                    {content.title}
                  </h3>
                  <p className="text-charcoal/60 text-xs leading-relaxed">
                    {content.description}
                  </p>
                  <p className="text-gold text-xs mt-auto pt-4 inline-block group-hover:translate-x-1 transition-transform duration-300">
                    外部リンク →
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
