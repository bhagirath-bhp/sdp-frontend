import { useMutation } from "@tanstack/react-query";

const uri = import.meta.env.VITE_APP_URI;

export const addTaskMutation = () => {
  return useMutation(async (task: string) => {
    console.log(task);
    const response = await fetch(`${uri}/task/add`, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return response.json();
  });
};

