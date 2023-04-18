import { Fragment, useState } from "react";
import Modal from "./modal";
import { task } from "@/pages/[slug]";
import { AiOutlineTwitter } from "react-icons/ai";

const Card = (tasks: task) => {
  const [showModal, setshowModal] = useState(false);
  return (
    <Fragment>
      <div
        onClick={() => setshowModal(true)}
        className=" w-52 h-48 bg-lightteal rounded-lg p-3 hover:bg-cyan-900 "
      >
        <div className=" text-lg font-medium">{tasks.task_title}</div>
        <div>{tasks.task_description}</div>
      </div>
      <Modal isVisible={showModal} onClose={() => setshowModal(false)}>
        <div className="flex flex-col gap-3">
          <div className=" text-3xl font-medium">{tasks.task_title}</div>
          <div>{tasks.task_description}</div>
          <div className=" w-full flex items-center justify-center gap-3 border-2 rounded-lg border-sky-400 p-2">
            {tasks.task_button}
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Card;
