import { useClerk } from "@clerk/react";
import {
  Home,
  Dumbbell,
  BookOpen,
  BarChart3,
  User,
  Users,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ShinyText from "@/components/reactbits/ShinyText";

const navItems = [
  { label: "Home", icon: Home, to: "/app" },
  { label: "Workouts", icon: Dumbbell, to: "/app/workouts" },
  { label: "Exercises", icon: BookOpen, to: "/app/exercises" },
  { label: "Progress", icon: BarChart3, to: "/app/progress" },
  { label: "Community", icon: Users, to: "/app/community" },
  { label: "Profile", icon: User, to: "/app/profile" },
];

const Sidebar = () => {
  const { signOut } = useClerk();

  return (
    <>
      <aside className="hidden h-screen w-72 shrink-0 border-r border-border/50 bg-card/80 backdrop-blur-xl lg:flex lg:flex-col">
        <div className="border-b border-border/50 px-6 py-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl">
              <img
                src="/logo/ForgeLogo.png"
                alt="Forge Logo"
                className="h-8 w-8"
              />
            </div>

            <div>
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
              <p className="text-xs text-muted-foreground">Train smarter</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/app"}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground hover:translate-x-1"
                    }`
                  }
                >
                  <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-border/50 p-2">
          <button
            onClick={() => signOut({ redirectUrl: "/" })}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed inset-x-4 bottom-4 z-50 lg:hidden">
        <div className="flex items-center justify-around rounded-2xl border border-border/60 bg-background/90 p-2 shadow-2xl backdrop-blur-xl">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === "/app"}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 rounded-xl px-3 py-2 transition-all ${
                    isActive
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground"
                  }`
                }
              >
                <Icon className="h-5 w-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
