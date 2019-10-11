import React from 'react';
import { MDBNav, MDBNavItem, MDBNavLink} from 'mdbreact';

const MenuView = (props) => {
    return (
        <nav className="main-nav">
            <figure className="main-nav__logo">
                <img src="" alt="logo"/>
            </figure>
            <MDBNav className="flex-column">
                <MDBNavItem>
                    <MDBNavLink active to="test">Test</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="test1">Test 1</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="test1">Test 2</MDBNavLink>
                </MDBNavItem>
            </MDBNav>
        </nav>
    )
}

export default MenuView;