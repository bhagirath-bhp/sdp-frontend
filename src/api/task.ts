import Cookies from 'js-cookie';
import { useMutation } from "@tanstack/react-query";
const uri = import.meta.env.VITE_APP_URI;

export const addTaskMutation = () => {
  return useMutation(async (task: {title: string}) => {
    const response = await fetch(`${uri}/task/add`, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
    });
    return response.json();
  });
};


export const getTaskMutation = () => {
  return useMutation(async () => {
    const response = await fetch(`${uri}/task/all`, {
      method: "GET",
      // body: JSON.stringify(task),
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
    });
    return response.json();
  });
};
export const deleteTaskMutation = () => {
  return useMutation(async (taskId: string) => {
    const response = await fetch(`${uri}/task/delete?tid=${taskId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response.json();
  });
};
export const updateTaskMutation = () => {
  return useMutation(async (taskId: string) => {
    console.log(taskId)
    const response = await fetch(`${uri}/task/update?tid=${taskId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response.json();
  });
};


