import Image from "next/image";
import React from "react";

interface InputProps {
  placeholder: string;
  dropdown?: boolean;
  options?: string[];
  className?: string;
  textArea?: boolean;
}

const InputField: React.FC<InputProps> = ({
  placeholder,
  options = [],
  dropdown = false,
  className,
  textArea,
}) => {
  return (
    <div
      className={`w-[335px] md:w-full md:max-w-[901px] h-[60px] flex justify-center items-center ${className}`}
    >
      <div className="w-full h-full bg-[#141414] rounded-[10px] border border-white/20 relative flex items-center px-[30px] md:px-[40px] cursor-pointer hover:border hover:border-red-300 focus:border focus:border-red-400 focus-within:border focus-within:border-red-400">
        {dropdown ? (
          <select className="bg-transparent text-white text-base font-bold font-['Pretendard'] opacity-60 outline-none w-full appearance-none cursor-pointer custom-select">
            <option value="" disabled selected hidden className="font-bold">
              {placeholder}
            </option>
            {options.map((option, index: number) => (
              <option
                key={index}
                value={option}
                className="text-white font-normal"
              >
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            placeholder="영상 유형 선택"
            className={`bg-transparent text-white text-base outline-none w-full custom-input ${
              textArea && "hidden"
            }`}
          />
        )}

        {dropdown && (
          <Image
            src="/chevdown.svg"
            alt=""
            width={19}
            height={13}
            className={`
            } pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2`}
          />
        )}

        {textArea && (
          <textarea className="custom-textarea" placeholder={placeholder} />
        )}
      </div>
    </div>
  );
};

export default InputField;
