"use client";
import { Button, Footer, InputField, Navbar } from "@/components";
import axios from "axios";
import React, { useState } from "react";

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`https://pijar-mama-recipe.vercel.app/v1/recipes/`, {
        title: formData.title,
        description: formData.description,
      })
      .then((res) => {
        console.log(res, "Add Recipe");
        // Reset the form after successful submission
        setFormData({ title: "", description: "" });
      })
      .catch((error) => {
        console.error(error, "error");
      });
  };

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
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="justify-center items-start px-16 py-10 mt-10 w-full bg-[#F6F5F4] whitespace-nowrap max-md:px-5 max-md:max-w-full"
          >
            {" "}
            Title{" "}
          </InputField>

          <InputField
            name="description"
            type="textarea"
            placeholder="Ingredients"
            value={formData.description}
            onChange={handleChange}
            className="items-start px-11 pt-10 pb-64 mt-10 whitespace-nowrap w-full bg-[#F6F5F4] max-md:px-5 max-md:pb-10 max-md:max-w-full"
          >
            {" "}
            Ingredients{" "}
          </InputField>

          <Button
            onClick={handleSubmit}
            className="flex justify-center items-center self-center px-16 py-7 mt-24 max-w-full text-base text-white whitespace-nowrap bg-yellow-400 rounded-md w-[426px] max-md:px-5 max-md:mt-10"
            type="submit"
          >
            Post
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AddRecipe;
