import React, { useState } from "react";
import NavButton from "../atoms/NavButton";

interface NavProps {
  closeBtn?: () => void;
}

const Navigation: React.FC<NavProps> = ({ closeBtn }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navItems = [
    "스튜디오",
    "워크센터",
    "손비서",
    "메타휴먼",
    "영상제작소",
    "공지사항",
    "제휴문의",
  ];
  return (
    <div>
      <nav className="bg-[#0000005a] md:bg-black md:h-[100px] flex flex-col gap-4 md:flex-row md:gap-7 lg:gap-10 xl:gap-20 transition-all pb-[100vh] md:pb-0 pt-[90px] md:pt-0 md:items-center">
        {navItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className="md:h-[23px]"
          >
            <NavButton text={item} active={activeIndex === index} />
          </div>
        ))}
        <div
          onClick={closeBtn}
          className="md:hidden text-sm opacity-60 hover:opacity-95 border border-white p-2 w-max mx-auto rounded-md transform translate-y-3"
        >
          CLOSE
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
