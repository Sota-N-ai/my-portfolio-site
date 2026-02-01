import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-deep-black text-off-white/60 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-off-white text-sm font-semibold tracking-widest mb-1">
            Sota.N
          </p>
          <p className="text-xs">不完全でも、挑戦し続ける</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-off-white/40 hover:text-gold transition-colors duration-300 text-xs tracking-wider"
              aria-label={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <p className="text-xs text-off-white/30">
          © 2026 Sota.N. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
