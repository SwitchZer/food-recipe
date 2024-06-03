import { cookies } from "next/headers";

export const getCookie = (name) => {
  const cookieStore = cookies();
  const result = cookieStore.get(name)?.value || "";
  return result;
};
