import { useMutation } from "@tanstack/react-query";

const uri = import.meta.env.VITE_APP_URI;

export const addProductMutation = () => {
  return useMutation(async (formData: BodyInit) => {
    console.log(formData)
    const response = await fetch(`${uri}/product/add`, {
      method: "POST",
      body: formData,
      // headers: {
      //   // "Content-Type": "multipart/form-data",
      // },
    });
    return response.json();
  });
};
export const getProductMutation = () => {
  return useMutation(async () => {
    const response = await fetch(`${uri}/product/all`, {
      method: "GET",
    });
    return response.json();
  })
}
export const searchMutation = () => {
  return useMutation(async (name: string) => {
    const response = await fetch(`${uri}/product/search?name=${name}`, {
      method: "GET",
    });
    return response.json();
  })
}
