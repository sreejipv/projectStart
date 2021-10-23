import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import { Box, Hidden, makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import BusinessIcon from "@material-ui/icons/Business";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ListAltIcon from "@material-ui/icons/ListAlt";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import AssignmentIcon from "@material-ui/icons/Assignment";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import ChatIcon from "@material-ui/icons/Chat";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        <Link to="/customers" style={{ textDecoration: "none" }}>
          <ListItem button>
            <BusinessIcon />
            <Box pl={2} />
            <ListItemText primary="Customers" />
          </ListItem>
        </Link>

        <Link  to="/team" style={{ textDecoration: "none" }}>
          <ListItem button>
            <AccountBoxIcon />
            <Box pl={2} />
            <ListItemText primary="Team" />
          </ListItem>
        </Link>

        <ListItem button>
          <ReceiptIcon />
          <Box pl={2} />
          <ListItemText primary="Invoices" />
        </ListItem>

        <ListItem button>
          <ListAltIcon />
          <Box pl={2} />
          <ListItemText primary="Tasks" />
        </ListItem>

        <ListItem button>
          <BusinessCenterIcon />
          <Box pl={2} />
          <ListItemText primary="Deals" />
        </ListItem>

        <ListItem button>
          <AssignmentIcon />
          <Box pl={2} />
          <ListItemText primary="Projects" />
        </ListItem>

        <ListItem button>
          <FeaturedPlayListIcon />
          <Box pl={2} />
          <ListItemText primary="Company Profile" />
        </ListItem>

        <ListItem button>
          <ChatIcon />
          <Box pl={2} />
          <ListItemText primary="Support" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Heading
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
