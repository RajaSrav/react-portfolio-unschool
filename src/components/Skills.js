import React from "react";
import { v4 as uuid } from "uuid";

function Skills(props) {
  const { name, imageUrl, starsTotal, starsActive } = props.skills;
  const starList = [];
  for (let i = 0; i < starsTotal; i++) {
    if (i < starsActive) {
      starList.push(
        <span key={uuid()} className="text-info">
          ★
        </span>
      );
    } else {
      starList.push(<span key={uuid()}>★</span>);
    }
  }
  //   console.log(v4());
  return (
    <div>
      <img
        className="rounded-circle img-fluid"
        src={imageUrl}
        alt={name}
        style={{ width: "100px", height: "100px" }}
      />
      <div>{starList}</div>
    </div>
  );
}
export default Skills;
