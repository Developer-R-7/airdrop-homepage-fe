import React from "react";
import MainHero from "./MainHero";
import NavBar from "./NavBar";
import SocialBox from "./SocialBox";

export default function HeroSection() {
  return (
    <div>
      <div className="h-screen w-screen">
        <div className="h-3/4 relative w-full bg-primary">
          <NavBar />
          <div className="hidden lg:flex flex-col justify-center items-center absolute right-12 top-12 mx-auto">
            <SocialBox />
          </div>
          <div className="container h-auto w-auto mx-auto">
            <MainHero />
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary via-secondary to-secondary w-screen h-screen"></div>
      </div>
    </div>
  );
}
