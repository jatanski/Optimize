import React from 'react';
import { MDBNav, MDBNavItem, MDBNavLink} from 'mdbreact';
import { withRouter } from 'react-router';

const MenuView = (props) => {
    return (
        <nav className="main-nav">
            <figure className="main-nav__logo">
                <h1 className="main-nav__name">optimize</h1>
            </figure>
            <MDBNav className="flex-column">
                <MDBNavItem>
                    <MDBNavLink active to={props.match.url + '/home'}><img src="/pulpit.png" width="35" height="100%"></img>Pulpit</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to={props.match.url + '/single'}>Single post view</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to={props.match.url + '/projects'}><img src="/team.png" width="35" height="100%"></img>Create project</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to={props.match.url + '/addThread'}><img src="/thread.png" width="35" height="100%"></img>Add thread</MDBNavLink>
                </MDBNavItem>
            </MDBNav>
        </nav>
    )
}

export default withRouter(MenuView);