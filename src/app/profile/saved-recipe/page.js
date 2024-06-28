"use client";
import { Button, Footer, ImageCard, NavItem, Navbar } from "@/components";
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
      const response = await fetch(`/v1/recipes/save`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
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

  const cancelSavedRecipe = async (id) => {
    try {
      const response = await fetch(`/v1/recipes/save/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Cancel save recipe failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleNavigate = (id) => {
    router.push(`/detail-recipe/${id}`);
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
            <div className="flex-auto text-black">My Recipe</div>
          </Link>
          <Link href="/profile/saved-recipe">
            <div className="flex-auto text-black underline">Saved Recipe</div>
          </Link>
          <Link href="/profile/liked-recipe">
            <div className="flex-auto text-black">liked Recipe</div>
          </Link>
        </nav>
        <hr className="mt-8 w-full border border-solid bg-neutral-200 border-neutral-200 min-h-[1px] max-md:max-w-full" />
        {/* <div className="join flex mx-32 mt-10">
          <input
            type="search"
            id="search"
            className="flex-auto p-2 outline-none bg-zinc-100 max-md:max-w-full"
            placeholder="Search Recipe"
            onChange={handleSearchInputChange}
          />
          <select
            className="select select-bordered bg-zinc-100 join-item"
            value={selectedSort}
            onChange={handleSortChange}
          >
            <option value={""} selected>
              Sort
            </option>
            <option value={"title"}>Title</option>
            <option value={"created_at"}>Created At</option>
          </select>
          <select
            className="select select-bordered bg-zinc-100 join-item mr-2"
            value={selectedSortBy}
            onChange={handleSortByChange}
          >
            <option value={""} selected>
              Sort By
            </option>
            <option value={"asc"}>Ascending</option>
            <option value={"desc"}>Descending</option>
          </select>
          <Button
            name="Search"
            className="p-2 rounded-sm"
            onClick={handleSearch}
          />
        </div> */}
        <div className="ml-20 mr-20 p-10 grid grid-cols-3 gap-8 max-lg:grid-cols-1">
          {myRecipe.map((item) => (
            <div key={item.recipe.id}>
              <ImageCard
                src={item.recipe.image || "/Rectangle 314.png"}
                text={item.recipe.title}
                onClick={() => handleNavigate(item.recipe.id)}
              />
              <Button
                name="Delete Saved"
                className="flex p-1 ml-6 bg-red-500"
                onClick={() => cancelSavedRecipe(item.id)}
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
