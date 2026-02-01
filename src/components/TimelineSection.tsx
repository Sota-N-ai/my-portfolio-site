"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import type { TimelineEvent } from "@/lib/types";

export default function TimelineSection({
  events,
}: {
  events: TimelineEvent[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isTouchRef = useRef(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    isTouchRef.current = e.pointerType === "touch";
  };

  const handleClick = (i: number) => {
    if (isTouchRef.current) {
      setActiveIndex(activeIndex === i ? null : i);
    }
  };

  const handleMouseEnter = (i: number) => {
    if (!isTouchRef.current) setActiveIndex(i);
  };

  const handleMouseLeave = () => {
    if (!isTouchRef.current) setActiveIndex(null);
  };

  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-charcoal/20 md:-translate-x-1/2" />

      <div className="space-y-8">
        {events.map((event, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div
              className={`relative flex items-start ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              onPointerDown={handlePointerDown}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-5/12 cursor-pointer select-none ${
                  i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                }`}
                onClick={() => handleClick(i)}
              >
                <p className="text-gold text-xs font-semibold tracking-wider mb-1">
                  {event.year}
                </p>
                <h3
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    activeIndex === i ? "text-gold" : "text-deep-black"
                  }`}
                >
                  {event.title}
                </h3>

                {/* Mobile: expand below title */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
                    activeIndex === i
                      ? "max-h-40 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-charcoal/60 text-xs leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div
                className={`absolute left-4 md:left-1/2 top-1.5 w-3 h-3 bg-gold rounded-full border-2 border-off-white -translate-x-1/2 transition-transform duration-200 ${
                  activeIndex === i ? "scale-125" : ""
                }`}
              />

              {/* Desktop: popup on opposite side */}
              <div
                className={`hidden md:flex md:w-5/12 items-start ${
                  i % 2 === 0 ? "pl-8" : "pr-8 justify-end"
                }`}
              >
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="bg-deep-black text-off-white px-4 py-3 text-xs leading-relaxed shadow-lg max-w-[240px]"
                    >
                      {event.description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
