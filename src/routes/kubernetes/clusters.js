import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import useRequest from "../../hooks/UseRequest";
import ListView from "../../components/common/Contents/ListView";

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function Clusters() {
  const classes = useStyles();

  const [response, loading, error] = useRequest(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );

  return (
    <main className={classes.content}>
      {response ? <ListView dataList={response.data} /> : <></>}
    </main>
  );
}
