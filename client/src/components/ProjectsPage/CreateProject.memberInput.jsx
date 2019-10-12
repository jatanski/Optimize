import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

const MemberInput = ({ addUserToList, id, name }) => {
  return (
    <div class="choose__full" style={{ display: "flex" }}>
      <input id={id} type="checkbox" onChange={addUserToList} />
      <p className="choose__user" id="userName">{name}</p>
      <MDBDropdown>
        <MDBDropdownToggle caret className="dropdownbutton" color="none">
          Assign role
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
