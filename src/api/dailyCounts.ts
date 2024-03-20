import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
const uri = import.meta.env.VITE_APP_URI;

export const getClientsCountMutation = () => {
  return useMutation(async (query: { userId: string }) => {
    const response = await fetch(`${uri}/dailycount/clients/${query.userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response.json();
  });
};
export const getProductsCountMutation = () => {
  return useMutation(async (query: { userId: string }) => {
    const response = await fetch(`${uri}/dailycount/products/${query.userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response.json();
  });
};
export const getOrdersCountMutation = () => {
  return useMutation(async (query: { userId: string }) => {
    const response = await fetch(`${uri}/dailycount/orders/${query.userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response.json();
  });
};
