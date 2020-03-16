import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import store from "./store";
import * as URLPathConstant from "./URLPathConstant";
import NavBar from "./components/layout/NavBar";
import Welcome from "./components/layout/Welcome";
import Home from "./components/layout/Home";
import AddNewMobile from "./components/mobile/AddNewMobile";
import ShowAllMobiles from "./components/mobile/ShowAllMobiles";

// import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route
            exact
            path={URLPathConstant.ADD_NEW_MOBILE_URL_PATH}
            component={AddNewMobile}
          />
          <Route
            exact
            path={URLPathConstant.SHOW_ALL_MOBILES_URL_PATH}
            component={ShowAllMobiles}
          />
          <Route exact path={URLPathConstant.HOME_URL_PATH} component={Home} />
          <Route
            exact
            path={URLPathConstant.WELCOME_URL_PATH}
            component={Welcome}
          />
          <Redirect exact to={URLPathConstant.WELCOME_URL_PATH} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
