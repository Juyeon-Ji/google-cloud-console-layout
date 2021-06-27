import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Header from "./components/common/Header";
import NavView from "./components/common/NavView/index";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Clusters from "./routes/kubernetes/clusters";
import Workloads from "./routes/kubernetes/workloads";
import Applications from "./routes/kubernetes/applications";
import Configuration from "./routes/kubernetes/configuration";
import Storage from "./routes/kubernetes/storage";
import ObjectBrowser from "./routes/kubernetes/object_browser";
import MigrateToContainers from "./routes/kubernetes/migrate_to_containers";
import ServicesNIngress from "./routes/kubernetes/services_n_ingress";
import { RecoilRoot } from "recoil";

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
    <RecoilRoot>
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <Header />
          <NavView />
          <Switch>
            <Route path="/kubernetes/clusters" component={Clusters} />
            <Route path="/kubernetes/workloads" component={Workloads} />
            <Route
              path="/kubernetes/services_n_ingress"
              component={ServicesNIngress}
            />
            <Route path="/kubernetes/applications" component={Applications} />
            <Route path="/kubernetes/configuration" component={Configuration} />
            <Route exact path="/kubernetes/storage" component={Storage} />
            <Route
              path="/kubernetes/object_browser"
              component={ObjectBrowser}
            />
            <Route
              path="/kubernetes/migrate_to_containers"
              component={MigrateToContainers}
            />
            <Redirect exact path="/" to="/kubernetes/clusters" />
          </Switch>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
