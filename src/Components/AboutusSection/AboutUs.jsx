import React from "react";
import { HeroAboutUs } from "./HeroAboutUs";
import { HeroSecondAboutUs } from "./HeroSecondAboutUs";
import { HeroThirdAboutUs } from "./HeroThirdAboutUs";
import { TopCompanies } from "./TopCompanies";
import { HowItWorks } from "./HowItWorks";
import { WhyChooseUs } from "./WhyChooseUs";
import { Testimonial } from "./Testimonial";

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

