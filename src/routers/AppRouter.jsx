import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
/**
 * Helpers
 */
import { DataContext } from "../context/DataProvider";

import LoginScreen from "../components/LoginScreen/LoginScreen";
import HomeScreen from "../components/HomeScreen/HomeScreen";
const AppRouter = () => {
  const { status } = useContext(DataContext);
  return (
    <Router>
      <div className={`${status.auth ? "homePage" : "authScreen"}`}>
        <Switch>
          {status.auth ? (
            <Route path="/home" component={HomeScreen} />
          ) : (
            <Route exact path="/login" component={LoginScreen} />
          )}

          <Redirect to={status.auth ? "/home/benefits" : "/login"} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
