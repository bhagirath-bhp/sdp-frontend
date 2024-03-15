import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import OrderProductItem from "./OrderProductItem";
import { useEffect, useRef, useState } from "react";
import generatePDF from "react-to-pdf";

const OrderItem = ({ order, index }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const targetRef = useRef(null);
  useEffect(() => {
    console.log(targetRef.current); // Ensure it's not null here
  }, []);
  const orderItems = order.products;
  // const uname = order.user.first_name + ' ' + order.user.last_name;
  const orderItemComponentSet = orderItems.map((data, index) => (
    <OrderProductItem
      key={index}
      id={data.id}
      pname={data.pname}
      quantity={data.quantity}
      price={data.price}
    />
  ));
  const handleInvoice = () => {
    generatePDF(targetRef);
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">{index + 1}</td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {order.bname}
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
          <Dialog
            open={open}
            handler={handleOpen}
            className="text-2xl"
            size="xl"
          >
            <DialogHeader className="flex w-full justify-between">
              <div>Buyer: {order.bname}</div>
              <div>
                <Button
                  onClick={handleInvoice}
                  variant="outlined"
                  className="btn-gold"
                >
                  Download Invoice
                </Button>
              </div>
            </DialogHeader>
            <DialogBody>
              <table
                className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                ref={targetRef}
              >
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
                  </tr>
                </thead>
                <tbody>{orderItemComponentSet}</tbody>
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
  );
};

export default OrderItem;
