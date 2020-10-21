import React from "react";
function ProjectCard(props) {
  const { title, content, imageurl } = props.project;
  return (
    <div className="card shadow h-100">
      <img
        className="card-img-top project"
        src={imageurl} // imageurl
        alt={title}
      />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{content}</p>
        <a href="/" className="stretched-link">
          Project
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
