import { Button } from "@/components/base";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-center items-center px-16 py-16 w-full bg-white max-md:px-5 max-md:max-w-full">
      <nav className="flex flex-col mb-9 w-full max-w-[1675px] max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full text-center max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between my-auto text-lg font-medium text-indigo-900">
            <Link href="/" className="underline">
              Home
            </Link>
          </div>
          <div>
            <Link href="/login">
              <Button
                name="Sign-In"
                className="items-center mr-5 px-4 py-2 text-center text-white bg-yellow-400 rounded-md max-md:px-5 max-md:max-w-full"
              />
            </Link>
            <Link href="/register">
              <Button
                name="Sign-Up"
                className="items-center px-4 py-2 text-center text-white bg-green-400 rounded-md max-md:px-5 max-md:max-w-full"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
