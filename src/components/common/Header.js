import React from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useRecoilState, useRecoilValue } from "recoil";
import { drawerOpenState } from "../../recoil/atom/drawer/drawerOpen";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import { selectedItemState } from "../../recoil/atom/drawer/selectedItem";
import Divider from "@material-ui/core/Divider";

const drawerWidth = 240;

const useStyles = makeStyles(function (theme) {
  theme.breakpoints.values.sm = 768;
  return createStyles({
    appBar: {
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
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
  });
});

export default function Header() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useRecoilState(drawerOpenState);
  const selectedItem = useRecoilValue(selectedItemState);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar elevation={0} color={"inherit"} className={classes.appBar}>
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
          <Typography noWrap>{selectedItem}</Typography>
        </Toolbar>
      </AppBar>
      <Divider color={"black"} />
    </>
  );
}
