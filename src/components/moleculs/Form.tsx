import React from "react";
import InputField from "../atoms/InputField";

const Form = () => {
  const option = ["options 1", "options 2", "options 3"];

  return (
    <div className="flex flex-col items-center gap-[15px] md:gap-5 mx-auto pt-[25px] md:pt-[58px]">
      <InputField dropdown placeholder="영상 유형 선택" options={option} />
      <InputField placeholder="연락 받으실 담당자 성함" />
      <InputField placeholder="이메일" />
      <InputField placeholder="번호" />
      <InputField
        placeholder="의뢰하실 영상내용
아래 예시를 참고하셔서 이 중 편하신 내용을 기재해주세요."
        textArea
        className="!h-[296px] md:!h-[278px]"
      />
      <InputField placeholder="참고 영상" />
    </div>
  );
};

export default Form;
