import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Bell,
  Clock,
  Heart,
  MessageCircle,
  UserPlus,
  Dumbbell,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: Heart,
    title: "Someone liked your workout",
    message: "Your Push Day workout received a new like.",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    icon: UserPlus,
    title: "New follower",
    message: "Alex started following you.",
    time: "15 min ago",
    unread: true,
  },
  {
    id: 3,
    icon: MessageCircle,
    title: "New comment",
    message: "“Great progress! Keep it up.”",
    time: "1 hour ago",
    unread: false,
  },
  {
    id: 4,
    icon: Dumbbell,
    title: "Workout completed",
    message: "Chest & Triceps has been logged.",
    time: "Today",
    unread: false,
  },

  {
    id: 4,
    icon: Dumbbell,
    title: "Workout completed",
    message: "Chest & Triceps has been logged.",
    time: "Today",
    unread: false,
  },
  {
    id: 4,
    icon: Dumbbell,
    title: "Workout completed",
    message: "Chest & Triceps has been logged.",
    time: "Today",
    unread: false,
  },
];

const NotificationDropMenu = () => {
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            className="relative h-10 w-10 rounded-xl bg-zinc-900 cursor-pointer"
          >
            <Bell className="h-5 w-5 text-zinc-300" />

            {unreadCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                {unreadCount}
              </span>
            )}
          </Button>
        }
      />

      <DropdownMenuContent
        align="end"
        className="w-80 rounded-2xl border p-0 shadow-2xl"
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <h3 className="font-semibold">Notifications</h3>
            <p className="text-xs text-zinc-400">
              {unreadCount} unread notifications
            </p>
          </div>

          <Button variant="ghost" className="h-8 px-2 text-xs text-primary">
            Mark all read
          </Button>
        </div>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-center gap-2 px-4 pt-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
            <Clock className="h-3.5 w-3.5" />
            Recently
          </DropdownMenuLabel>
          <ScrollArea className="h-80">
            {notifications.map((item) => {
              const Icon = item.icon;

              return (
                <DropdownMenuItem
                  key={item.id}
                  className="cursor-pointer rounded-none px-4 py-3 "
                >
                  <div className="flex w-full gap-3 ">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 ">
                      <Icon className="h-5 w-5 text-accent-foreground" />

                      {item.unread && (
                        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-primary" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-sm font-medium">
                          {item.title}
                        </p>

                        <span className="shrink-0 text-[11px] text-zinc-500">
                          {item.time}
                        </span>
                      </div>

                      <p className="mt-1 line-clamp-2 text-xs text-zinc-400">
                        {item.message}
                      </p>
                    </div>
                  </div>
                </DropdownMenuItem>
              );
            })}
          </ScrollArea>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <div className="p-2">
          <Button variant="ghost" className="w-full rounded-xl text-sm ">
            View all notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropMenu;
