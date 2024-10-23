import React from "react";

interface CircleProps {
  text?: React.ReactNode;
}

const CircleGradient: React.FC<CircleProps> = ({ text }) => {
  return (
    <div className="gradient-circle w-[84.25px] h-[84.25px] md:w-[150px] md:h-[150px] lg:w-[211.01px] lg:h-[211.01px] bg-[#141414] rounded-full border border-[#ff4e83] transition-all">
      {text}
    </div>
  );
};

export default CircleGradient;
