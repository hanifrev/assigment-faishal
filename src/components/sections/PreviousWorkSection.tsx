import Image from "next/image";
import React from "react";

interface WorkProps {
  imageData: string[];
}

const PreviousWorkSection: React.FC<WorkProps> = ({ imageData }) => {
  return (
    <div className="mx-auto pb-[107px] md:pb-[238.87px]">
      <div className="relative flex justify-center items-center -ml-2">
        <span
          style={{
            background:
              "linear-gradient(137deg, #FF4E83 12.5%, #FFBB54 84.51%)",
          }}
          className="rounded-full w-2 h-2 md:w-4 md:h-4 block top-[-30px] left-0 md:top-[-57px] relative"
        />
        <div className="text-center text-white text-xl md:text-5xl font-bold leading-[68px] pb-9 md:pb-[60px]">
          PREVIOUS WORKS
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center xl:max-w-[1920px] mx-auto transition-all">
        {imageData &&
          imageData.map((item, index) => (
            <div
              key={index}
              className="w-[187.50px] h-[106px] md:w-[240px] md:h-[135px] lg:w-[320px] lg:h-[180px] xxl:w-[320px] xxl:h-[180px] xxl2:w-[400px] xxl2:h-[242.5px] xxl3:w-[480px] xxl3:h-[270px]  justify-center items-center inline-flex"
            >
              <Image
                className="w-[187.50px] h-[106px] md:w-[240px] md:h-[135px] lg:w-[320px] lg:h-[180px] xxl:w-[320px] xxl:h-[180px] xxl2:w-[400px] xxl2:h-[242.5px] xxl3:w-[480px] xxl3:h-[270px] object-fit"
                src={item}
                alt=""
                width={400}
                height={200}
                loading="lazy"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PreviousWorkSection;
