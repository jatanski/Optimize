import React from "react";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { withRouter } from "react-router";

const MenuView = props => {
  return (
    <nav className="main-nav">
      <figure className="main-nav__logo">
        <h1 className="main-nav__name">optimize</h1>
      </figure>
      <MDBNav className="flex-column">
        <MDBNavItem>
          <MDBNavLink active to={props.match.url}>
            <img
              alt="icon of pulpit"
              src="/pulpit.png"
              width="35"
              height="100%"
            ></img>
            Pulpit
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to={props.match.url + "/projects"}>
            <img
              alt="icon of team"
              src="/team.png"
              width="35"
              height="100%"
            ></img>
            Create project
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to={props.match.url + "/addThread"}>
            <img
              alt="icon of thread"
              src="/thread.png"
              width="35"
              height="100%"
            ></img>
            Add thread
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
    </nav>
  );
};

export default withRouter(MenuView);
