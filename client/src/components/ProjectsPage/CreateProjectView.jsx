import React from "react";
import Form from "./CreateProject.form";

const CreateProjectView = props => {
  return (
    <div className="createProjectView">
      <Form {...props}></Form>
    </div>
  );
};

export default CreateProjectView;
