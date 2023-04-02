import { useContext } from "react";
import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { UIContext } from "../../context/ui/UIContext";
import NextLink from "next/link";

export const Navbar = () => {
  const { openSidemenu } = useContext(UIContext);

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton onClick={openSidemenu} size="large" edge="start">
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href={"/"} passHref>
          {/* <Link underline="none" color="white"> */}
          <Typography variant="h6" color="white">
            OpenJira
          </Typography>
          {/* </Link> */}
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
