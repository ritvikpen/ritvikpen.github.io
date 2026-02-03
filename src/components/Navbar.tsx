import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Volunteering", href: "#volunteering" },
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
        scrolled || open ? "nav-glass border-b border-border" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-4xl items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <a
          href="#hero"
          className="font-mono text-base font-medium text-foreground transition-colors hover:text-primary"
        >
          <span className="text-primary">&gt;</span>rp
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
          <button
            className="flex flex-col gap-[5px] p-2"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block h-[1.5px] w-5 bg-foreground transition-all duration-200 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-primary transition-all duration-200 ${
                open ? "w-5 -translate-y-[3.5px] -rotate-45" : "w-3"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`mx-auto max-w-4xl overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-60 pb-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[13px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
