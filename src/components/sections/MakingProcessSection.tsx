import React from "react";
import GeneralProductionCard from "../moleculs/GeneralProductionCard";
import PloonetQuickverseCard from "../moleculs/PloonetQuickverseCard";

const MakingProcessSection = () => {
  return (
    <div className="mx-auto">
      <div className="relative flex justify-center items-center -ml-2">
        <span
          style={{
            background:
              "linear-gradient(137deg, #FF4E83 12.5%, #FFBB54 84.51%)",
          }}
          className="rounded-full w-2 h-2 md:w-4 md:h-4 block top-[-22px] left-0 md:top-[-57px] relative"
        />
        <div className="text-center text-white text-xl md:text-5xl font-bold  pb-[19px] md:pb-[60px]">
          MAKING PROCESS
        </div>
      </div>
      <div className="flex flex-col md:gap-6 xl:gap-[50px] xxl2:justify-center xxl2:flex-row mx-auto">
        <GeneralProductionCard />
        <PloonetQuickverseCard />
      </div>
      <div className="pt-[19px] md:pt-[50px] w-[292px] md:w-[760px] text-center text-[#666666] text-[10px] font-normal leading-3 md:text-[#999999] md:text-sm  md:leading-[23px] mx-auto">
        {" "}
        * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며, 모션그래픽 등전문
        작업이 필요할 경우 작업 기간은 조정될 수 있습니다.
        <br />
        <br className="md:hidden" />
        ** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수
        있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.
      </div>
    </div>
  );
};

export default MakingProcessSection;
