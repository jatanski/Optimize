import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

const MemberInput = ({ addUserToList, id, name }) => {
  return (
    <div style={{ display: "flex" }}>
      <input id={id} type="checkbox" onChange={addUserToList} />
      <p id="userName">{name}</p>
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          Choose role
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem>Frontend</MDBDropdownItem>
          <MDBDropdownItem>Backend</MDBDropdownItem>
          <MDBDropdownItem>UX/UI</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem>Specialist</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
};

export default MemberInput;
