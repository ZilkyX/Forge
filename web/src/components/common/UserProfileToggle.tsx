import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogOut, Settings } from "lucide-react";
import { useClerk, useUser } from "@clerk/react";
import { Button } from "@base-ui/react/button";

const UserProfileToggle = () => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="rounded-full transition hover:scale-[1.03] lg:hidden">
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
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Button
            onClick={() => openUserProfile()}
            className="flex items-center gap-2"
          >
            <Settings className="h-4 w-4" />
            Manage Account
          </Button>
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
  );
};

export default UserProfileToggle;
