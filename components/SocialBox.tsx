import React from "react";
import { SocialIcon } from "react-social-icons";

export default function SocialBox() {
  return (
    <>
      <div>
        <div className="flex flex-col bg-primary-light h-fit w-fit p-6 rounded-sm border-none justify-center">
          <div className="p-2">
            <SocialIcon
              url="https://www.linkedin.com/in/developer-r/"
              style={{ height: 40, width: 40 }}
            />
          </div>
          <div className="p-2">
            <SocialIcon
              url="https://www.instagram.com/developer._.r/ "
              style={{ height: 40, width: 40 }}
            />
          </div>
          <div className="p-2 mb-12">
            <SocialIcon
              url="https://twitter.com/developer_r"
              style={{ height: 40, width: 40 }}
            />
          </div>
        </div>
      </div>
      <div className="bg-primary-yellow px-6 p-2 m-auto text-sm font-bold rotate-90 uppercase">
        follow me
      </div>
    </>
  );
}
