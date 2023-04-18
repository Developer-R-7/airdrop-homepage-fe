import Navbar from "@/components/Task/navbar";
import Card from "@/components/Task/card";
import Image from "next/image";

import { AiOutlineSearch } from "react-icons/ai";

export type task = {
  task_title: string;
  task_description: String;
};

const Task = () => {
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
              <div className=" text-3xl font-medium">SLEEP 404</div>
              <div className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                provident minima asperiores quam repudiandae voluptatem
              </div>
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
