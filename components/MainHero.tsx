import React from "react";
import Image from "next/image";

export default function MainHero() {
  return (
    <div className="flex flex-col md:mt-8 items-center md:flex-row justify-center md:justify-between md:px-4 md:items-center">
      <div className="hidden md:flex md:justify-center md:items-center lg:w-1/3">
        <Image
          src="/bg-img.svg"
          alt="bg-img"
          className="h-[350px] w-[350px] md:h-auto md:max-h-full md:max-w-full md:ml-6 lg:scale-125 md:mt-11"
          width={300}
          height={300}
        />
      </div>
      <div className="flex items-center justify-center lg:w-2/3  text-center md:text-left md:self-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Never Miss a Free Token
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Find the Latest Airdrops and Supercharge Your Crypto Portfolio!
          </p>
        </div>
      </div>
    </div>
  );
}
