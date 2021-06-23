import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { drawerOpenState } from "../../../../recoil/atom/drawer/drawerOpen";
import { selectedItemState } from "../../../../recoil/atom/drawer/selectedItem";

const menu = [
  { id: "clusters", text: "Clusters", url: "/kubernetes/clusters" },
  { id: "workloads", text: "Workloads", url: "/kubernetes/workloads" },
  {
    id: "services_n_ingress",
    text: "Services & Ingress",
    url: "/kubernetes/services_n_ingress",
  },
  { id: "applications", text: "Applications", url: "/kubernetes/applications" },
  {
    id: "configuration",
    text: "Configuration",
    url: "/kubernetes/configuration",
  },
  { id: "storage", text: "Storage", url: "/kubernetes/storage" },
  {
    id: "object_browser",
    text: "Object Browser",
    url: "/kubernetes/object_browser",
  },
  {
    id: "migrate_to_containers",
    text: "Migrate to containers",
    url: "/kubernetes/migrate_to_containers",
  },
];
function Contents() {
  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);

  return (
    <List>
      {menu.map(({ url, text, id }, index) => (
        <Link to={url}>
          <ListItem
            button
            key={text}
            onClick={() => {
              setSelectedItem(text);
            }}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
export default Contents;
