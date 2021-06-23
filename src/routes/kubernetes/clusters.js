import React from "react";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import useRequest from "../../hooks/UseRequest";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

function Clusters() {
  const classes = useStyles();

  const [response, loading, error] = useRequest(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  console.log(response);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <p>{response ? JSON.stringify(response.data) : ""}</p>
    </main>
  );
}
export default Clusters;
