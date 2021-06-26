import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedItemState } from "../../../../recoil/atom/drawer/selectedItem";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const menu = [
  {
    id: "clusters",
    text: "Clusters",
    url: "/kubernetes/clusters",
  },
  {
    id: "workloads",
    text: "Workloads",
    url: "/kubernetes/workloads",
  },
  {
    id: "services_n_ingress",
    text: "Services & Ingress",
    url: "/kubernetes/services_n_ingress",
  },
  {
    id: "applications",
    text: "Applications",
    url: "/kubernetes/applications",
  },
  {
    id: "configuration",
    text: "Configuration",
    url: "/kubernetes/configuration",
  },
  {
    id: "storage",
    text: "Storage",
    url: "/kubernetes/storage",
  },
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

  const useStyles = makeStyles((theme) =>
    createStyles({
      link: {
        textDecoration: "none",
      },
      text: {
        color: "black",
      },
    })
  );

  const classes = useStyles();
  return (
    <List>
      {menu.map(({ icon, url, text, id }, index) => (
        <Link to={url} key={"link_" + id + index} className={classes.link}>
          <ListItem
            button
            key={"list_" + id + index}
            selected={selectedItem === text}
            onClick={() => {
              setSelectedItem(text);
            }}
          >
            <ListItemText primary={text} className={classes.text} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
export default Contents;
