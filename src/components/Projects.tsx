import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Infant & Maternal Health in Latinx Populations",
    period: "Aug 2024 - Present",
    description:
      "Used CDC data to identify novel predictors of maternal and infant health outcomes in Latinx communities. Presented research findings at Pediatric Academic Societies and American Academy of Pediatrics.",
    tags: ["Python", "R", "SAS", "Public Health"],
  },
  {
    title: "Melanoma Image Classification",
    period: "Jul - Aug 2024",
    description:
      "Developed and trained custom image classification models for melanoma detection. Optimized models for performance on mobile platforms such as smartphones and tablets. Achieved diagnostic accuracy of >97%.",
    tags: ["PyTorch", "Computer Vision", "Deep Learning"],
  },
  {
    title: "NLP for Low-Resource Languages",
    period: "Mar - Jun 2024",
    description:
      "Fine-tuned and retrained LLM models (mBERT and PEGASUS) with custom encoders for low-resource languages. Achieved accuracy exceeding 70%, showing strong multilingual performance improvements.",
    tags: ["NLP", "mBERT", "PEGASUS", "Multilingual"],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border px-6 py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="reveal">
          <p className="prompt text-base text-muted-foreground">tree projects/</p>
        </div>

        <div className="mt-8 space-y-0 stagger">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="reveal border-t border-border py-4 first:border-t-0"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-medium text-foreground">
                  {project.title}
                </h3>
                <span className="text-[13px] tracking-wide text-muted-foreground">
                  {project.period}
                </span>
              </div>

              <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-2.5 flex flex-wrap gap-1.5">
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
