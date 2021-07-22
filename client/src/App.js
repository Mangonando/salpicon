import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
    <h1>Hello!</h1>
    <div>
    <Navbar />
    </div>
      <Switch>
        {/* <Route exact path="/" component={} /> */}
      </Switch>
    </div>
  );
}

export default App;
