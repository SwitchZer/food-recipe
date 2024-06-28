"use client";

import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { Button, Footer, ImageCard, Navbar } from "@/components";

const Recipes = () => {
  const [recipe, setRecipe] = useState([]);
  const [params, setParams] = useState({
    limit: 9,
    page: 1,
    search: "",
    sort: "created_at",
    sortBy: "desc",
  });

  const [searchInput, setSearchInput] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getRecipe = async () => {
    try {
      setLoading(true);

      const queryParams = new URLSearchParams({
        limit: params.limit,
        page: params.page,
        ...(params.search ? { search: params.search } : {}),
        ...(params.sort ? { sort: params.sort } : {}),
        sortBy: params.sortBy,
      });

      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_BASE_URL
        }/v1/recipes?${queryParams.toString()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        // throw new Error('Login failed');
        setError("Get recipes failed");
        setLoading(false);
        return;
      }

      const res = await response.json();
      setRecipe(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipe();
  }, [params]);

  const router = useRouter();
  const handleNavigate = (id) => {
    router.push(`/detail-recipe/${id}`);
  };

  const handlePrevious = () => {
    setParams({
      ...params,
      page: params.page - 1,
    });
  };
  const handleNext = () => {
    setParams({
      ...params,
      page: params.page + 1,
    });
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    if (searchInput === "") {
      setParams({ ...params, search: null });
    } else {
      setParams({
        ...params,
        search: searchInput,
        sort: selectedSort,
        sortBy: selectedSortBy,
      });
    }
  };

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSort(selectedValue);
    // setParams({ ...params, sort: selectedValue });
  };

  const handleSortByChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSortBy(selectedValue);
    // setParams({ ...params, sort: selectedValue });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-16 p-24 pb-4 pt-4 max-lg:p-4 max-lg:pt-32 max-lg:gap-6">
        <div className="flex gap-6 mx-5 items-center">
          <p className="font-medium text-6xl text-[#3F3A3A] max-lg:text-3xl">
            Recipe
          </p>
        </div>
        <div className="join flex mx-5">
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
            <option value={"asc"}>Asc</option>
            <option value={"desc"}>Desc</option>
          </select>
          <Button
            name="Search"
            className="p-2 rounded-sm"
            onClick={handleSearch}
          />
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-1">
          {recipe.map((item) => (
            <ImageCard
              key={item.id}
              src={item.image}
              text={item.title}
              onClick={() => handleNavigate(item.id)}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <div className="join">
            <Button
              className="join-item px-1 btn"
              name="<-"
              onClick={handlePrevious}
            ></Button>
            <Button
              className="join-item m-2 px-2 btn"
              name={params.page}
            ></Button>
            <Button
              className="join-item px-1 btn"
              name="->"
              onClick={handleNext}
            >
              »
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recipes;
