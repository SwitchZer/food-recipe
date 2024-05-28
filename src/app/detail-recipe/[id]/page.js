"use client";

import { Footer, Navbar } from "@/components";
import axios from "axios";
import React, { useEffect } from "react";

const DetailRecipe = ({ params }) => {
  const [recipe, setRecipe] = React.useState(null);

  const getRecipesId = () => {
    axios({
      method: "GET",
      url: `https://pijar-mama-recipe.vercel.app/v1/recipes/${params.id}`,
    })
      .then((res) => {
        const result = res.data.data;
        setRecipe(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRecipesId();
  }, []);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <main>
        <section className="flex flex-col items-center my-20">
          <div>
            <h1 className="text-6xl font-bold mb-10 max-sm:text-[32px] ">
              {recipe.title}
            </h1>
          </div>
          <div>
            <img
              src="/Rectangle 314.png"
              alt="LoginImg"
              className="max-sm:h-[200px]"
            />
          </div>
        </section>
        <section>
          <div className="mx-auto w-1/2 mb-20">
            <ul className="list-disc list-inside">
              <h3 className="lg:text-4xl max-sm:text-4xl text-tertiary font-semibold mb-8">
                Ingredients
              </h3>
              <li className="text-lg lg:text-2xl max-sm:text-base font-medium text-tertiary mb-3">
                {recipe.description}
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DetailRecipe;
