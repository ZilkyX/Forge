import { Check, Monitor, Moon, Palette, PaletteIcon, Sun } from "lucide-react";

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

import { useTheme } from "next-themes";
import { useThemePalette } from "@/providers/ThemePaletteProvider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { palette, setPalette } = useThemePalette();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-xl"
          >
            <PaletteIcon className="h-5 w-5" />
          </Button>
        }
      />

      <DropdownMenuContent
        align="end"
        className="w-64 rounded-2xl border  p-2 shadow-2xl"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            <Palette className="h-4 w-4 text-primary" />
            Appearance
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={() => setTheme("light")}
            className="flex items-center justify-between rounded-xl px-3 py-2.5"
          >
            <div className="flex items-center gap-3">
              <Sun className="h-4 w-4" />
              <span>Light</span>
            </div>

            {theme === "light" && (
              <Check className="h-4 w-4 text-emerald-400" />
            )}
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setTheme("dark")}
            className="flex items-center justify-between rounded-xl px-3 py-2.5"
          >
            <div className="flex items-center gap-3">
              <Moon className="h-4 w-4" />
              <span>Dark</span>
            </div>

            {theme === "dark" && <Check className="h-4 w-4 text-emerald-400" />}
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setTheme("system")}
            className="flex items-center justify-between rounded-xl px-3 py-2.5"
          >
            <div className="flex items-center gap-3">
              <Monitor className="h-4 w-4" />
              <span>System</span>
            </div>

            {theme === "system" && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Accent Color
          </DropdownMenuLabel>

          <div className="grid grid-cols-4 gap-3 px-3 pb-3 pt-2">
            <button
              type="button"
              onClick={() => setPalette("emerald")}
              className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition ${
                palette === "emerald"
                  ? "border-white"
                  : "border-transparent hover:border-zinc-600"
              }`}
            >
              <span className="h-6 w-6 rounded-full bg-emerald-500" />
              {palette === "emerald" && (
                <Check className="absolute h-3.5 w-3.5 text-white" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setPalette("crimson")}
              className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition ${
                palette === "crimson"
                  ? "border-white"
                  : "border-transparent hover:border-zinc-600"
              }`}
            >
              <span className="h-6 w-6 rounded-full bg-red-500" />
              {palette === "crimson" && (
                <Check className="absolute h-3.5 w-3.5 text-white" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setPalette("ocean")}
              className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition ${
                palette === "ocean"
                  ? "border-white"
                  : "border-transparent hover:border-zinc-600"
              }`}
            >
              <span className="h-6 w-6 rounded-full bg-blue-500" />
              {palette === "ocean" && (
                <Check className="absolute h-3.5 w-3.5 text-white" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setPalette("purple")}
              className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition ${
                palette === "purple"
                  ? "border-white"
                  : "border-transparent hover:border-zinc-600"
              }`}
            >
              <span className="h-6 w-6 rounded-full bg-violet-500" />
              {palette === "purple" && (
                <Check className="absolute h-3.5 w-3.5 text-white" />
              )}
            </button>
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
