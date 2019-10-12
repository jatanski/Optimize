import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import MemberInput from "./CreateProject.memberInput";

const Form = ({
  createProject,
  addUserToList,
  addRolesToList,
  listOfUsers,
  handleInputChange
}) => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <div className="grey-text">
              <MDBInput
                label="Project name"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                id="teamName"
                onChange={handleInputChange}
              />
              <p>Choose your team</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {listOfUsers.map(user => {
                return (
                  <MemberInput
                    key={user._id}
                    id={user._id}
                    name={user.name}
                    addUserToList={addUserToList}
                    addRolesToList={addRolesToList}
                  ></MemberInput>
                );
              })}
            </div>
            <div className="text-center">
              <MDBBtn onClick={createProject}>Create Project</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Form;
