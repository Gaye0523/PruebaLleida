import React from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "./routes/routes"
import { useStyle } from "./assest/style";
import { Grid } from "@material-ui/core";
import Navbar from "./components/NavBar/NavBar";

function App() {
  const classes = useStyle();

  return (
    <div className={classes.containerApp}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Switch>
            {Routes.map((route: any) => (
              <Route exact path={route.path} key={route.path}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
