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
    summary: "Investigating large language models in the context of public health and healthcare. Assessed models for policy biases in a simulated pandemic. Implemented an LLM-as-a-Judge pipeline for automated scoring of model reasoning in public health tasks.",
    tags: ["LLMs", "Machine Learning", "Health Data Science"],
  },
  {
    company: "UC San Diego",
    title: "Research Data Analyst",
    period: "Jul 2022 - Dec 2024",
    summary: "Developed Machine Learning models to analyze an 100K+ participant dataset for Opioid Use Disorder risk factors. Also, worked on proteomic analysis pipelines for immunological research. Presented findings at the 7th International Conference on Microbiome Engineering (AIChE).",
    tags: ["Python", "R", "Machine Learning", "Bioinformatics"],
  },
  {
    company: "CAIDA",
    title: "Web Development Intern",
    period: "Jan 2023 - Dec 2024",
    summary: "Maintained and enhanced the CAIDA research website, improving accessibility and performance for 10K+ monthly visitors. Developed responsive UI features using JavaScript, HUGO, and jQuery for dynamic data-driven content. Implemented REST API integrations to modernize static pages.",
    tags: ["JavaScript", "HUGO", "jQuery", "REST APIs"],
  },
  {
    company: "Kaiser Permanente",
    title: "Data Engineering Intern",
    period: "Jun - Sep 2023",
    summary: "Contributed to the modernization of an Electronic Health Record system serving 8M+ patients. Automated large-scale data migration from legacy systems using PySpark and SQL on Azure Databricks. Designed Python testing scripts to ensure data quality, validation, and pipeline integrity.",
    tags: ["PySpark", "SQL", "Azure Databricks", "Python"],
  },
  {
    company: "NonExomics",
    title: "Software Engineering Intern",
    period: "Mar - Sep 2022",
    summary: "Built scalable genomic analysis pipelines in Python and Bash to identify non-exomic variants linked to cancer. Leveraged AWS-based distributed computing for high-throughput genomic processing. Contributed to early-stage infrastructure supporting large-scale cancer genomics research.",
    tags: ["Python", "Bash", "AWS", "Genomics"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border px-6 py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="reveal">
          <p className="prompt text-base text-muted-foreground">ls ~/experiences</p>
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
