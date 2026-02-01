import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import { VALUES, DREAM, WABISABI_PROJECT } from "@/lib/constants";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="h-[50vh] md:h-[60vh] bg-deep-black flex flex-col items-center justify-center text-off-white px-6 pt-16">
        <FadeIn className="text-center">
          <p className="text-gold text-xs tracking-widest uppercase mb-4">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-light">About Me</h1>
        </FadeIn>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-3">
              Story
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-deep-black">
              私の物語
            </h2>
          </FadeIn>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <FadeIn className="flex-shrink-0">
              <Image
                src="/profile.jpeg"
                alt="Sota.N"
                width={288}
                height={320}
                className="w-full md:w-72 h-64 md:h-80 object-cover object-top"
              />
            </FadeIn>
            <FadeIn delay={0.15} className="flex-1">
              <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
                1996年に東京で生まれ、両耳の軽度の聴力障害を持って育った。その中で「自分にできること」を常に考え続けてきた。
              </p>
              <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
                柔道を10年以上続けた経験から、「今その瞬間を全力で生き続けることの力」を学んだ。
              </p>
              <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
                引退後は、社会福祉を専攻し、障壁を乗り越えようとする人を支える世界を学んだ。
              </p>
              <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
                現在は、デジタルの力で地域を支えるためにとある通信インフラ会社の一員として勤務している。
              </p>
              <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
                2022年に生成AIと出会い、その可能性に衝撃を受けた。2023年にDX推進担当へ異動し、社内で生成AIを推進。3,000人以上に伝え、AI活用率を半年で33%から78%へと向上させた。
              </p>
              <p className="text-charcoal/80 text-sm leading-relaxed">
                2026年には、本業とは別に個人の取り組みとして「Wabisabi Project」を始めた。侘び寂びの精神を根拠にし、挑戦していく人々を支える世界のハブになることを目指している。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Detail */}
      <section className="py-24 px-6 bg-beige">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-3">
              Values
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-deep-black">
              大切にすること
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, i) => (
              <FadeIn
                key={i}
                delay={i * 0.15}
                className="bg-off-white p-8 border border-charcoal/10"
              >
                <div className="text-3xl mb-4">{value.emoji}</div>
                <h3 className="text-sm font-semibold text-deep-black mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal/60 text-xs leading-relaxed">
                  {value.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Dream */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-3">
              Dream
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-deep-black">
              夢・ビジョン
            </h2>
          </FadeIn>
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="text-charcoal text-base leading-relaxed mb-4">
              {DREAM.vision}
            </p>
            <div className="border-t border-charcoal/20 pt-6 mt-6">
              <p className="text-gold text-xs font-semibold tracking-wider mb-2">
                具体的なゴール
              </p>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                {DREAM.goal}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Wabisabi Project */}
      <section className="relative py-24 px-6 bg-deep-black text-off-white overflow-hidden">
        {/* Moss glow accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-moss/15 blur-3xl rounded-full" />
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-3">
              Project
            </p>
            <h2 className="text-2xl md:text-3xl font-light">
              Wabisabi Project
            </h2>
            <p className="text-off-white/50 text-sm mt-3">
              {WABISABI_PROJECT.tagline}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <FadeIn>
              <p className="text-gold text-xs tracking-widest uppercase mb-3">
                Mission
              </p>
              <p className="text-off-white/70 text-sm leading-relaxed">
                {WABISABI_PROJECT.mission}
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-gold text-xs tracking-widest uppercase mb-3">
                Vision
              </p>
              <p className="text-off-white/70 text-sm leading-relaxed">
                {WABISABI_PROJECT.vision}
              </p>
            </FadeIn>
          </div>

          <FadeIn>
            <p className="text-gold text-xs tracking-widest uppercase mb-6 text-center">
              Core Values
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {WABISABI_PROJECT.values.map((value, i) => (
                <div
                  key={i}
                  className="border border-off-white/10 p-6"
                >
                  <h4 className="text-off-white text-sm font-semibold mb-2">
                    {value.title}
                  </h4>
                  <p className="text-off-white/50 text-xs leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
