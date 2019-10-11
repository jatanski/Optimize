import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FirstPage from "./pages/FirstPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FirstPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
