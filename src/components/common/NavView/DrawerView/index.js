import Divider from "@material-ui/core/Divider";
import React from "react";
import Title from "./Title";
import Contents from "./Menu";

function DrawerView() {
  return (
    <div>
      <Title />
      <Divider />
      <Contents />
    </div>
  );
}
export default DrawerView;
