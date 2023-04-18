import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" px-6 py-4 w-full bg-darkteal border-b-2 border-lightblue">
      <Link href="/">
        <div className=" text-white text-3xl font-semibold">AIRDROP</div>
      </Link>
    </div>
  );
};

export default Navbar;
