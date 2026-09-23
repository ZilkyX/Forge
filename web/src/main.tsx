import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/react";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { ThemePaletteProvider } from "./providers/ThemePaletteProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <ClerkProvider>
    <BrowserRouter>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ThemePaletteProvider>
              <App />
            </ThemePaletteProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </StrictMode>
    </BrowserRouter>
  </ClerkProvider>,
);
