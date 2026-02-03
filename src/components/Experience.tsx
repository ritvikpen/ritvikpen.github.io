import { Badge } from "@/components/ui/badge";

interface Role {
  company: string;
  title: string;
  period: string;
  summary: string;
  tags: string[];
}

const ROLES: Role[] = [
  {
    company: "UC San Francisco",
    title: "Data Science Specialist",
    period: "Oct 2025 - Present",
    summary: "Working on LLM evaluation for public health research. Built ML pipelines for survey modeling and an LLM-as-a-Judge scoring framework.",
    tags: ["LLMs", "NLP", "Public Health"],
  },
  {
    company: "UC San Diego",
    title: "Research Data Analyst",
    period: "Jul 2022 - Dec 2024",
    summary: "Analyzed 100K+ participant datasets for Opium Use Disorder risk factors. Also worked on proteomic analysis for immunological research.",
    tags: ["Python", "R", "Bioinformatics"],
  },
  {
    company: "Kaiser Permanente",
    title: "Data Engineering Intern",
    period: "Jun - Sep 2023",
    summary: "Helped modernize EHR infrastructure for 8M+ patients. Automated legacy database migration using PySpark on Azure Databricks.",
    tags: ["PySpark", "SQL", "Azure"],
  },
  {
    company: "CAIDA",
    title: "Web Development Intern",
    period: "Jan 2023 - Dec 2024",
    summary: "Maintained a research site with 10K+ monthly visitors. Added REST API integrations and improved site accessibility.",
    tags: ["JavaScript", "HUGO", "REST APIs"],
  },
  {
    company: "NonExomics",
    title: "Data Engineering Intern",
    period: "Mar - Sep 2022",
    summary: "Built genomic analysis pipelines on AWS to find non-exomic regions linked to carcinogenesis.",
    tags: ["Python", "AWS", "Genomics"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative flex h-[100svh] flex-col justify-center border-t border-border px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="reveal">
          <p className="prompt text-base text-muted-foreground">experience --all</p>
        </div>

        <div className="mt-8 space-y-0 stagger">
          {ROLES.map((role) => (
            <div
              key={role.company + role.title}
              className="reveal border-t border-border py-4 first:border-t-0"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-medium text-foreground">
                  {role.title}
                  <span className="ml-2 text-sm font-normal text-primary">
                    {role.company}
                  </span>
                </h3>
                <span className="text-[13px] tracking-wide text-muted-foreground">
                  {role.period}
                </span>
              </div>

              <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                {role.summary}
              </p>

              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {role.tags.map((tag) => (
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
