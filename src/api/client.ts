import Cookies from "js-cookie"
import { useMutation } from "@tanstack/react-query";
const uri = import.meta.env.VITE_APP_URI;

export const addClientMutation = () => {
  return useMutation(async (formData: BodyInit) => {
    const response = await fetch(`${uri}/client/add`, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
    });
    return response.json();
  });
};
export const getClientsMutation = () => {
  return useMutation(async (userId: string) => {
    const response = await fetch(`${uri}/client/all/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response.json();
  })
}


export const deleteClientMutation = () => {
  return useMutation(async (clientId: string) => {
    const response = await fetch(`${uri}/client/delete/${clientId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response.json();
  });
};