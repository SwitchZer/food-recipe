"use client";

import { Button, Footer, Navbar } from "@/components";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const DetailRecipe = ({ params }) => {
  const router = useRouter();
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

  const likeRecipe = async () => {
    try {
      const response = await fetch(`/v1/recipes/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipe_id: `${params.id}` }),
        credentials: "include",
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        alert("Recipe liked!");
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  const saveRecipe = async () => {
    try {
      const response = await fetch(`/v1/recipes/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipe_id: `${params.id}` }),
        credentials: "include",
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        alert("Recipe saved!");
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
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
            <Image
              src={recipe.image || "/Rectangle 314.png"}
              alt={recipe.title}
              className="max-sm:h-[200px]"
              width={500}
              height={300}
              style={{ objectFit: "cover" }}
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
            <Button
              onClick={likeRecipe}
              name="Like Recipe"
              className="mt-40 p-2 bg-green-500"
            />
            <Button
              onClick={saveRecipe}
              name="Save Recipe"
              className="mt-40 p-2 bg-yellow-500"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DetailRecipe;
