import { getCookie } from "@/service/utils";

export const getRecipe = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/recipes?page=4&limit=3`,
      {
        cache: "force-cache",
      }
    );
    if (!response.ok) {
      throw new Error("Error");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message || "terjadi error");
  }
};
