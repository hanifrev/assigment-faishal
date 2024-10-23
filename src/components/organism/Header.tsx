import Image from "next/image";
import React, { useState } from "react";
import Navigation from "../moleculs/Navigation";

const Header = () => {
  const [navPopUp, setNavPopUp] = useState(false);
  return (
    <div className="bg-black">
      <div className="side-container py-4 md:py-0 bg-black flex flex-row justify-between items-center md:mx-auto">
        <Image
          src="/logo.svg"
          alt=""
          width="122"
          height="20"
          className="w-[122px] h-5 md:w-[170px] md:h-7"
        />
        {/* navigation mobile */}
        <div className="md:hidden fixed w-full -ml-5 h-0 mt-[-190px]">
          {navPopUp && <Navigation closeBtn={() => setNavPopUp(false)} />}
        </div>
        {/* navigation desktop */}
        <div className="hidden md:block">
          <Navigation />
        </div>
        <Image
          src="/humburger.png"
          alt=""
          width="16"
          height="12"
          className="h-3 md:hidden"
          onClick={() => setNavPopUp(!navPopUp)}
        />
        <div className="hidden md:flex flex-row items-center gap-10 xl:gap-[55px]">
          <div className="text-white text-sm lg:text-base font-bold ">
            로그인
          </div>
          <Image src="/globe.svg" alt="" width="40" height="20" />
        </div>
      </div>
    </div>
  );
};

export default Header;
