import React from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { AiOutlineWifi } from "react-icons/ai";
import { statCardSchema } from "@/shared/schemas";

export default function StatCard(props: statCardSchema) {
  return (
    <div className="flex m-10 flex-col p-6 w-1/3 rounded-md bg-secondary">
      <div className="flex flex-row">
        <div className=" flex-col w-1/2">
          <p className="text-xl ">{props.title}</p>
          <p className="font-semibold">$1900</p>
        </div>
        <div className="flex flex-col w-1/2 justify-center items-center mx-auto h-full">
          <div className="flex justify-center items-center w-full h-full">
            {props.icon === "user" ? (
              <FaUserCircle size={40} />
            ) : props.icon === "graph" ? (
              <BsGraphUp size={40} />
            ) : props.icon === "airdrop" ? (
              <AiOutlineWifi size={40} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
