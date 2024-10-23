import React from "react";

interface TextProps {
  text: string | React.ReactNode;
  classNames?: string;
}

const GradientText: React.FC<TextProps> = ({ text, classNames }) => {
  return <div className={`gradient-text ${classNames}`}>{text}</div>;
};

export default GradientText;
