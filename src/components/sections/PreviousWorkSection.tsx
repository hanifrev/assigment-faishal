import Image from "next/image";
import React from "react";

const PreviousWorkSection = () => {
  const imageData = [
    "https://ik.imagekit.io/icvij1rszoy/img1_R3ydh31H8.png?updatedAt=1729649691105",
    "https://ik.imagekit.io/icvij1rszoy/img2_ccv5L2gSH.png?updatedAt=1729649690918",
    "https://ik.imagekit.io/icvij1rszoy/img3_VYFn9k0V4y.png?updatedAt=1729649687507",
    "https://ik.imagekit.io/icvij1rszoy/img4_1Dt05F-H8i.png?updatedAt=1729649687784",
    "https://ik.imagekit.io/icvij1rszoy/img5_VRvrdW63aq.png?updatedAt=1729649688148",
    "https://ik.imagekit.io/icvij1rszoy/img6_XfCYnn5ic.png?updatedAt=1729649686847",
    "https://ik.imagekit.io/icvij1rszoy/img7_j8U8VDH50P.png?updatedAt=1729649688522",
    "https://ik.imagekit.io/icvij1rszoy/img8__ddl9v9Tv.png?updatedAt=1729649686426",
    "https://ik.imagekit.io/icvij1rszoy/img9_GFTwTcNjW.png?updatedAt=1729649687578",
    "https://ik.imagekit.io/icvij1rszoy/img10_YT8LOUPhlA.png?updatedAt=1729649687581",
    "https://ik.imagekit.io/icvij1rszoy/img11_9cihv_3ni.png?updatedAt=1729649688052",
    "https://ik.imagekit.io/icvij1rszoy/img12_mykZl0GGZ.png?updatedAt=1729649687954",
  ];

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
        {imageData.map((item, index) => (
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
