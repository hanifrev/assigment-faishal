"use client";

import Header from "@/components/organism/Header";
import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import MakingProcessSection from "@/components/sections/MakingProcessSection";
import PreviousWorkSection from "@/components/sections/PreviousWorkSection";
import React from "react";
import FormSection from "@/components/sections/FormSection";

const Homepage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <PreviousWorkSection />
      <MakingProcessSection />
      <FormSection />
    </div>
  );
};

export default Homepage;
