import React, { useState } from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

const MemberInput = ({ addUserToList, addRolesToList, id, name }) => {
  const [value, setValue] = useState("Choose role");

  const onClickFunc = e => {
    setValue(e.target.id);
    addRolesToList(e);
  };
  return (
    <div class="choose__full" style={{ display: "flex" }}>
      <input id={id} type="checkbox" onChange={addUserToList} />
      <p className="choose__user" id="userName">{name}</p>
      <MDBDropdown>

        <MDBDropdownToggle caret className="dropdownbutton" color="none" value="Assign role">
          Assign role
          {value}
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem
            id="Frontend"
            onClick={onClickFunc}
            onChange={addUserToList}
          >
            Frontend
          </MDBDropdownItem>
          <MDBDropdownItem
            id="Backend"
            onClick={onClickFunc}
            onChange={addUserToList}
          >
            Backend
          </MDBDropdownItem>
          <MDBDropdownItem
            id="UX/UI"
            onClick={onClickFunc}
            onChange={addUserToList}
          >
            UX/UI
          </MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem
            id="Specialist"
            onClick={onClickFunc}
            onChange={addUserToList}
          >
            Specialist
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
};

export default MemberInput;
