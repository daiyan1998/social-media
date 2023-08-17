import {
  AccountBox,
  Group,
  Home,
  Inbox,
  Pages,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const sidebarLists = [
  {
    title: "Homepage",
    icon: <Home />,
  },
  {
    title: "Pages",
    icon: <Pages />,
  },
  {
    title: "Groups",
    icon: <Group />,
  },
  {
    title: "Marketplace",
    icon: <Storefront />,
  },
  {
    title: "Friends",
    icon: <Person />,
  },
  {
    title: "Settings",
    icon: <Settings />,
  },
  {
    title: "Profile",
    icon: <AccountBox />,
  },
];

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        {sidebarLists.map(({ title, icon }) => (
          <ListItem key={title} disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
