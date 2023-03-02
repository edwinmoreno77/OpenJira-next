import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Head from "next/head";
import { Navbar, Sidebar } from "../ui";

interface Props extends PropsWithChildren {
  title?: string;
}

export const Layouts: FC<Props> = ({ title = "openJira", children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
