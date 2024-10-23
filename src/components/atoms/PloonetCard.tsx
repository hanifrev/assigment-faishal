import Image from "next/image";
import React from "react";

interface CardProps {
  index: number;
  img: string;
  title: string;
  desc: string;
}

const PloonetCard: React.FC<CardProps> = ({ index, img, title, desc }) => {
  return (
    <div className="flex flex-row justify-between w-[291px] md:w-[580px] transition-all">
      <div className="w-[82.37px] h-[82.37px] md:w-[134px] md:h-[134px] bg-gradient-to-br from-[#ff4e83] to-[#ffbb54] rounded-[19px] shadow flex flex-col items-center justify-start gap-[8.23px] md:gap-[13px]">
        <div className="w-[42.17px] text-center text-white text-xs md:text-lg font-normal pt-[13px] md:pt-[20px] -ml-2">
          STEP{index}
        </div>
        <Image
          alt=""
          src={img}
          className="relative opacity-70 md:w-10 "
          width={24}
          height={31}
        />
      </div>
      <div className="flex flex-col gap-[5.86px] w-[188px] md:w-[404px] justify-center">
        <div className=" text-white text-lg md:text-2xl font-bold">{title}</div>
        <div className=" text-[#cccccc] text-sm md:text-lg font-normal md:font-medium leading-[18px] md:w-[303px]">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default PloonetCard;
