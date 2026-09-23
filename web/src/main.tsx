import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/react";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { ThemePaletteProvider } from "./providers/ThemePaletteProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ClerkProvider>
    <BrowserRouter>
      <StrictMode>
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
      </StrictMode>
    </BrowserRouter>
  </ClerkProvider>,
);
