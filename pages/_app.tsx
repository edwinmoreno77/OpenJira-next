import "@/styles/globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import { UIProvider } from "../context/ui";
import { EntriesProvider } from "../context/entries";
import { darkTheme, lightTheme } from "../themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  );
}
