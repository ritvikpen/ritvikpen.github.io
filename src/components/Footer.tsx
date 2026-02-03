import { Mail, Github, Linkedin, ChevronUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <a
          href="#hero"
          className="text-muted-foreground/50 transition-colors hover:text-primary"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5 bounce-up" />
        </a>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
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
      </div>
    </footer>
  );
}
