import React from "react";

import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import { useRecoilState } from "recoil";
import { drawerOpenState } from "../../../recoil/atom/drawer/drawerOpen";

import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import DrawerView from "../NavView/DrawerView";

const drawerWidth = 240;

const useStyles = makeStyles(function (theme) {
  theme.breakpoints.values.sm = 768;
  return createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
  });
});

function NavBar(props) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useRecoilState(drawerOpenState);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const theme = useTheme();
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={drawerOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <DrawerView />
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
          <DrawerView />
        </Drawer>
      </Hidden>
    </nav>
  );
}
export default NavBar;
