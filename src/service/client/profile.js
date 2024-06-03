export const getProfile = async () => {
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
    return result;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};
