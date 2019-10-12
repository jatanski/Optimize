import React from "react";
import { Route, Switch } from "react-router-dom";
import Test from "../Test/Test";
import { withRouter } from "react-router";
import SinglePostPage from "../../pages/SinglePostPage";
import MainView from "../../pages/MainView";
import AddThread from "../../pages/AddThread";
import ProjectsPage from "../../pages/ProjectsPage";

const MainContentView = props => {
  console.log(props.match.url);
  return (
    <div className="main-content">
      <div className="main-content__top-bar">NAZWA WIDOKU</div>
      <main className="main-content__switch">
        <Switch>
          <Route path={props.match.url + "/test"} component={Test} />
          <Route path={props.match.url + "/addThread"} component={AddThread} />
          <Route
            path={props.match.url + "/single"}
            component={SinglePostPage}
          />
          <Route path="/" component={MainView} />
          <Route
            path={props.match.url + "/projects"}
            component={ProjectsPage}
          ></Route>
          <Route render={() => <h1>Error 404</h1>} />
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(MainContentView);
