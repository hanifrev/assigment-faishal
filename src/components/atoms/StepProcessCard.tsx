import Image from "next/image";
import React from "react";

interface CardProps {
  text: string;
  desc: string;
  index: number;
  totalSteps: number;
}

const StepProcessCard: React.FC<CardProps> = ({
  text,
  desc,
  index,
  totalSteps,
}) => {
  return (
    <div className="w-[335px] md:w-[594px] mx-auto transition-all">
      <div className="w-[335px] md:w-[594px] h-[97px] md:h-[93px] bg-[#141414] rounded-[15px] border border-white/20 flex gap-4 items-center px-4 relative md:justify-between md:rounded-[52px] md:pl-20 md:pr-[53px]">
        <div className="flex flex-col justify-center items-start w-[78px] h-[43px]">
          <div className="gradient-text-card text-xs md:text-base font-normal">
            STEP{index}
          </div>
          <div className="text-white text-lg md:text-xl font-bold">{text}</div>
        </div>
        <div className="w-[207px] md:w-[316px] ml-auto text-[#aaaaaa] text-sm md:text-base font-normal leading-tight md:leading-[25px] md:tracking-[-0.32px]">
          {desc}
        </div>
      </div>
      {index !== totalSteps && (
        <Image
          alt=""
          src="arrowdown.svg"
          width={25}
          height={11}
          className="mx-auto"
        />
      )}
    </div>
  );
};

export default StepProcessCard;
