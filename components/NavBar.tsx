import React, { useState } from "react";
import NavBarModal from "./NavBarModal";

export default function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <nav className="flex items-center justify-between md:justify-around flex-wrap bg-none p-9 md:p-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="text-4xl tracking-tight">
            RUSHI <span className="text-primary-yellow">PATEL</span>
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={handleShow}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <div
            className={`fixed top-0 left-0 w-full h-full z-50 bg-secondary bg-opacity-75 ${
              show ? "block" : "hidden"
            }`}
            onClick={handleClose}
          >
            <NavBarModal />
          </div>
        </div>
        <div className="w-full flex-grow justify-evenly hidden lg:flex lg:w-auto">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-primary-text hover:text-white mr-4"
          >
            About
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-primary-text hover:text-white mr-4"
          >
            About
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-primary-text hover:text-white mr-4"
          >
            About
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-primary-text hover:text-white mr-4"
          >
            About
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-primary-text hover:text-white mr-4"
          ></a>
        </div>
      </nav>
    </div>
  );
}
