import React from "react";
import StepProcessCard from "../atoms/StepProcessCard";

const GeneralProductionCard = () => {
  const dataCard = [
    {
      text: "사전 논의",
      desc: "영상 제작 문의를 통해 의뢰 확인 후상담을 통해 방향 설정 및 내용 협의",
    },
    {
      text: "영상 기획",
      desc: "스토리보드 전달&수정을 통한 기획안 확정, 가상인간 발화용 스크립트 작성과 프롬프팅",
    },
    {
      text: "영상 생성",
      desc: "작성한 스크립트로 가상인간 영상 생성 그외 이미지, 배경 음악 등 필요 요소 생성",
    },
    {
      text: "영상 편집",
      desc: "영상 전문가의 편집, 디자인, 후반 작업 단계. 필요시 실사 촬영 병행하여 편집본 완성",
    },
    {
      text: "최종 납품",
      desc: "고객 피드백 반영하여 최종본 완성 및 납품 * 영상 수정 무료 1회 제공",
    },
  ];
  return (
    <div className="mx-auto xxl2:mx-0 md:w-[780px] md:h-[816px] md:bg-[#141414] md:rounded-[20px] md:border md:border-white/20 ">
      <div className="w-[195px] flex flex-col justify-center items-center mx-auto pb-[17px] md:pt-[64px]">
        <div className="text-white text-[22px] md:text-[44px] font-bold leading-loose md:leading-[140%]">
          일반 제작
        </div>
        <div className="w-full md:w-max opacity-80 text-[#dddddd] text-base md:text-2xl font-bold text-center mt-[5px] md:leading-[140%] md:h-[51px]">
          제작 시작 후 5영업일 이내
        </div>
      </div>
      <div className="flex flex-col gap-[11px] mx-auto">
        {dataCard.map((item, index) => {
          return (
            <StepProcessCard
              key={index}
              index={index + 1}
              desc={item.desc}
              text={item.text}
              totalSteps={dataCard.length}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GeneralProductionCard;
