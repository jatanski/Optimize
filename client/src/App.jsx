import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import MainView from './pages/MainView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FirstPage}></Route>
        <Route path="/home" exact component={MainView}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
