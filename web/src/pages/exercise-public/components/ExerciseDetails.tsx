import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { ExerciseData, ExerciseLanguage } from "@/types/exercise.types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Languages } from "lucide-react";

interface ExerciseDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  exercise: ExerciseData | null;
}

const ExerciseDetails = ({ open, setOpen, exercise }: ExerciseDialogProps) => {
  const [language, setLanguage] = useState<ExerciseLanguage>("en");

  if (!exercise) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[96vw] max-w-none overflow-hidden rounded-3xl border border-border p-0 sm:max-w-5xl">
        <div className="grid max-h-[90dvh] grid-rows-[240px_1fr] lg:grid-cols-[1.2fr_0.8fr] lg:grid-rows-1">
          <div className="bg-black lg:sticky lg:top-0 lg:h-[90dvh]">
            <img
              src={exercise.gif_url}
              alt={exercise.name}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="overflow-y-auto">
            <div className="space-y-6 p-5 lg:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {exercise.category}
                </p>

                <DialogTitle className="mt-2 text-2xl font-bold leading-tight lg:text-3xl">
                  {exercise.name}
                </DialogTitle>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {exercise.target}
                  </span>

                  <span className="rounded-full border border-border px-3 py-1 text-xs">
                    {exercise.equipment}
                  </span>

                  <span className="rounded-full border border-border px-3 py-1 text-xs">
                    {exercise.body_part}
                  </span>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Instruction Language
                </label>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <button className="flex w-full items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm transition hover:border-primary">
                      <div className="flex items-center gap-2">
                        <Languages className="h-4 w-4 text-primary" />
                        <span>
                          {language === "en" && "🇺🇸 English"}
                          {language === "es" && "🇪🇸 Spanish"}
                          {language === "fr" && "🇫🇷 French"}
                          {language === "it" && "🇮🇹 Italian"}
                          {language === "ko" && "🇰🇷 Korean"}
                          {language === "zh" && "🇨🇳 Chinese"}
                          {language === "hi" && "🇮🇳 Hindi"}
                          {language === "pl" && "🇵🇱 Polish"}
                          {language === "ru" && "🇷🇺 Russian"}
                          {language === "tr" && "🇹🇷 Turkish"}
                        </span>
                      </div>
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-60">
                    <DropdownMenuItem onClick={() => setLanguage("en")}>
                      <div className="flex w-full items-center justify-between">
                        <span>🇺🇸 English</span>
                        {language === "en" && (
                          <Check className="h-4 w-4 text-primary" />
                        )}
                      </div>
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => setLanguage("es")}>
                      <div className="flex w-full items-center justify-between">
                        <span>🇪🇸 Spanish (Español)</span>
                        {language === "es" && (
                          <Check className="h-4 w-4 text-primary" />
                        )}
                      </div>
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => setLanguage("fr")}>
                      <div className="flex w-full items-center justify-between">
                        <span>🇫🇷 French (Français)</span>
                        {language === "fr" && (
                          <Check className="h-4 w-4 text-primary" />
                        )}
                      </div>
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => setLanguage("it")}>
                      <div className="flex w-full items-center justify-between">
                        <span>🇮🇹 Italian (Italiano)</span>
                        {language === "it" && (
                          <Check className="h-4 w-4 text-primary" />
                        )}
                      </div>
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => setLanguage("ko")}>
                      <div className="flex w-full items-center justify-between">
                        <span>🇰🇷 Korean (한국어)</span>
                        {language === "ko" && (
                          <Check className="h-4 w-4 text-primary" />
                        )}
                      </div>
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => setLanguage("zh")}>
                      <div className="flex w-full items-center justify-between">
                        <span>🇨🇳 Chinese (中文)</span>
                        {language === "zh" && (
                          <Check className="h-4 w-4 text-primary" />
                        )}
                      </div>
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => setLanguage("hi")}>
                      <div className="flex w-full items-center justify-between">
                        <span>🇮🇳 Hindi (हिन्दी)</span>
                        {language === "hi" && (
                          <Check className="h-4 w-4 text-primary" />
                        )}
                      </div>
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => setLanguage("pl")}>
                      <div className="flex w-full items-center justify-between">
                        <span>🇵🇱 Polish (Polski)</span>
                        {language === "pl" && (
                          <Check className="h-4 w-4 text-primary" />
                        )}
                      </div>
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => setLanguage("ru")}>
                      <div className="flex w-full items-center justify-between">
                        <span>🇷🇺 Russian (Русский)</span>
                        {language === "ru" && (
                          <Check className="h-4 w-4 text-primary" />
                        )}
                      </div>
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => setLanguage("tr")}>
                      <div className="flex w-full items-center justify-between">
                        <span>🇹🇷 Turkish (Türkçe)</span>
                        {language === "tr" && (
                          <Check className="h-4 w-4 text-primary" />
                        )}
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border bg-card p-4">
                  <p className="text-[11px] uppercase text-muted-foreground">
                    Primary
                  </p>

                  <p className="mt-1 font-medium capitalize">
                    {exercise.muscle_group}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-4">
                  <p className="text-[11px] uppercase text-muted-foreground">
                    Secondary
                  </p>

                  <p className="mt-1 font-medium capitalize">
                    {exercise.secondary_muscles.join(", ")}
                  </p>
                </div>
              </div>

              {/* Instructions */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">How to perform</h3>

                <div className="space-y-4">
                  {exercise.instruction_steps[language].map((step, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                        {index + 1}
                      </div>

                      <p className="pt-1 text-sm leading-6 text-foreground">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attribution */}
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground">
                  {exercise.attribution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExerciseDetails;
