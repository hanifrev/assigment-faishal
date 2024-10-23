import React from "react";

interface NavBtnProps {
  text: string;
  active?: boolean;
}

const NavButton: React.FC<NavBtnProps> = ({ text, active }) => {
  return (
    <>
      <div
        className={` text-white text-sm md:text-xs lg:text-sm xl:text-base font-bold flex justify-center cursor-pointer z-[9999] ${
          active ? "text-white opacity-100" : "opacity-60 "
        }`}
      >
        {text}
      </div>
      {active && (
        <div className="w-2 h-2 bg-gradient-to-br from-[#ff4d82] to-[#ffba53] rounded-full pt-1 md:pt-2 mx-auto" />
      )}
    </>
  );
};

export default NavButton;
