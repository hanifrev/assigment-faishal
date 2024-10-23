import Image from "next/image";
import React from "react";

const HeroCirlce = () => {
  return (
    <div className="hidden md:block absolute right-0 transform translate-x-[-17px] translate-y-[130px] xl:translate-x-[-42px] xl:translate-y-[210px] transition-all">
      <Image
        src="/circleGrad.png"
        alt=""
        width={131}
        height={131}
        className="w-[100px] h-[100px] xl:w-[131px] xl:h-[131px]"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center w-[76px] transform translate-x-[13px] xl:translate-x-[29px]">
        <span className="text-white text-sm xl:text-[19px] font-bold">
          제작
        </span>
        <span className="text-white text-sm xl:text-[19px] font-bold pb-2">
          문의하기
        </span>
        <Image
          src="/arrowdownleft.svg"
          alt="arrow"
          width={20}
          height={20}
          className="opacity-60 w-4 h-4 xl:w-5 xl:h-5"
        />
      </div>
    </div>
  );
};

export default HeroCirlce;
