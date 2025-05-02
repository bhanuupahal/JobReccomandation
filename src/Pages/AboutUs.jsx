import React from "react";
import { HeroAboutUs } from "./AboutUs/HeroAboutUs";
import { HeroSecondAboutUs } from "./AboutUs/HeroSecondAboutUs";
import { HeroThirdAboutUs } from "./AboutUs/HeroThirdAboutUs";
import { TopCompanies } from "./AboutUs/TopCompanies";
import { HowItWorks } from "./AboutUs/HowItWorks";
import { WhyChooseUs } from "./AboutUs/WhyChooseUs";
import { Testimonial } from "./AboutUs/Testimonial";

export const AboutUs = () => {
  return (
    <>
      <HeroAboutUs />
      <HowItWorks />
      <HeroSecondAboutUs />
      <TopCompanies />
      <WhyChooseUs />
      <HeroThirdAboutUs />
      <Testimonial />
    </>
  );
};
