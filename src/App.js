import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import "./App.css";

const Hatspage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
