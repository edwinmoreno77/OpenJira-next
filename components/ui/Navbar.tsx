import { useContext } from "react";
import {
  AppBar,
  IconButton,
  Link,
  Toolbar,
  Typography,
  FormControlLabel,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { UIContext } from "../../context/ui/UIContext";
import NextLink from "next/link";

import { MaterialUISwitch } from "@/utils/materialUISwitch";

export const Navbar = () => {
  const { openSidemenu, iluminationOpen, ilumination } = useContext(UIContext);

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar
        sx={{
          marginBottom: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Toolbar>
          <IconButton onClick={openSidemenu} size="large" edge="start">
            <MenuOutlinedIcon />
          </IconButton>
          <NextLink href="/" passHref>
            <Typography variant="h6" color="white">
              {/* <Link underline="hover" color="white"> */}
              OpenJira
              {/* </Link> */}
            </Typography>
          </NextLink>
        </Toolbar>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          onClick={() => iluminationOpen(ilumination)}
          label
        />
      </Toolbar>
    </AppBar>
  );
};
