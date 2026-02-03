import { Separator } from "@/components/ui/separator";

const CONTACT_LINKS = [
  { label: "Email", value: "rpenchala@ucsd.edu" },
  { label: "Phone", value: "(408) 981-9355" },
  { label: "LinkedIn", value: "linkedin.com/in/ritviksiddha-penchala" },
  { label: "GitHub", value: "github.com/ritvikpen" },
] as const;

export function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-16 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <div className="reveal">
          <p className="prompt text-sm text-muted-foreground">contact --info</p>
        </div>

        <div className="reveal mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {CONTACT_LINKS.map((link) => (
            <div key={link.label}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {link.label}
              </p>
              <p className="mt-1.5 text-sm text-foreground">
                {link.value}
              </p>
            </div>
          ))}
        </div>

        <Separator className="mt-12 bg-border" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            &copy; {new Date().getFullYear()} Ritviksiddha Penchala
          </p>
          <p className="text-[11px] text-muted-foreground/40">
            Built with intention.
          </p>
        </div>
      </div>
    </section>
  );
}
