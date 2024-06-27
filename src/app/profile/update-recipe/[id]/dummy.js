"use client";
import { Button, Footer, InputField, Navbar } from "@/components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UpdateRecipe = ({ params }) => {
  const router = useRouter();
  const [recipe, setRecipe] = useState({});
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/v1/recipes/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const res = await response.json();

      router.push(`/profile/my-recipes/${res.data.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    try {
      if (params.id) {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/recipes/${params.id}`
        );
        router.push("/profile");
      } else {
        throw new Error("Recipe ID not found!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getRecipe = async () => {
    try {
      const response = await fetch(`/v1/recipes/${params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await response.json();
      setForm(res.data);
      setRecipe(res.data);
    } catch (err) {
      new Error(err.message);
    }
  };

  const handleAddImage = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`/v1/upload`, {
        method: "POST",
        body: formData,
      });

      const res = await response.json();

      const { file_url } = res.data;
      console.log(file_url);
      setForm({ ...form, image: file_url });
      console.log(form.image);
    } catch (err) {
      new Error(err.message);
    }
  };

  useEffect(() => {
    getRecipe();
  }, [params.id]);

  return (
    <div>
      <Navbar />
      <main className="flex justify-center items-center px-16 py-20 text-2xl font-medium text-center bg-white text-stone-500 max-md:px-5">
        <section className="flex flex-col max-w-full w-[1301px] max-md:mt-10">
          <p className="font-medium text-xl text-[#3F3A3A]">
            Edit {recipe.title}
          </p>
          <InputField
            id="file-upload"
            label="Upload Image"
            type="file"
            onChange={handleAddImage}
            className="flex justify-center items-center px-16 pt-72 pb-40 w-full bg-[#F6F5F4] max-md:px-5 max-md:py-10 max-md:max-w-full"
          />
          <InputField
            id="title"
            name="title"
            placeholder="Title"
            label="Title"
            value={form.title}
            onChange={(value) => handleChange("title", value)}
            className="justify-center items-start px-16 py-10 mt-10 w-full bg-[#F6F5F4] whitespace-nowrap max-md:px-5 max-md:max-w-full"
          />

          <InputField
            id="description"
            name="description"
            type="textarea"
            label="Ingredients"
            placeholder="Ingredients"
            value={form.description}
            onChange={(value) => handleChange("description", value)}
            className="items-start px-11 pt-10 pb-64 mt-10 whitespace-nowrap w-full bg-[#F6F5F4] max-md:px-5 max-md:pb-10 max-md:max-w-full"
          />

          <Button
            name="Submit"
            onClick={handleSubmit}
            className="flex justify-center items-center self-center px-16 py-7 mt-24 max-w-full text-base text-white whitespace-nowrap bg-yellow-400 rounded-md w-[426px] max-md:px-5 max-md:mt-10"
            type="submit"
          />
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
