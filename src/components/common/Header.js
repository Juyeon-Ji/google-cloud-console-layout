import React from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useRecoilState } from "recoil";
import { drawerOpenState } from "../../recoil/atom/drawer/drawerOpen";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import { selectedItemState } from "../../recoil/atom/drawer/selectedItem";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      color: "black",
      backgroundColor: "white",
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
  })
);

function Header() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useRecoilState(drawerOpenState);
  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar className={classes.appBar}>
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
          {selectedItem}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
