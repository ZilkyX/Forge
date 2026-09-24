import { useClerk, useUser } from "@clerk/react";
import { Bell, Settings, LogOut, User, Flame } from "lucide-react";
import { NavLink } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "./ThemeToggle";

const Topbar = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  const hour = new Date().getHours();

  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <header className="sticky top-0 z-40 px-4 py-4 lg:px-6">
      <div className="flex h-16 items-center justify-between rounded-2xl border border-border/70 bg-background/75 px-5 shadow-sm backdrop-blur-xl">
        {/* Left */}
        <div className="space-y-0.5">
          <h1 className="text-lg font-semibold tracking-tight">
            {greeting}, {user?.firstName || "Athlete"} 👋
          </h1>

          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Flame className="h-3.5 w-3.5 text-orange-400" />
            <span>12-day streak</span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Notifications */}
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/60 transition hover:bg-accent">
            <Bell className="h-4.5 w-4.5" />
            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-primary" />
          </button>

          {/* Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="rounded-full transition hover:scale-[1.03]">
                <img
                  src={user?.imageUrl}
                  alt={user?.fullName || "User"}
                  className="h-10 w-10 rounded-full border border-border object-cover"
                />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-64 rounded-2xl border-border/70 p-2"
            >
              <div className="flex items-center gap-3 rounded-xl p-2">
                <img
                  src={user?.imageUrl}
                  alt={user?.fullName || "User"}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div className="min-w-0">
                  <p className="truncate font-medium">{user?.fullName}</p>
                  <p className="truncate text-sm text-muted-foreground">
                    @{user?.username}
                  </p>
                </div>
              </div>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <NavLink to="/app/profile" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </NavLink>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <NavLink to="/app/settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </NavLink>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={() => signOut({ redirectUrl: "/" })}
                className="flex items-center gap-2 text-red-500 focus:text-red-500"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
