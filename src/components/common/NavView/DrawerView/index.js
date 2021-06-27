import Divider from "@material-ui/core/Divider";
import React from "react";

import Title from "./Title";
import Menu from "./Menu";

export default function DrawerView() {
  return (
    <div>
      <Title />
      <Divider />
      <Menu />
    </div>
  );
}
