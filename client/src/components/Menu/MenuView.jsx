import React from 'react';
import { MDBNav, MDBNavItem, MDBNavLink} from 'mdbreact';
import { withRouter } from 'react-router';

const MenuView = (props) => {
    return (
        <nav className="main-nav">
            <figure className="main-nav__logo">
                <img src="" alt="logo"/>
            </figure>
            <MDBNav className="flex-column">
                <MDBNavItem>
                    <MDBNavLink active to={props.match.url + '/test'}>Test</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to={props.match.url + '/single'}>Single post view</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to={props.match.url + '/test2'}>Test 2</MDBNavLink>
                </MDBNavItem>
            </MDBNav>
        </nav>
    )
}

export default withRouter(MenuView);