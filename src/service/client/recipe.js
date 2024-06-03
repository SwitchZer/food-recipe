export const getMyRecipe = async () => {
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
    return result;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};

export const addRecipe = async (data) => {
  try {
    const response = await fetch("/v1/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("gagal");
    }
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message || "terjadi error");
  }
};
