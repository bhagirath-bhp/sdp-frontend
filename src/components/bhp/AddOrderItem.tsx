import {
    ListItem,
    ListItemPrefix,
    Avatar,
    Typography,
    ListItemSuffix,
    IconButton,
} from "@material-tailwind/react";
import CustomCounter from "./CustomCounter"
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { orderState } from "../state/recoilState";

function TrashIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
        >
            <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
            />
        </svg>
    );
}
interface Product {
    pid: string;
    pname: string;
    imageURL: string;
    price: number;
    quantity: number
  }
  
  interface OrderItem {
    pid: string;
    pname: string;
    quantity: number;
    imageURL: string;
  }
  
  interface Props {
    product: Product;
    // orderItems: OrderItem[];
    // setOrderItems: Function;
  }
// const AddOrderItem = ({ product, orderItems, setOrderItems }: Props) => {
const AddOrderItem = ({ product }: Props) => {
    // console.log(product)
    const [value, setvalue] = useState(product?.quantity);
    const [orderItems, setOrderItems] = useRecoilState(orderState)
    


    // ===========================
    // Uncomment this for quantity (Note: it causes error while adding order)
    // ===========================

    // useEffect(()=>{
    //     const updatedOrder = orderItems?.map((item)=>{
    //         // if(item?.pid === product?.pid){
    //         if(item && (item?.pid === product?.pid)){
    //             return {...item, quantity: value}
    //         }
    //     })
    //     setOrderItems(updatedOrder)
    // }, [value])

    const deleteProduct = () => {
        const updateOrder = orderItems?.filter(item => item?.pid != product?.pid)
        setOrderItems(updateOrder);
    }
    
    if(!orderItems){
        return null;
    }
    return (
        <ListItem ripple={false} placeholder="">
            <ListItemPrefix placeholder="">
                <Avatar variant="circular" alt="candice" src={product?.imageURL || "https://docs.material-tailwind.com/img/face-1.jpg"} placeholder=""/>
            </ListItemPrefix>
            <div className="flex items-center">
                <Typography variant="h6" color="blue-gray" placeholder="">
                    {product?.pname || "something goes here"}
                </Typography>
                {/* <CustomCounter value={value} setValue={setvalue}/> */}
            </div>
            <ListItemSuffix placeholder="hii">
                <IconButton variant="text" color="blue-gray" placeholder="hii" onClick={deleteProduct}>
                    <TrashIcon />
                </IconButton>
            </ListItemSuffix>
        </ListItem>
    )
}

export default AddOrderItem