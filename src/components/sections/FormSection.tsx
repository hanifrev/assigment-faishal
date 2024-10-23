import React from "react";
import Form from "../moleculs/Form";
import Button from "../atoms/Button";
import Image from "next/image";

const FormSection = () => {
  return (
    <div className="side-container mx-auto pt-[103px] md:pt-[300px] pb-[59px] md:pb-[310px]">
      <div className="mx-auto transition-all">
        <div className="text-center inq-text-gradient text-lg md:text-2xl font-bold pb-[18px] md:pb-[15px]">
          영상 제작 문의
        </div>
        <div className="text-white text-center text-2xl md:text-[44px] w-[230px] md:w-[800px] mx-auto">
          <b>영상 제작이 필요하다면,</b>
          <span className="font-light">지금 문의 주세요.</span>
        </div>
        <div className="w-[335px] md:w-[621px] opacity-60 text-center text-white text-base font-normal  md:text-2xl md:font-bold  leading-normal pt-[18px] md:pt-[38px] mx-auto">
          여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가 즉시
          연락 드리겠습니다.
        </div>
        <div className="mx-auto pt-[25px]">
          <div className="md:hidden text-center text-[#666666] text-base font-bold">
            E-MAIL
          </div>
          <div className="opacity-80 text-center text-white md:text-[#666666] md:opacity-100 text-base md:text-lg ">
            henry.lim@saltlux.com
          </div>
        </div>
        <Form />
        <div className="pt-[58px] md:pt-3 flex flex-row mx-auto w-[335px] md:w-full md:max-w-[901px]">
          <div className="text-[#ff6c50] text-2xl font-bold text-center leading-[33.60px]">
            *
          </div>
          <div className="text-[#ff6c50] text-xs md:text-base leading-[18px] ">
            참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를
            적어주시면 더 정확히 안내해드리겠습니다.
          </div>
        </div>
        <div className="pt-[64px] md:pt-[139px]  w-[335px] mx-auto md:w-full md:max-w-[901px] flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex flex-row gap-2 pb-[60px] md:pb-0">
            <Image src="/check.svg" alt="" width={16} height={16} />
            <div className="w-[325px] opacity-60">
              <u className="text-white text-sm font-normal font-['Pretendard']">
                개인정보처리방침
              </u>
              <span className="text-white text-sm font-normal font-['Pretendard']">
                에 동의합니다.
              </span>
            </div>
          </div>
          <Button text="문의 보내기" />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
