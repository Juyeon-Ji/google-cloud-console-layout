import React from "react";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import useRequest from "../../hooks/UseRequest";
import ListView from "../../components/common/Contents/ListView";

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
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );

  console.log(response);

  return (
    <main className={classes.content}>
      {response ? <ListView dataList={response.data} /> : <></>}
    </main>
  );
}
export default Clusters;
