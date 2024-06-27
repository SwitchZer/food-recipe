"use client";
import { Footer, ImageCard, NavItem, Navbar } from "@/components";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { getProfile } from "@/service/client/profile";
// import { getMyRecipe } from "@/service/client/recipe";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const router = useRouter();
  const [myRecipe, setMyRecipe] = useState([]);
  // const [params, setParams] = useState({
  //   limit: 80,
  //   page: 1,
  // })

  const [profile, setProfile] = useState({});
  const getMyProfile = async () => {
    try {
      const response = await fetch("/v1/users/profile", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Error");
      }
      const result = await response.json();
      setProfile(result.data);
    } catch (error) {
      alert(error);
    }
  };

  const getMyProfileRecipe = async () => {
    try {
      const response = await fetch(`/v1/recipes/self`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      });
      if (!response.ok) {
        throw new Error("Error");
      }
      const result = await response.json();
      setMyRecipe(result.data);
    } catch (error) {
      alert(error);
    }
  };

  const handleNavigate = (id) => {
    router.push(`/profile/my-recipe/${id}`);
  };

  useEffect(() => {
    getMyProfile();
    getMyProfileRecipe();
  }, []);
  return (
    <div className="flex flex-col bg-white">
      <Navbar />
      <section className="flex flex-col py-20 bg-white">
        <header className="flex overflow-hidden relative flex-col items-end self-center px-16 pt-20 max-w-full rounded-full aspect-square w-[172px] max-md:pl-5 max-md:mt-10">
          <img
            loading="lazy"
            src="/Ellipse 127.png"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
        </header>
        <h1 className="self-center mt-12 text-2xl font-medium text-center text-black max-md:mt-10">
          {profile.name || "Garneta Sharina"}
        </h1>
        <hr className="shrink-0 self-center mt-1.5 max-w-full h-px border border-solid bg-zinc-100 border-zinc-100 w-[319px]" />
        <nav className="flex gap-5 mt-28 ml-36 max-w-full text-2xl font-medium text-center text-stone-500 w-[607px] max-md:flex-wrap max-md:mt-10">
          <Link href="/profile">
            <div className="flex-auto text-black underline">My Recipe</div>
          </Link>
          <Link href="/profile/saved-recipe">
            <div className="flex-auto text-black">Saved Recipe</div>
          </Link>
          <Link href="/profile/liked-recipe">
            <div className="flex-auto text-black">liked Recipe</div>
          </Link>
        </nav>
        <hr className="mt-8 w-full border border-solid bg-neutral-200 border-neutral-200 min-h-[1px] max-md:max-w-full" />
        <div className="flex gap-3 px-12 mt-12 mx-36 text-lg w-auto rounded-2xl bg-zinc-100 leading-[90px] text-zinc-400 max-md:flex-wrap max-md:px-5 max-md:mt-10">
          <input
            type="search"
            id="search"
            className="flex-auto h-10 outline-none bg-zinc-100 max-md:max-w-full max-md:max-h-4"
            placeholder="search restaurant, food"
            aria-label="search restaurant, food"
          />
        </div>
        <div className="ml-20 mr-20 p-10 grid grid-cols-3 gap-8 max-lg:grid-cols-1">
          {myRecipe.map((item) => (
            <ImageCard
              key={item.id}
              src={item.image || "/Rectangle 314.png"}
              text={item.title}
              onClick={() => handleNavigate(item.id)}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
