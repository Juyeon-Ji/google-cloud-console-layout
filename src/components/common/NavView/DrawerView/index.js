import Divider from "@material-ui/core/Divider";
import React from "react";

import Title from "./Title";
import Menu from "./Menu";

function DrawerView() {
  return (
    <div>
      <Title />
      <Divider />
      <Menu />
    </div>
  );
}
export default DrawerView;
