import React, { Component } from "react";
import InTeam from "../components/MainView/InTeam";
import TeamLess from "../components/MainView/TeamLess";
import { MDBContainer } from "mdbreact";
import "../components/MainView/MainView.scss";

class MainView extends Component {
  state = { team: '' }

  render = () => {
    return (
      <MDBContainer fluid>
        { this.state.team ? <InTeam /> : <TeamLess /> }
      </MDBContainer>
    );
  };
}

export default MainView;