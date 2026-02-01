import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="h-[50vh] md:h-[60vh] bg-deep-black flex flex-col items-center justify-center text-off-white px-6 pt-16">
        <FadeIn className="text-center max-w-2xl">
          <p className="text-gold text-xs tracking-widest uppercase mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-light mb-4">Contact</h1>
          <p className="text-off-white/50 text-sm">
            お問い合わせ・ご連絡はこちらから
          </p>
        </FadeIn>
      </section>

      {/* Form */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      {/* SNS */}
      <section className="py-16 px-6 bg-beige">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="text-gold text-xs tracking-widest uppercase mb-3">
              SNS
            </p>
            <h2 className="text-xl font-light text-deep-black mb-8">
              SNSでもつながりましょう
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-charcoal/20 text-charcoal/60 text-xs tracking-wider hover:border-gold hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
