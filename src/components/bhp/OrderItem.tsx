import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import OrderProductItem from "./OrderProductItem";
import { useState } from "react";



const OrderItem = ({ order, index }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const orderItems = order.orderitems;
    const uname = order.user.first_name + ' ' + order.user.last_name;
    const orderItemComponentSet = orderItems.map((data) => (<OrderProductItem key={Math.random()} id={data.id} pname={data.product.name} uname={uname} quantity={data.quantity} price={data.price} />))
    return (
        // <>
        //     {orderItemComponentSet}
        //     <tr className="border-b-2 w-[100%]"></tr>
        // </>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4">
                {index+1}
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {uname}
            </td>
            <td className="px-6 py-4">
                <p>{orderItems.length}</p>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {order.totalAmount}
            </td>
            <td className="py-4">
                <div className="dsp m-5">     
                    <Button onClick={handleOpen} variant="outlined" className="btn-gold">
                        View Order
                    </Button>
                    <Dialog open={open} handler={handleOpen} className="text-2xl" size="xl">
                        <DialogHeader>Buyer: {uname}</DialogHeader>
                        <DialogBody>
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-16 py-3 text-sm">
                                            Id
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-sm">
                                            Product
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-sm">
                                            Qty
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-sm">
                                            Price
                                        </th>
                                        {/* <th scope="col" className="px-6 py-3 text-sm">
                                            Action
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderItemComponentSet}
                                </tbody>
                            </table>
                        </DialogBody>
                        <DialogFooter>
                            <Button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-1"
                            >
                                <h3 className="text-base">Cancel</h3>
                            </Button>
                        </DialogFooter>
                    </Dialog>
                </div>
            </td>
            <td className="py-4">
                <div className="dsp m-5">     
                    <Button onClick={handleOpen} variant="outlined" className="btn-gold">
                        View Order
                    </Button>
                    <Dialog open={open} handler={handleOpen} className="text-2xl" size="xl">
                        <DialogHeader>Buyer: {uname}</DialogHeader>
                        <DialogBody>
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-16 py-3 text-sm">
                                            Id
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-sm">
                                            Product
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-sm">
                                            Qty
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-sm">
                                            Price
                                        </th>
                                        {/* <th scope="col" className="px-6 py-3 text-sm">
                                            Action
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderItemComponentSet}
                                </tbody>
                            </table>
                        </DialogBody>
                        <DialogFooter>
                            <Button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-1"
                            >
                                <h3 className="text-base">Cancel</h3>
                            </Button>
                        </DialogFooter>
                    </Dialog>
                </div>
            </td>
        </tr>
    )
}

export default OrderItem