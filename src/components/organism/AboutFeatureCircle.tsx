import React from "react";
import CircleFeatures from "../moleculs/CircleFeatures";

const AboutFeatureCircle = () => {
  const Feature = [
    { text1: "FAST", text2: "X2" },
    { text1: "QUALITY", text2: "A++" },
    { text1: "LOW PRICE", text2: "1/2" },
    { text1: "HIGH TECH", text2: "Gen AI" },
  ];
  return (
    <div className="flex flex-row justify-center">
      {Feature.map((item, index) => {
        return (
          <CircleFeatures text={item.text1} text2={item.text2} key={index} />
        );
      })}
    </div>
  );
};

export default AboutFeatureCircle;
