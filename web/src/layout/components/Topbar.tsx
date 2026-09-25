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
    <header className="sticky top-0 z-40 px-4 mt-4 lg:px-6">
      <div className="flex h-16 items-center justify-between rounded-2xl border border-border/70 bg-background/75 px-5 shadow-sm backdrop-blur-xl">
        <div className="space-y-0.5">
          <h1 className="text-lg font-semibold tracking-tight">
            {greeting}, {user?.firstName || "Athlete"}
          </h1>

          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Flame className="h-3.5 w-3.5 text-primary" />
            <span>12-day streak</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <NotificationDropMenu />
          <UserProfileToggle />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
