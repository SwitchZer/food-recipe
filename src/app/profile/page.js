"use client";
import { Footer, ImageCard, NavItem, Navbar } from "@/components";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Profile = () => {
  const [recipes, setRecipes] = React.useState([]);

  const getRecipes = () => {
    axios({
      method: "GET",
      url: `https://pijar-mama-recipe.vercel.app/v1/recipes`,
    })
      .then((res) => {
        const result = res.data.data;
        setRecipes(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const router = useRouter();

  const handleNavigate = (recipeId) => {
    router.push(`/detail-recipe/${recipeId}`);
  };
  useEffect(() => {
    getRecipes();
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
          Garneta Sharina
        </h1>
        <hr className="shrink-0 self-center mt-1.5 max-w-full h-px border border-solid bg-zinc-100 border-zinc-100 w-[319px]" />
        <nav className="flex gap-5 mt-28 ml-36 max-w-full text-2xl font-medium text-center text-stone-500 w-[607px] max-md:flex-wrap max-md:mt-10">
          <NavItem>My Recipe</NavItem>
          <NavItem>Saved Recipe</NavItem>
          <NavItem>Liked Recipe</NavItem>
        </nav>
        <hr className="mt-8 w-full border border-solid bg-neutral-200 border-neutral-200 min-h-[1px] max-md:max-w-full" />
        <div className="flex gap-3 px-12 mt-12 mx-36 text-lg w-auto rounded-2xl bg-zinc-100 leading-[90px] text-zinc-400 max-md:flex-wrap max-md:px-5 max-md:mt-10">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <img
            loading="lazy"
            src="/Group 687.svg"
            alt="Search Icon"
            className="shrink-0 aspect-square w-[18px]"
          />
          <input
            type="search"
            id="search"
            className="flex-auto bg-zinc-100 max-md:max-w-full"
            placeholder="search restaurant, food"
            aria-label="search restaurant, food"
          />
        </div>
        <section className="mt-12 ml-36 max-w-full w-[770px] max-md:mt-10">
          <div className="flex flex-wrap gap-5 max-md:flex-col max-md:gap-0">
            {recipes.map((recipe, id) => (
              <div key={id} className="w-1/2 max-md:w-full">
                <ImageCard
                  onClick={() => handleNavigate(recipe.id)}
                  src="/Rectangle 314.png"
                  text={recipe.title}
                />
              </div>
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
