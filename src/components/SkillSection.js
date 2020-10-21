import React from "react";
import Skill from "../components/Skills";
import { v4 as uuid } from "uuid";

function SkillSection() {
  const img1 = require("../images/html5.png");
  const img2 = require("../images/css3.png");
  const img3 = require("../images/javascript.png");
  const img4 = require("../images/bootstrap4.png");
  const img5 = require("../images/react.png");
  const img6 = require("../images/flask.png");
  const img7 = require("../images/mysql.png");
  const img8 = require("../images/python.png");
  const skills = [
    {
      id: 1,
      name: "HTML 5",
      imageUrl: img1,
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 2,
      title: "Project 2",
      imageUrl: img2,
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 3,
      name: "HTML 5",
      imageUrl: img3,
      starsTotal: 3,
      starsActive: 1,
    },
    {
      id: 4,
      name: "HTML 5",
      imageUrl: img4,
      starsTotal: 3,
      starsActive: 1,
    },
    {
      id: 5,
      name: "HTML 5",
      imageUrl: img5,
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 6,
      name: "HTML 5",
      imageUrl: img6,
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 7,
      name: "HTML 5",
      imageUrl: img7,
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 8,
      name: "HTML 5",
      imageUrl: img8,
      starsTotal: 3,
      starsActive: 2,
    },
  ];
  const finalSkillRow = [];
  for (let i = 0; i < 2; i++) {
    let skillRow = skills.slice(i * 4, (i + 1) * 4);
    console.log(skillRow);
    finalSkillRow.push(
      <div key={uuid()} className="d-flex justify-content-around py-3">
        {skillRow.map((skills) => (
          <Skill key={uuid()} skills={skills} />
        ))}
      </div>
    );
  }
  return (
    // <!-- Technology stack  -->
    <div className="bg-light w-100">
      <div className="container text-center py-5">
        <h1 className="font-weight-light">
          <span className="text-info">Technology</span> stack
        </h1>
        <div className="lead pb-5">
          I design, develop and deliver with these weapons
        </div>
        {finalSkillRow}
      </div>
    </div>
  );
}
export default SkillSection;
