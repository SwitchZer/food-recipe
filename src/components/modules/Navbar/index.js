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
            <Link href="/add-recipe">Add Recipe</Link>
            <Link href="/profile">Profile</Link>
          </div>
          <div className="flex gap-2.5 text-base text-white whitespace-nowrap">
            <img
              loading="lazy"
              src="/User icon.svg"
              alt="Login Icon"
              className="shrink-0 aspect-square w-[52px]"
            />
            <a href="#">Login</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
