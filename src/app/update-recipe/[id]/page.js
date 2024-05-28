"use client";
import { Button, Footer, InputField, Navbar } from "@/components";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UpdateRecipe = ({ params }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("Request payload:", {
      title: formData.title,
      description: formData.description,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (params.id) {
        await axios.put(
          `https://pijar-mama-recipe.vercel.app/v1/recipes/${params.id}`,
          formData
        );
      } else {
        throw new Error("Update Failure!!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      if (params.id) {
        await axios.delete(
          `https://pijar-mama-recipe.vercel.app/v1/recipes/${params.id}`
        );
      } else {
        throw new Error("Recipe ID not found!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      const fetchRecipe = async () => {
        try {
          const res = await axios.get(
            `https://pijar-mama-recipe.vercel.app/v1/recipes/${params.id}`
          );
          const result = res.data.data;
          setFormData({
            title: result.title,
            description: result.description,
          });
        } catch (error) {
          console.log(error);
        }
      };
      fetchRecipe();
    }
  }, [params.id]);
  return (
    <div>
      <Navbar />
      <main className="flex justify-center items-center px-16 py-20 text-2xl font-medium text-center bg-white text-stone-500 max-md:px-5">
        <section className="flex flex-col max-w-full w-[1301px] max-md:mt-10">
          {/* <InputField
            type="file"
            placeholder="Add Photo"
            value={formData.image}
            onChange={handleChange}
            className="flex justify-center items-center px-16 pt-72 pb-40 w-full bg-[#F6F5F4] max-md:px-5 max-md:py-10 max-md:max-w-full"
          >
            {" "}
            Add Photo{" "}
          </InputField> */}

          <InputField
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="justify-center items-start px-16 py-10 mt-10 w-full bg-[#F6F5F4] whitespace-nowrap max-md:px-5 max-md:max-w-full"
          />

          <InputField
            type="textarea"
            placeholder="Ingredients"
            value={formData.description}
            onChange={handleChange}
            className="items-start px-11 pt-10 pb-64 mt-10 whitespace-nowrap w-full bg-[#F6F5F4] max-md:px-5 max-md:pb-10 max-md:max-w-full"
          />

          <Button
            name="Submit"
            onClick={handleSubmit}
            className="flex justify-center items-center self-center px-16 py-7 mt-24 max-w-full text-base text-white whitespace-nowrap bg-yellow-400 rounded-md w-[426px] max-md:px-5 max-md:mt-10"
            type="submit"
          >
            Post
          </Button>
          <Button
            name="Delete"
            onClick={handleDelete}
            className="flex justify-center items-center self-center px-16 py-7 mt-24 max-w-full text-base text-white whitespace-nowrap bg-red-400 rounded-md w-[426px] max-md:px-5 max-md:mt-10"
            type="submit"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UpdateRecipe;
