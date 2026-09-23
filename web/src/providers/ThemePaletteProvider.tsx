import { createContext, useContext, useEffect, useState } from "react";

type ThemePalette = "emerald" | "crimson" | "ocean" | "purple";

type ThemePaletteContextType = {
  palette: ThemePalette;
  setPalette: (palette: ThemePalette) => void;
};

const ThemePaletteContext = createContext<ThemePaletteContextType | null>(null);

const THEMES: ThemePalette[] = ["emerald", "crimson", "ocean", "purple"];

export function ThemePaletteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [palette, setPalette] = useState<ThemePalette>("emerald");

  useEffect(() => {
    document.documentElement.classList.remove(
      ...THEMES.map((t) => `theme-${t}`),
    );

    document.documentElement.classList.add(`theme-${palette}`);
  }, [palette]);

  return (
    <ThemePaletteContext.Provider value={{ palette, setPalette }}>
      {children}
    </ThemePaletteContext.Provider>
  );
}

export function useThemePalette() {
  const context = useContext(ThemePaletteContext);

  if (!context) {
    throw new Error("useThemePalette must be used inside ThemePaletteProvider");
  }

  return context;
}
