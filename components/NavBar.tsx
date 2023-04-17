import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import Modal from "./Modal";
import { validateAddress } from "../services/apiservices";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { address, isConnecting, isDisconnected } = useAccount();

  useEffect(() => {
    onAddress();
  }, [address]);

  const onAddress = async () => {
    if (address) {
      const res = await validateAddress(address);
      if (!res.exist) {
        setShow(true);
      }
    }
  };

  return (
    <div>
      {show && <Modal onClose={() => setShowModal(false)} />}
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
          ></a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-primary-text hover:text-white mr-10"
          >
            <ConnectButton />
          </a>
        </div>
      </nav>
    </div>
  );
}
