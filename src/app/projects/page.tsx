import FadeIn from "@/components/FadeIn";
import { PROJECTS } from "@/lib/constants";

const STATUS_STYLES: Record<
  string,
  { label: string; className: string }
> = {
  ongoing: { label: "進行中", className: "bg-gold/20 text-gold" },
  completed: { label: "完了", className: "bg-green-100 text-green-700" },
  planning: { label: "企画中", className: "bg-charcoal/10 text-charcoal/60" },
};

export default function Projects() {
  return (
    <>
      {/* Hero */}
      <section className="h-[50vh] md:h-[60vh] bg-deep-black flex flex-col items-center justify-center text-off-white px-6 pt-16">
        <FadeIn className="text-center">
          <p className="text-gold text-xs tracking-widest uppercase mb-4">
            Projects
          </p>
          <h1 className="text-4xl md:text-5xl font-light">Projects</h1>
        </FadeIn>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-3">
              All
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-deep-black">
              プロジェクト一覧
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => {
              const status = STATUS_STYLES[project.status];
              return (
                <FadeIn key={project.id} delay={i * 0.08} scale>
                  <div
                    className={`bg-off-white border border-charcoal/10 p-6 hover:border-gold/40 transition-colors duration-300 flex flex-col h-full ${
                      project.status === "planning" ? "opacity-60" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${status.className}`}
                      >
                        {status.label}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-deep-black mb-3">
                      {project.title}
                    </h3>
                    <p className="text-charcoal/60 text-xs leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-xs bg-charcoal/10 text-charcoal/60 px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
