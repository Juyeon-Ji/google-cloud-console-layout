import React from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      minHeight: "64px",
      textAlign: "center",
    },
  })
);

function Title() {
  const classes = useStyles();
  return (
    <Toolbar>
      <Typography variant="h6" noWrap>
        Kubernetes Engine
      </Typography>
    </Toolbar>
  );
}
export default Title;
