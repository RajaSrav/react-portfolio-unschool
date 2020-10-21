import React from "react";
import { v4 as uuid } from "uuid";
import RecommendationCard from "../components/RecommendationCard";

function RecommendationSection() {
  const recommendatins = [
    {
      id: 1,
      name: "Person 1",
      company: "MST at APSSDC company",
      designation: "MST",
      message: "He is a good Trainer",
    },
    {
      id: 2,
      name: "Person 2",
      company: "APSSDC company",
      designation: "JSD",
      message: "He is an excellent developer and excellent trainer",
    },
    {
      id: 3,
      name: "Person 3",
      company: "APSSDC company",
      designation: "TCD",
      message: "He is a lazy person",
    },
    {
      id: 4,
      name: "Person 4",
      company: "APSSDC company",
      designation: "TST",
      message: "He get's things done so quickly",
    },
  ];
  return (
    <div className="container-fluid my-5">
      <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
        {recommendatins.map((recommendatin) => (
          <RecommendationCard key={uuid()} recommendatin={recommendatin} />
        ))}
      </div>
    </div>
  );
}
export default RecommendationSection;
