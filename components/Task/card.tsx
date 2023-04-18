import { Fragment, useState } from "react";
import Modal from "./modal";
import { task } from "@/pages/[slug]";

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
        <div>
          <div className=" text-3xl font-medium">{tasks.task_title}</div>
          <div></div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Card;
