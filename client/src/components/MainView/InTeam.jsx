import React, { Component } from "react";
import { MDBContainer} from "mdbreact";
import Sticker from "./Sticker";

class InTeam extends Component {
  constructor (props) {
    super(props);
    this.state = ({
      user: this.props.user,
      threads: this.props.user.teams.threads,
      stickers: []
    });
  }

  componentDidMount = () => {
    this.createStickers();
  }

  createStickers = () => {
    const stickers = this.state.threads.map((thread, idx) => {
      return (<Sticker {...thread} key={idx} />)
    })

    this.setState({
      stickers: stickers
    })
  }

  render = () => {
    return (
        <MDBContainer className="stickers-container">
          {this.state.stickers}
        </MDBContainer>
    );
  };
}

export default InTeam;