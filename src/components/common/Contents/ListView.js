import React from "react";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

function Row(postId, id, name, email, body) {
  return (
    <TableRow key={postId}>
      <TableCell component="th" align="middle" scope="row">
        {postId}
      </TableCell>
      <TableCell align="middle">{id}</TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell align="left">{body}</TableCell>
    </TableRow>
  );
}

export default function ListView(props) {
  const dataList = props.dataList;
  const classes = useStyles();
  return (
    <>
      <div className={classes.appBarSpacer} />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>{Row("postId", "id", "name", "email", "body")}</TableHead>
          <TableBody>
            {dataList.map(({ postId, id, name, email, body }, index) =>
              Row(postId, id, name, email, body)
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
