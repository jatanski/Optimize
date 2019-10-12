import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import FirstPage from "./pages/FirstPage";
import Logged from "./pages/Logged";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FirstPage}></Route>
        <Route path="/home" component={Logged}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
