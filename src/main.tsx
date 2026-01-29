import "@fontsource-variable/bricolage-grotesque/index.css";
import "@fontsource-variable/dm-sans/index.css";

import "./theme/style.css";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouting from "./AppRouting.tsx";
import { getTheme } from "./theme/defaultTheme.ts";
import { palette } from "./theme/palette.ts";

// biome-ignore lint/style/noNonNullAssertion: root element is always present
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={getTheme("light", palette)}>
				<CssBaseline />
				<AppRouting />
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>,
);
