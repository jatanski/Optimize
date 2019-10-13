import React from "react";
import CreateProject from "../components/ProjectsPage/CreateProject";

const ProjectsPage = () => {
  return (
    <React.Fragment>
      <div className="main-content__top-bar margin-bottom">Create Project</div>
      <CreateProject />;
    </React.Fragment>
  );
};

export default ProjectsPage;
