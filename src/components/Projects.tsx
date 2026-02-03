import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  mentor: string;
  period: string;
  description: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Infant & Maternal Health in Latinx Populations",
    mentor: "Dr. Janardhan Mydam, Humboldt Park Health",
    period: "Aug 2024 - Present",
    description:
      "Using CDC data to study predictors of maternal and infant health outcomes in Latinx communities. Presented findings at PAS and AAP.",
    tags: ["Python", "R", "SAS", "Public Health"],
  },
  {
    title: "Melanoma Image Classification",
    mentor: "Dr. Edwin Solares, UC San Diego",
    period: "Jul - Aug 2024",
    description:
      "Compared CNN architectures for melanoma detection. Best model outperformed the median healthcare worker in diagnostic accuracy.",
    tags: ["PyTorch", "Computer Vision", "Deep Learning"],
  },
  {
    title: "NLP for Low-Resource Languages",
    mentor: "Dr. Ndapa Nakashole, UC San Diego",
    period: "Mar - Jun 2024",
    description:
      "Fine-tuned mBERT and PEGASUS with custom tokenization for low-resource languages including Telugu, Pidgin, and Swahili.",
    tags: ["NLP", "mBERT", "PEGASUS", "Multilingual"],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative flex h-[100svh] flex-col justify-center border-t border-border px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="reveal">
          <p className="prompt text-base text-muted-foreground">projects --research</p>
        </div>

        <div className="mt-8 grid gap-6 stagger md:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="reveal border border-border bg-card/30 p-5 transition-colors hover:border-primary/20"
            >
              <span className="text-[12px] uppercase tracking-[0.15em] text-muted-foreground">
                {project.period}
              </span>

              <h3 className="mt-3 text-lg font-medium leading-snug text-foreground">
                {project.title}
              </h3>
              <p className="mt-1 text-[12px] text-muted-foreground">
                <span className="text-primary/60">Mentor:</span>{" "}
                {project.mentor}
              </p>

              <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-3">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-none border-border bg-transparent px-2 py-0 font-mono text-[11px] font-normal text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
