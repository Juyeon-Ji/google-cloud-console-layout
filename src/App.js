import "./App.css";

import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Header from "./components/common/Header/index";
import NavView from "./components/common/NavView/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contents from "./routes/contents";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);
function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <NavView />
        <Switch>
          <Route exact path="/" component={Contents} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
