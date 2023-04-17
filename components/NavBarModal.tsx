import React from "react";

export default function NavBarModal() {
  return (
    <div className="flex flex-row justify-center items-center w-full h-full">
      <div className="bg-primary-nav text-white rounded-lg h-fit p-4 m-auto w-3/4 md:w-1/2 lg:w-1/3 max-w-lg">
        <div className="">
          <ul className="flex flex-col p-4 items-center text-xl">
            <li>Hello</li>
            <li className="mt-4">
              <a href="#about">About me</a>
            </li>
            <li className="mt-4">
              <a href="#about">Skills</a>
            </li>
            <li className="mt-4">
              <a href="#about">Projects</a>
            </li>
            <li className="mt-4">
              <a href="#about">Nothing</a>
            </li>
            <div className="flex flex-row justify-center w-full">
              <li className="mt-6">
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 border border-blue-700 rounded">
                  Connect with me
                </button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
