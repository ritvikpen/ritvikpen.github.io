import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Sun, Moon } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-8 transition-all duration-300 ${
        scrolled ? "nav-glass border-b border-border" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-4xl items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <a
          href="#hero"
          className="text-base font-medium text-foreground transition-colors hover:text-primary"
        >
          R<span className="text-primary">.</span>P<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="flex flex-col gap-[5px] p-2" aria-label="Menu">
                <span className="block h-[1.5px] w-5 bg-foreground" />
                <span className="block h-[1.5px] w-3 bg-primary" />
                <span className="block h-[1.5px] w-5 bg-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 border-border bg-background">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="mt-16 flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
