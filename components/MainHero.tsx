import React from "react";
import Image from "next/image";

export default function MainHero() {
  return (
    <div className="flex flex-col md:mt-8 items-center md:flex-row justify-center md:justify-between md:px-4 md:items-center">
      <div className="hidden md:flex md:justify-center md:items-center lg:w-1/3">
        <Image
          src="/profile.svg"
          alt="Your alt text"
          className="w-full md:w-auto md:h-auto md:max-h-full md:max-w-full md:ml-6 lg:scale-125 md:mt-11"
          width={500}
          height={500}
        />
      </div>
      <div className="flex items-center lg:w-2/3  text-center md:text-left md:self-center">
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Hello World,
            <br />I am Rushi Patel
            <br /> The Backend Maestro
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            A Software Developer&apos;s Showcase
          </p>
        </div>
      </div>
    </div>
  );
}
