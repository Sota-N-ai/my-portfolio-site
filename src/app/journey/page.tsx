import FadeIn from "@/components/FadeIn";
import TimelineSection from "@/components/TimelineSection";
import { TIMELINE, SKILLS } from "@/lib/constants";

export default function Journey() {
  return (
    <>
      {/* Hero */}
      <section className="h-[50vh] md:h-[60vh] bg-deep-black flex flex-col items-center justify-center text-off-white px-6 pt-16">
        <FadeIn className="text-center">
          <p className="text-gold text-xs tracking-widest uppercase mb-4">
            Journey
          </p>
          <h1 className="text-4xl md:text-5xl font-light">My Journey</h1>
        </FadeIn>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-3">
              Timeline
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-deep-black">
              これまでの道のり
            </h2>
          </FadeIn>

          <TimelineSection events={TIMELINE} />
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-6 bg-beige">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-3">
              Skills
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-deep-black">
              スキル・経験
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, i) => (
              <FadeIn
                key={i}
                delay={i * 0.1}
                className="bg-off-white p-6 border border-charcoal/10"
              >
                <h3 className="text-sm font-semibold text-deep-black mb-4 pb-3 border-b border-charcoal/10">
                  {skill.category}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-xs text-charcoal/60 flex items-start gap-2"
                    >
                      <span className="text-gold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
