import React from "react";

import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

import KubernetesIcon from "@material-ui/icons/Widgets";
import { Box } from "@material-ui/core";

export default function Title() {
  let title = "Kubernetes Engine";
  return (
    <Toolbar>
      <KubernetesIcon />
      <Box ml={1}>
        <Typography>{title}</Typography>
      </Box>
    </Toolbar>
  );
}
