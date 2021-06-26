import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import useRequest from "../../hooks/UseRequest";
import ListView from "../../components/common/Contents/ListView";

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,

    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function MigrateToContainers() {
  const classes = useStyles();
  const [response, loading, error] = useRequest(
    "https://jsonplaceholder.typicode.com/posts/8/comments"
  );

  return (
    <main className={classes.content}>
      {response ? <ListView dataList={response.data} /> : <></>}
    </main>
  );
}
