import React from "react";

export const HeroAboutUs = () => {
  return (
    <div className="hero w-full flex justify-center items-center bg-blue-400 p-20 relative">
      <div className="w-full h-full bg-gradient-to-r from-blue-600 to-red-600 opacity-40 absolute"></div>
      <h3 className="relative z-10 text-white font-semibold text-3xl">
        {" "}
        About Us{" "}
      </h3>
    </div>
  );
};
