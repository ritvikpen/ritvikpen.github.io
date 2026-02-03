import { Badge } from "@/components/ui/badge";

const CATEGORIES = [
  {
    title: "Languages",
    items: ["Python", "C++", "SQL", "R", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "ML & Data",
    items: ["PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "SciPy", "Seaborn", "Spark"],
  },
  {
    title: "Web & Cloud",
    items: ["React", "Node.js", "jQuery", "HUGO", "Docker", "Kubernetes", "AWS", "Azure", "Databricks"],
  },
  {
    title: "Domains",
    items: ["Machine Learning", "NLP", "Computer Vision", "Bioinformatics", "Genomics", "Public Health", "Data Engineering"],
  },
] as const;

export function Skills() {
  return (
    <section id="skills" className="relative py-24 dot-grid lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal mb-16 flex items-end gap-6">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-primary">
            03 &mdash; Skills
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h2 className="reveal font-display text-4xl font-light tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Tools &amp; <span className="italic text-primary">expertise</span>
        </h2>

        <div className="mt-16 grid gap-12 stagger sm:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <div key={cat.title} className="reveal">
              <h3 className="mb-5 font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="rounded-none border-border bg-card/50 px-4 py-2 font-mono text-[11px] font-normal text-foreground/80 transition-all duration-200 hover:border-primary hover:text-primary"
                  >
                    {item}
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
