import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Welcome from "./components/layout/Welcome";
// import './App.css';

function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Redirect exact to="/" />
        </Switch>
      </Router>
  );
}

export default App;
