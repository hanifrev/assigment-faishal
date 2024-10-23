import React from "react";
import PloonetCard from "../atoms/PloonetCard";

const data = [
  {
    title: "제작 안내",
    img: "/notes.svg",
    desc: "영상 제작 문의를 통해 의뢰 확인 후 견적 및 진행 순서 안내",
  },
  {
    title: "영상 생성",
    img: "/camera.svg",
    desc: "스크립트 수신 즉시 가상인간 영상 생성 그외 이미지, 배경 음악 등 필요 요소 생성",
  },
  {
    title: "편집 및 납품",
    img: "/playback.svg",
    desc: "편집 진행, 12~48시간 내 최종본 완성 및 납품",
  },
];

const PloonetQuickverseCard = () => {
  return (
    <div className="side-container pt-[62px] md:pt-0 mx-auto xxl2:mx-0 flex flex-col justify-center items-center transition-all">
      <div className="md:hidden">
        <div className="text-center gradient-text text-[28px] font-bold leading-loose">
          Ploonet Quickserve™
        </div>
        <div className="pt-[5px] pb-[26px] opacity-80 text-center text-[#dddddd] text-base font-bold leading-normal">
          제작 시작 후 12~48시간 이내
        </div>
      </div>
      <div className="w-[335px] md:w-[780px] p-[2px] bg-gradient-to-br from-[#ff4e83] to-[#ffbb54] rounded-[20px] transition-all">
        <div className="hidden md:block bg-[#141414] rounded-tl-[20px] rounded-tr-[20px] mb-[-1px]">
          <div className="text-center gradient-text text-[44px] font-bold leading-[61.60px] pt-[64px]">
            Ploonet Quickserve™
          </div>
          <div className="pt-[5px] pb-[26px] md:pb-0 opacity-80 text-center text-[#dddddd] text-2xl font-bold leading-normal">
            제작 시작 후 12~48시간 이내
          </div>
        </div>
        <div className="w-[331px] md:w-[776px] pt-[46.94px] md:pt-[51px] pb-[47.68px] bg-[#141414] rounded-t-[20px] md:rounded-t-none rounded-bl-[20px] rounded-br-[20px]  flex flex-col justify-center items-center transition-all">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <PloonetCard
                  index={index + 1}
                  title={item.title}
                  img={item.img}
                  desc={item.desc}
                />
                {index !== data.length - 1 && (
                  <div className="w-[189px] md:w-[428px] h-[0px] border border-white/20 mt-[35.47px] mb-[31.96px] relative right-[-100px] md:right-[-177px]"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PloonetQuickverseCard;
