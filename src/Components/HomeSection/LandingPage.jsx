import React from "react";
import { HeroSection } from "./HeroSection";
import { JobCategory } from "./JobCategory";
import { RecentJobs } from "./RecentJobs";
import { JobType } from "./JobType";
import { FeaturedEmployers } from "./FeaturedEmployers";
import { LatestJobs } from "./LatestJobs";
import { TopCompanies } from "../AboutusSection/TopCompanies";
import { ChooseOneHireOrGetHired } from "./ChooseOneHireOrGetHired";
import { NewJobs } from "./NewJobs";

const LandingPage = () => {
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

export { LandingPage };

