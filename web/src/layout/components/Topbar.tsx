import { useUser } from "@clerk/react";
import { Flame } from "lucide-react";

import ThemeToggle from "../../components/common/ThemeToggle";
import NotificationDropMenu from "@/pages/dashboard/components/NotificationDropMenu";
import UserProfileToggle from "@/components/common/UserProfileToggle";

const Topbar = () => {
  const { user } = useUser();

  const hour = new Date().getHours();

  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <header className="z-40 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6">
      <div className="flex h-14 items-center justify-between rounded-2xl border border-border/70 bg-background/75 px-3 shadow-sm backdrop-blur-xl sm:h-16 sm:px-5">
        <div className="min-w-0">
          <h1 className="truncate text-base font-semibold tracking-tight sm:text-lg">
            <span className="max-[380px]:hidden">{greeting}, </span>
            {user?.firstName || "Athlete"}
          </h1>

          <div className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm max-[420px]:hidden">
            <Flame className="h-3.5 w-3.5 text-primary" />
            <span>12-day streak</span>
          </div>
        </div>

        <div className="ml-3 flex shrink-0 items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <NotificationDropMenu />
          <UserProfileToggle />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
