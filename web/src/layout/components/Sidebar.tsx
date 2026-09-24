import { useClerk } from "@clerk/react";
import {
  Home,
  Dumbbell,
  BookOpen,
  BarChart3,
  User,
  UserGroup,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", icon: Home, to: "/app" },
  { label: "Workouts", icon: Dumbbell, to: "/app/workouts" },
  { label: "Exercise Library", icon: BookOpen, to: "/app/exercises" },
  { label: "Progress", icon: BarChart3, to: "/app/progress" },
  { label: "Community", icon: UserGroup, to: "/app/community" },
  { label: "Profile", icon: User, to: "/app/profile" },
];

const Sidebar = () => {
  const { signOut } = useClerk();
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-border bg-card">
      <div className="border-b border-border px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10">
            <img src="/logo/ForgeLogo.png" alt="Forge Logo" />
          </div>

          <div>
            <h1 className="text-lg font-bold">Forge</h1>
            <p className="text-xs text-muted-foreground">Train smarter</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === "/app"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`
              }
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-border p-4">
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    </aside>
  );
};

export default Sidebar;
