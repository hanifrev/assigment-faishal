import Image from "next/image";
import React from "react";
import HeroCirlce from "../atoms/HeroCirlce";

const HeroSection = () => {
  return (
    <>
      <HeroCirlce />
      <Image
        src="/heroimg.png"
        alt=""
        width={2000}
        height={900}
        className="mx-auto object-cover h-[360px] md:h-[600px] xl:h-[936px] xl:max-h-[936px] transition-all"
      />
    </>
  );
};

export default HeroSection;
