import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import SinglePostPage from "../../pages/SinglePostPage";
import MainView from "../../pages/MainView";
import AddThread from "../../pages/AddThread";
import ProjectsPage from "../../pages/ProjectsPage";

const MainContentView = props => {
  return (
    <div className="main-content">
      <main className="main-content__switch">
        <Switch>
          <Route path={props.match.url + "/addThread"} component={AddThread} />
          <Route
            path={props.match.url + "/single"}
            component={SinglePostPage}
          />
          <Route
            path={props.match.url + "/projects"}
            component={ProjectsPage}
          ></Route>
          <Route path="/" component={MainView} />
          <Route render={() => <h1>Error 404</h1>} />
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(MainContentView);
