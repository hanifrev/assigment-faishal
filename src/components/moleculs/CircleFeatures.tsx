import React from "react";
import CircleGradient from "../atoms/CircleGradient";
import GradientText from "../atoms/GradientText";

interface FeatProps {
  text: string;
  text2?: string;
  classNames?: string;
}

const CircleFeatures: React.FC<FeatProps> = ({ text, text2 }) => {
  return (
    <CircleGradient
      text={
        <span className="flex flex-col gap-2 ">
          <GradientText text={text} classNames="feature-gradient-text" />
          <GradientText
            text={text2}
            classNames="feature-gradient-text hidden md:block !font-medium !text-2xl !opacity-60"
          />
        </span>
      }
    />
  );
};

export default CircleFeatures;
