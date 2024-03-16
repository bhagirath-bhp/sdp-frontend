import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
const uri = import.meta.env.VITE_APP_URI;

export const addProductMutation = () => {
  return useMutation(async (formData: BodyInit) => {
    console.log(formData);
    const response = await fetch(`${uri}/product/add`, {
      method: "POST",
      body: formData,
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response.json();
  });
};
export const getProductMutation = () => {
  return useMutation(async (userId: string) => {
    const response = await fetch(`${uri}/product/all/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response.json();
  });
};
export const searchMutation = () => {
  return useMutation(async (query: {userId: string, name: string}) => {
    const response = await fetch(`${uri}/product/search/${query.userId}?name=${query.name}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response.json();
  });
};
