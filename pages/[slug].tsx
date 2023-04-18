import Navbar from "@/components/Task/navbar";
import Card from "@/components/Task/card";
import Image from "next/image";
import { getCompany } from "@/services/apiservices";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { AiOutlineSearch } from "react-icons/ai";

export type task = {
  task_title: string;
  task_description: String;
};

type cmptype = {
  _id: string;
  logo: string;
  display_name: string;
  username: string;
  password: string;
  description: string;
  social_handles: {
    twitter: string;
    discord: string;
  };
  website: string;
  airdrops: string[];
  enrolled_users: string[];
  joined_at: string;
  updated_at: string;
};

interface data {
  company: cmptype[];
  success: boolean;
}

let something: data = {
  company: [
    {
      _id: "643dc3c523deb359585425c6",
      logo: "https://res.cloudinary.com/mdfarhaan/image/upload/v1681768667/bcLogo_vrkc82.svg",
      display_name: "Blockchain Club SRM",
      username: "bc",
      password: "admin",
      description: "Nice Club",
      social_handles: {
        twitter: "https://twitter.com/BlockchainSRM",
        discord: "https://discord.com/BlockchainSRM",
      },
      website: "https://www.blockchainsrm.org/",
      airdrops: ["xq34027"],
      enrolled_users: ["643dbf74884fa6718c0d37ca"],
      joined_at: "2023-04-17T22:10:13.737Z",
      updated_at: "2023-04-17T22:10:13.737Z",
    },
  ],
  success: true,
};

const Task = () => {
  const [data, setData] = useState({
    display_name: "",
    description: "",
  });

  useEffect(() => {
    getCompany().then((res) => {
      if (res.success) {
        setData(res.company[0]);
        console.log(res.company);
      } else {
        console.log(res); //error
        toast.error("Error getting company data");
      }
    });
  }, []);
  return (
    <div className=" w-screen h-screen bg-slategrey text-white">
      <Navbar />
      <div className="flex">
        <div className=" w-20 flex justify-center border-r-2 pt-3 h-screen border-lightblue">
          <div className=" p-3 bg-customorange rounded-lg w-fit h-fit">
            <AiOutlineSearch />
          </div>
        </div>
        <div className=" flex flex-col pt-3 pl-6">
          <div className=" flex gap-3">
            <div>
              <Image
                src="/cmp-img.svg"
                alt="cat"
                width="200"
                height="200"
                className=" rounded-xl"
              />
            </div>
            <div className=" w-3/5">
              <div className=" text-4xl font-medium">{data.display_name}</div>
              <div className="">{data.description}</div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <div className=" text-2xl">TASKS :</div>
            <div className=" flex gap-4">
              <Card
                task_description="Click this link to follow on twitter"
                task_title="Follow on Twitter"
              />
              <Card
                task_description="This some random text to see if it fits inside the box"
                task_title="Join Discord Server"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Task;
