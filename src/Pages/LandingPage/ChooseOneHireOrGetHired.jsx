import React from "react";
import { CompoHeading } from "../../Components/CompoHeading";
import getHired from "../../Images/—Pngtree—job bag icon_4945956.png";
import hire from "../../Images/—Pngtree—job vacancy with join our_5330648.png";

export const ChooseOneHireOrGetHired = () => {
  const compoHeading = {
    heading: "Hire or Get Hired",
    description:
      "Hire an experienced developer or get hired by a reputable company.",
  };
  return (
    <div className="flex flex-col justify-around items-center py-20">
      <CompoHeading data={compoHeading} />
      <div className="grid grid-cols-2 p-20">
        <div className="flex flex-col p-8 justify-center items-center gap-4 bg-[#f0f3fa]">
          <div className="w-32 h-32  rounded-full flex justify-center items-center">
            <img
              src={getHired}
              alt=""
              className="h-full w-full object-contain rounded-full"
            />
          </div>
          <h2 className="font-semibold text-2xl">
            DO YOU WANT TO FIND A JOB ?
          </h2>
          <p className="text-center ">
            Search for jobs, apply for them, and build your resume.
          </p>
          <button className="px-3 py-1.5 bg-blue-600 rounded-lg font-semibold text-white hover:bg-blue-800">
            Find Job
          </button>
        </div>
       < div className='flex flex-col p-8 justify-center items-center gap-4 border-2'>
        <div className="w-32 h-32  rounded-full flex justify-center items-center bg-[#f0f3fa] p-4">
          <img
            src={hire}
            alt=""
            className="h-full w-full object-contain rounded-full"
          />
        </div>
        <h2 className="font-semibold text-2xl">
          ARE YOU LOOKING FOR A CANDIDATE ?
        </h2>
        <p className="text-center">
          Hire a developer, get hired by a reputable company, or find a job that
          suits your skills.
        </p>
        <button className="px-3 py-1.5 bg-blue-600 rounded-lg font-semibold text-white  hover:bg-blue-800">
          Find Candidate
        </button>
      </div>
    </div>
    </div>
  );
};
