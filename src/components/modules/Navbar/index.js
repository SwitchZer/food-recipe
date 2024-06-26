"use client";
import { Button } from "@/components/base";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await fetch("/v1/auth/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        const error = await response.json();
        console.log(error);
        throw new Error(error.message);
      }
      const res = await response.json();
      console.log(res);
      localStorage.removeItem("user");
      await router.push("/login");

      alert("You have been logged out successfully!");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <header className="flex justify-center items-center px-16 py-16 w-full bg-white max-md:px-5 max-md:max-w-full">
      <nav className="flex flex-col mb-9 w-full max-w-[1675px] max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full text-center max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between my-auto text-lg font-medium text-indigo-900">
            <Link href="/home">Home</Link>
            <Link href="/profile/add-recipe">Add Recipe</Link>
            <Link href="/profile/recipe">Recipe</Link>
            <Link href="/profile">Profile</Link>
          </div>
          <div className="flex gap-2.5 text-base text-white whitespace-nowrap">
            <Button
              onClick={handleLogout}
              name="Log Out"
              className="items-center px-4 py-2 text-center text-white bg-red-700 rounded-md max-md:px-5 max-md:max-w-full"
            />
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
