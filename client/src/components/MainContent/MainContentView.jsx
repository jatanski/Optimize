import React from 'react';
import { Route, Switch } from "react-router-dom";
import Test from '../Test/Test';
import { withRouter } from "react-router";
import MainView from "../../pages/MainView";

const MainContentView = (props) => {
    console.log(props.match.url);

    return (
        <div className="main-content">
            <div className="main-content__top-bar">
                Name view
            </div>
            <main className="main-content__switch">
                <Switch>
                    <Route path={props.match.url + '/test'} component={Test} />
                    <Route path="/" component={MainView} />

                    {/* <Route path="/" exact component={FirstView} />
                    <Route path="/login" component={FirstView} />
                    <Route path="/home" component={MainView} />
                    <Route path="/messages" component={MessagesView} />
                    <Route path="/payment" component={ClientPayments} />
                    <Route path="/administration" component={AdminPanel} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/subscription" component={FirstLogin} /> */}
                    <Route render={() => <h1>Error 404</h1>} />
                </Switch>
            </main>
        </div>
    )
}

export default withRouter(MainContentView);