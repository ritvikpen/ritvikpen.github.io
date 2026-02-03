import { Badge } from "@/components/ui/badge";

const COURSES = [
  "Machine Learning",
  "Statistical NLP",
  "Algorithms",
  "Advanced Data Structures",
  "Software Tools & Techniques",
  "Biological Databases",
  "Bioinformatics Algorithms",
] as const;

export function Education() {
  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal mb-16 flex items-end gap-6">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-primary">
            04 &mdash; Education
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="reveal border border-border bg-card/40 p-8 sm:p-12">
          {/* University + date */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-medium text-foreground sm:text-3xl lg:text-4xl">
                University of California, San Diego
              </h3>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                La Jolla, CA
              </p>
            </div>
            <span className="font-mono text-[11px] tracking-wide text-muted-foreground whitespace-nowrap">
              Sep 2021 &mdash; Dec 2024
            </span>
          </div>

          {/* Degree details */}
          <div className="mt-8 grid gap-6 sm:grid-cols-[2fr_1fr]">
            <div className="space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="h-[2px] w-4 bg-primary" />
                <p className="font-display text-lg font-medium text-foreground">
                  B.S. in Computer Science
                </p>
              </div>
              <p className="ml-7 text-muted-foreground">
                Specialization in Bioinformatics
              </p>
              <p className="ml-7 text-muted-foreground">
                Minor in Biology
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-[2px] w-4 mt-3 bg-primary" />
              <div>
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  GPA
                </p>
                <p className="font-display text-3xl font-semibold text-foreground">
                  3.7<span className="text-muted-foreground/50">/4.0</span>
                </p>
              </div>
            </div>
          </div>

          {/* Coursework */}
          <div className="mt-10 border-t border-border pt-8">
            <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {COURSES.map((course) => (
                <Badge
                  key={course}
                  variant="outline"
                  className="rounded-none border-border bg-transparent px-3 py-1 font-mono text-[10px] font-normal text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
