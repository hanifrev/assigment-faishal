import React from "react";

interface BtnProps {
  text: string;
}

const Button: React.FC<BtnProps> = ({ text }) => {
  return (
    <div className="w-full md:w-max px-4 py-3 md:px-7 md:py-4 bg-[#ff6c50] hover:bg-[#f7856f] focus:bg-[#94746d] cursor-pointer rounded-lg flex justify-center items-center">
      <span className="text-white text-base md:text-xl font-bold uppercase">
        {text}
      </span>
    </div>
  );
};

export default Button;
