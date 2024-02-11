import Link from "next/link";

import BackgroundToggle from "./BackgroundToggle";

const NavBar = () => {
  return (
    <nav className="grid grid-cols-3 grid-rows-1 py-3 font-semibold bg-[--light-blue] dark:bg-dark dark:text-[--light]">
      <h2 className="col-span-2 row-span-1 flex items-center ml-20">
        <Link href="/">Logo</Link>
      </h2>
      <div className="col-span-1 row-span-1 flex justify-evenly items-center">
        <Link href="/" className="">
          <button>home</button>
        </Link>
        <Link href="/" className="">
          <button>about</button>
        </Link>
        <Link href="/" className="">
          <button>contact</button>
        </Link>
        <BackgroundToggle />
      </div>
    </nav>
  );
};

export default NavBar;
