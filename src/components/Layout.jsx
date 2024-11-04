import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import { format } from "date-fns";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

let drawerWidth = 240;

const menuItems = [
  {
    text: "My Notes",
    icon: <SubjectOutlinedIcon color="primary" />,
    path: "/",
  },
  {
    text: "Create Note",
    icon: <AddCircleOutlinedIcon color="primary" />,
    path: "/create",
  },
];

const sx = {
  page: (theme) => ({
    background: "#f9f9f9",
    width: "100%",
    padding: theme.spacing(3),
  }),
  drawer: {
    width: drawerWidth,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
    },
  },
  root: {
    display: "flex",
  },
  listItemBtn: {
    "&.Mui-selected": {
      bgcolor: "#f4f4f4",
    },
  },
  title: (theme) => ({ padding: theme.spacing(2) }),
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
  },
  toolbar: (theme) => theme.mixins.toolbar,
  date: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: 2,
  },
};

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box sx={sx.root}>
      {/* app bar */}
      <AppBar sx={sx.appbar} elevation={0}>
        <Toolbar>
          <Typography sx={sx.date}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar src="/public/mario-av.png" sx={sx.avatar} />
        </Toolbar>
      </AppBar>

      {/* side bar */}
      <Drawer variant="permanent" anchor="left" sx={sx.drawer}>
        <Box>
          <Typography variant="h5" sx={sx.title}>
            Ninja notes
          </Typography>
        </Box>
        <List>
          {menuItems.map((item) => {
            return (
              <ListItem
                key={item.text}
                disablePadding
                onClick={() => navigate(item.path)}
              >
                <ListItemButton
                  selected={location.pathname === item.path}
                  sx={sx.listItemBtn}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      <Box component="main" sx={sx.page}>
        <Box sx={sx.toolbar} />
        {/* <Toolbar />  either use this component or Box above with same styles as toolbar */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
