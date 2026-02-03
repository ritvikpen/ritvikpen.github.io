import { Badge } from "@/components/ui/badge";

interface VolunteerRole {
  organization: string;
  title: string;
  period: string;
  summary: string;
  tags: string[];
}

const VOLUNTEER_ROLES: VolunteerRole[] = [
  {
    organization: "Undergraduate Bioinformatics Club @ UCSD",
    title: "Board Member",
    period: "Oct 2021 - Jun 2024",
    summary: "Served as Workshop Chair and Webmaster. Designed and taught curriculum to introduce students to Bioinformatics. Also tasked with the maintanence and continual updates of the club website.",
    tags: ["Teaching", "Web Development", "Bioinformatics"],
  },
  {
    organization: "Saltman Quarterly @ UCSD",
    title: "Webmaster",
    period: "Oct 2022 - Jun 2024",
    summary: "Maintained the Saltman Quarterly Online website and developed new features. Coordinated with the Web Team to tackle assigned tasks and develop publication timelines for new student articles.",
    tags: ["Web Development", "Science Communication"],
  },
];

export function Volunteering() {
  return (
    <section
      id="volunteering"
      className="border-t border-border px-6 py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="reveal">
          <p className="prompt text-base text-muted-foreground">ls volunteering</p>
        </div>

        <div className="mt-8 space-y-0 stagger">
          {VOLUNTEER_ROLES.map((role) => (
            <div
              key={role.organization + role.title}
              className="reveal border-t border-border py-4 first:border-t-0"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-medium text-foreground">
                  {role.title}
                  <span className="ml-2 text-sm font-normal text-primary">
                    {role.organization}
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
