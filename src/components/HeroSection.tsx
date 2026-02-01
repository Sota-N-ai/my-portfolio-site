"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { PROFILE } from "@/lib/constants";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const imgScale = useTransform(scrollY, [0, 800], [1, 1.2]);
  const contentOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const contentY = useTransform(scrollY, [0, 350], [0, -30]);
  const indicatorOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Garden Background with Parallax */}
      <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
        <Image
          src="/garden.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-deep-black/55" />

      {/* Bottom gradient → smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-off-white to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-3xl mx-auto"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <p className="text-gold text-xs tracking-widest uppercase mb-6">
          Welcome
        </p>
        <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight mb-6 bg-gradient-to-r from-off-white to-gold bg-clip-text text-transparent">
          {PROFILE.tagline}
        </h1>
        <p className="text-off-white/80 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          {PROFILE.bio}
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        style={{ opacity: indicatorOpacity }}
      >
        <span className="text-off-white/30 text-xs tracking-widest">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
