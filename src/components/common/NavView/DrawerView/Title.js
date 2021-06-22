import React from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
  })
);

function Title() {
  const classes = useStyles();
  return <div className={classes.toolbar}></div>;
}
export default Title;
