import React from "react";
import { HeroSection } from "./LandingPage/HeroSection";
import { JobCategory } from "./LandingPage/JobCategory";
import { RecentJobs } from "./LandingPage/RecentJobs";
import { JobType } from "./LandingPage/JobType";
import { FeaturedEmployers } from "./LandingPage/FeaturedEmployers";
import { LatestJobs } from "./LandingPage/LatestJobs";
import { TopCompanies } from "./AboutUs/TopCompanies";
import { ChooseOneHireOrGetHired } from "./LandingPage/ChooseOneHireOrGetHired";
import { NewJobs } from "./LandingPage/NewJobs";

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <JobCategory />
      <RecentJobs />
      <JobType />
      <FeaturedEmployers />
      <LatestJobs />
      <TopCompanies />
      <NewJobs />
      <ChooseOneHireOrGetHired />
    </>
  );
};
