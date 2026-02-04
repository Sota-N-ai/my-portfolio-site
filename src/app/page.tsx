import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { PROFILE, CHERISHED_WORDS, MOTTOS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero with Garden */}
      <HeroSection />

      {/* Profile */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <FadeIn className="flex-shrink-0">
            <Image
              src="/profile.jpeg"
              alt="Sota.N プロフィール画像"
              width={224}
              height={224}
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-top"
              priority
            />
          </FadeIn>
          <FadeIn delay={0.15} className="text-center md:text-left">
            <p className="text-gold text-xs tracking-widest uppercase mb-3">
              Profile
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-deep-black mb-1">
              {PROFILE.name}
            </h2>
            <p className="text-charcoal/50 text-sm mb-4">{PROFILE.nameJa}</p>
            <p className="text-charcoal/80 text-sm leading-relaxed">
              {PROFILE.bio}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mottos — 動かないもの */}
      <section className="relative py-24 px-6 bg-beige overflow-hidden">
        <div className="absolute top-12 right-8 w-40 h-40 rounded-full bg-stone/8 blur-sm" />
        <div className="absolute bottom-8 left-12 w-28 h-28 rounded-full bg-stone/6 blur-sm" />
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-3">
              Motto
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-deep-black">
              座右の銘
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOTTOS.map((motto, i) => (
              <FadeIn
                key={i}
                delay={i * 0.15}
                className="border-l-2 border-gold pl-6 py-4"
              >
                <p className="text-charcoal text-base leading-relaxed">
                  「{motto.text}」
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Cherished Words */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-3">
              Cherished Words
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-deep-black">
              大切にしている言葉
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CHERISHED_WORDS.map((item, i) => (
              <FadeIn
                key={i}
                delay={i * 0.15}
                className="bg-beige p-8 border border-charcoal/10 hover:border-gold/40 transition-colors duration-300"
              >
                <p className="text-deep-black text-base font-light leading-relaxed mb-3">
                  「{item.word}」
                </p>
                {item.meaning && (
                  <p className="text-charcoal/60 text-xs leading-relaxed">
                    → {item.meaning}
                  </p>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-beige">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-light text-deep-black mb-8">
              もっと知りたい？
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/about"
                className="px-8 py-3 bg-deep-black text-off-white text-xs tracking-widest uppercase hover:bg-charcoal transition-colors duration-300"
              >
                About Me
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-deep-black text-deep-black text-xs tracking-widest uppercase hover:bg-deep-black hover:text-off-white transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
