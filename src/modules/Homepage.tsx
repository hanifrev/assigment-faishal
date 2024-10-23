"use client";

import Header from "@/components/organism/Header";
import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import MakingProcessSection from "@/components/sections/MakingProcessSection";
import PreviousWorkSection from "@/components/sections/PreviousWorkSection";
import React from "react";
import FormSection from "@/components/sections/FormSection";
import { ApiDataType } from "@/types/api.types";

interface HomeProps {
  data: ApiDataType;
}
const Homepage: React.FC<HomeProps> = ({ data }) => {
  return (
    <div>
      <Header />
      <HeroSection imageData={data.heroImage} />
      <AboutSection />
      <PreviousWorkSection imageData={data.prevWorkImage} />
      <MakingProcessSection />
      <FormSection />
    </div>
  );
};

export default Homepage;
