import { useMutation } from "@tanstack/react-query";

const uri = import.meta.env.VITE_APP_URI;

export const addClientMutation = () => {
  return useMutation(async (formData: BodyInit) => {
    console.log(formData);
    const response = await fetch(`${uri}/client/add`, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.json();
  });
};
export const getClientsMutation = () => {
  return useMutation(async () => {
    const response = await fetch(`${uri}/client/all`, {
      method: "GET",
    });
    return response.json();
  })
}