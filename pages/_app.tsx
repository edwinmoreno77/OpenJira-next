import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

import { UIProvider } from "../context/ui";
import { EntriesProvider } from "../context/entries";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={2}>
      <EntriesProvider>
        <UIProvider>
          <Component {...pageProps} />
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  );
}
