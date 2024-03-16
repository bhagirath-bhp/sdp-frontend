import Cookies from 'js-cookie';
import { useMutation } from "@tanstack/react-query";
const uri = import.meta.env.VITE_APP_URI;

export const addOrderMutation = () => {
  return useMutation(async (order: {bname: string, products: {pname: string, pid:string, quantity:number}[]}) => {
    console.log(order)
    const response = await fetch(`${uri}/order/add`, {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
    });
    return response.json();
  });
};


export const getOrderMutation = () => {
    return useMutation(async (userId: string) => {
      const response = await fetch(`${uri}/order/all/${userId}`, {
        method: "GET",
        // body: JSON.stringify(task),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('token')}`
        },
      });
      return response.json();
    });
  };