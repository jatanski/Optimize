import React from 'react';
import { Route, Switch } from "react-router-dom";
import Test from '../Test/Test';
import { withRouter } from "react-router";
import SinglePostPage from '../../pages/SinglePostPage';
import MainView from "../../pages/MainView";
import AddThread from "../../pages/AddThread";

const MainContentView = (props) => {
    return (
        <div className="main-content">
            <div className="main-content__top-bar">
                NAZWA WIDOKU
            </div>
            <main className="main-content__switch">
                <Switch>
                    <Route path={props.match.url + '/test'} component={Test} />
                    <Route path={props.match.url + '/addThread'} component={AddThread} />
                    <Route path={props.match.url + '/single'} component={SinglePostPage} />
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