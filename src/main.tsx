import "@fontsource-variable/bricolage-grotesque/index.css";
import "@fontsource-variable/dm-sans/index.css";

import "./theme/style.css";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { getTheme } from "./theme/defaultTheme.ts";
import { palette } from "./theme/palette.ts";
import AppRouting from "./AppRouting.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={getTheme("light", palette)}>
        <CssBaseline />
        <AppRouting />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
