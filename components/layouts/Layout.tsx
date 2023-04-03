import { FC, PropsWithChildren, useContext } from "react";
import { Box } from "@mui/material";
import Head from "next/head";
import { Navbar, Sidebar } from "../ui";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { UIContext } from "@/context/ui";
import { darkTheme, lightTheme } from "@/themes";

interface Props extends PropsWithChildren {
  title?: string;
}

export const Layouts: FC<Props> = ({ title = "openJira", children }) => {
  const { ilumination } = useContext(UIContext);
  return (
    <ThemeProvider theme={ilumination ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ flexFlow: 1 }}>
        <Head>
          <title>{title}</title>
        </Head>
        <Navbar />
        <Sidebar />
        <Box sx={{ padding: "10px 20px" }}>{children}</Box>
      </Box>
    </ThemeProvider>
  );
};
