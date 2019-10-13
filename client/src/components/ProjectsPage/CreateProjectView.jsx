import React from "react";
import Form from "./CreateProject.form";
import "./createProject.scss";

const CreateProjectView = props => {
  return (
    <div className="createProjectView">
      <Form {...props}></Form>
    </div>
  );
};

export default CreateProjectView;
