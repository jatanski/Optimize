import React from "react";
import CreateProject from "../components/ProjectsPage/CreateProject";

const ProjectsPage = () => {
  return (
    <React.Fragment>
      <div style={{marginBottom: '2rem'}} className="main-content__top-bar">Create Project</div>
      <CreateProject />;
    </React.Fragment>
  )
};

export default ProjectsPage;
