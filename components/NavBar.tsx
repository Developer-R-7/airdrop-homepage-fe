import React, { useState } from "react";
import NavBarModal from "./NavBarModal";

export default function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <nav className="flex items-center justify-around md:justify-around flex-wrap bg-none p-9 md:p-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="text-4xl tracking-tight">
            <span className="text-primary-yellow">AIRDROP</span>
          </span>
        </div>
        <div className="w-full flex-grow justify-end mr-2 hidden lg:flex lg:w-auto">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-primary-text hover:text-white mr-10"
          >
            Create a Communitiy
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-primary-text hover:text-white mr-10"
          >
            Connect Wallet
          </a>
        </div>
      </nav>
    </div>
  );
}
