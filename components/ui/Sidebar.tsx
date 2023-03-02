import Drawer from "@mui/material/Drawer";
import { useContext } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { ListItem, ListItemIcon, Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { UIContext } from "../../context/ui";

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];

export const Sidebar = () => {
  const { sidemenuOpen, closeSidemenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={closeSidemenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menú</Typography>
        </Box>
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <EmailOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <EmailOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
