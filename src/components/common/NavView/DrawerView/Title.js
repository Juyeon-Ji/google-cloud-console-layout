import React from "react";

import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

import KubernetesIcon from "@material-ui/icons/Widgets";

export default function Title() {
  return (
    <Toolbar>
      <KubernetesIcon />
      <Typography noWrap>{"Kubernetes Engine"}</Typography>
    </Toolbar>
  );
}
