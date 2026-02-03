import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, ChevronDown } from "lucide-react";

const SKILLS = [
  "Python", "C++", "Java", "SQL", "R", "JavaScript",
  "PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "Spark",
  "React", "Node.js", "Docker",
  "Kubernetes", "AWS", "Azure",
  "Machine Learning", "NLP", "Computer Vision"
];

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[100svh] flex-col px-6 pt-20 pb-8 lg:px-8"
    >
      <div className="my-auto mx-auto w-full max-w-4xl">
        {/* Terminal prompt + name */}
        <div className="animate-in delay-1">
          <p className="prompt mb-3 text-base text-muted-foreground">whoami</p>
          <h1 className="mt-4 text-4xl font-medium leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Ritviksiddha Penchala
          </h1>
        </div>

        {/* Education and role with labels */}
        <div className="animate-in delay-2 mt-6 space-y-1">

          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            <span className="text-primary">Current Role:</span>{" "}
            Data Science Specialist @{" "}
            <span className="text-foreground">UC San Francisco</span>
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            <span className="text-primary">Education:</span>{" "}
            B.S. Computer Science{/* &amp; Bioinformatics*/},{" "}
            <span className="text-foreground">UC San Diego</span>
          </p>
          
        </div>

        {/* Quick contact with icons */}
        <div className="animate-in delay-3 mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-base text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            rpenchala@ucsd.edu
          </span>
          <a
            href="https://github.com/ritvikpen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Github className="h-4 w-4 text-primary" />
            ritvikpen
          </a>
          <a
            href="https://www.linkedin.com/in/ritvikpen/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Linkedin className="h-4 w-4 text-primary" />
            ritvikpen
          </a>
        </div>

        {/* Divider */}
        <div className="animate-in delay-4 mt-10 h-px w-full bg-border" />

        {/* Skills */}
        <div className="animate-in delay-4 mt-8">
          <p className="prompt mb-4 text-base text-muted-foreground">echo skills</p>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="rounded-none border-border bg-transparent px-3 py-1.5 font-mono text-[13px] font-normal text-foreground/70 transition-colors hover:border-primary hover:text-primary"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="animate-in delay-5 mt-8 h-px w-full bg-border" />

        {/* Resume */}
        <div className="animate-in delay-5 mt-8">
          <p className="prompt mb-3 text-base text-muted-foreground">view resume</p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base text-primary underline underline-offset-4 decoration-primary/40 transition-colors hover:text-foreground hover:decoration-foreground/40"
          >
            resume.pdf
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#experience"
        className="animate-in delay-5 mx-auto mt-8 hidden shrink-0 text-center text-muted-foreground/50 transition-colors hover:text-primary md:block"
      >
        <p className="text-[12px] uppercase tracking-[0.2em]">
          scroll
        </p>
        <ChevronDown className="mx-auto mt-2 h-5 w-5 bounce-down" />
      </a>
    </section>
  );
}
