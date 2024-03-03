import { useMutation } from '@tanstack/react-query';

const uri = import.meta.env.VITE_APP_URI;

export const useSignUpMutation = () => {
  return useMutation(async (formData: BodyInit) => {
    const response = await fetch(`${uri}/user/signup`, {
      method: "POST",
      body: formData,
    });
    return response.json();
  });
};
export const useSignInMutation = () => {
  return useMutation(async (formData: BodyInit) => {
    console.log(formData)
    const response = await fetch(`${uri}/user/signin`, {
      method: "POST",
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.json();
  });
};
