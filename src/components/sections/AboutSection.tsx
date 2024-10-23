import React from "react";
import AboutFeatureCircle from "../organism/AboutFeatureCircle";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="side-container pt-[60px] md:pt-[157px] mx-auto">
      <div className="text-center text-white text-2xl font-normal flex flex-col pb-[29px] md:pb-[56px]">
        <span className="md:hidden">당장 내일</span>
        <span className="about-gradient text-2xl font-bold hidden md:block pb-[15px]">
          영상 제작소
        </span>
        <span className="md:hidden">
          <b>‘고품질 맞춤 영상’</b>을 받아보세요
        </span>
        <span className="text-white text-[44px] font-extralight hidden md:block tracking-[-1.32px] leading-[68px]">
          당장 내일 <b>‘고품질 맞춤 영상’</b>을 받아보세요
        </span>
      </div>
      <AboutFeatureCircle />
      <div className="text-center text-white text-lg md:text-[32px] font-bold pt-[38.75px] md:pt-[67.99px] md:leading-[140%]">
        AI VIDEO ON YOUR DEMAND
      </div>
      <div className="w-[335px] md:w-[662px] mx-auto opacity-60 text-center pt-3 md:pt-[22px] tracking-[-1.28px] font-extralight">
        <span className="text-white text-base md:text-xl font-normal md:font-normal leading-normal md:leading-8">
          가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI
          기술에 영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는
          보장된 영상을 만듭니다.
        </span>
        <br />
        <span className="text-white text-base md:text-xl font-normal md:font-normal leading-normal md:leading-8">
          <br />
          가격은 절반으로, 속도는 두배로, 품질은 A++!
          <br />
          기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등<br />
          당신이 필요한 '그 영상'을
          <br className="md:hidden" />
          플루닛 영상제작소에 맡겨주세요.
        </span>
      </div>
      <Image
        src="/separator.svg"
        alt=""
        width={240}
        height={1}
        className="mx-auto pt-[38px] pb-[45px] md:hidden"
      />
      <div className="separator-desk w-[800px] h-px md:mt-[96px] md:mb-[99px] hidden md:block mx-auto" />
    </div>
  );
};

export default AboutSection;
