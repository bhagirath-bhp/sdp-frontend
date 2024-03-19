import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
const uri = import.meta.env.VITE_APP_URI;

export const analyseMutation = () => {
  return useMutation(async (query: { userId: string }) => {
    const response = await fetch(`${uri}/analyticd/${query.userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response.json();
  });
};
