import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import ThemeToggle from "./ThemeToggle";
import ShinyText from "@/components/reactbits/ShinyText";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Exercises", href: "/exercises", internal: true },
  { label: "About", href: "#about" },
  { label: "Community", href: "#community" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex size-8">
            <img src="/logo/ForgeLogo.png" alt="Forge Logo" />
          </div>
          <ShinyText
            className="text-xl font-bold tracking-tight"
            text="FORGE"
            speed={2}
            delay={0}
            color="var(--primary)"
            shineColor="var(--foreground)"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={true}
            disabled={false}
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) =>
            link.internal ? (
              <Link
                key={link.label}
                to={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ),
          )}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:scale-[1.02] hover:shadow-primary/40">
                Start Free
              </button>
            </SignUpButton>
          </Show>

          <Show when="signed-in">
            <Link
              to="/app"
              className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:scale-[1.02]"
            >
              Open App
            </Link>

            <UserButton />
          </Show>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 text-muted-foreground transition hover:bg-accent hover:text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {/* Mobile Drawer */}
      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-5 px-6 py-5">
          {/* Navigation */}
          <div className="space-y-1">
            {NAV_LINKS.map((link) =>
              link.internal ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>

          {/* Appearance Card */}
          <div className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Appearance
                </p>
                <p className="text-xs text-muted-foreground">
                  Theme & accent color
                </p>
              </div>

              <ThemeToggle />
            </div>
          </div>

          {/* Authentication */}
          <div className="rounded-2xl border border-border bg-card p-4">
            <Show when="signed-out">
              <div className="space-y-3">
                <SignInButton mode="modal">
                  <button className="w-full rounded-xl border border-border py-3 text-sm font-medium text-foreground transition hover:bg-accent">
                    Sign In
                  </button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <button className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:scale-[1.01]">
                    Start Free
                  </button>
                </SignUpButton>
              </div>
            </Show>

            <Show when="signed-in">
              <div className="flex items-center justify-between">
                <Link
                  to="/app"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20"
                >
                  Open App
                </Link>

                <UserButton />
              </div>
            </Show>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
