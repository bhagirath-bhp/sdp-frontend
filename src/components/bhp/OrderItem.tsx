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

const OrderItem = (props: { order: any; index: any }) => {
  const { order, index } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const targetRef = useRef(null);
  useEffect(() => {
    console.log(targetRef.current); // Ensure it's not null here
  }, []);
  const orderItems = order.products;
  // const uname = order.user.first_name + ' ' + order.user.last_name;
  const orderItemComponentSet = orderItems.map((data: any, index: any) => (
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
          <Button
            onClick={handleOpen}
            variant="outlined"
            className="btn-gold"
            placeholder=""
          >
            View Order
          </Button>
          <Dialog
            open={open}
            handler={handleOpen}
            className="text-2xl overflow-y-scroll max-h-[90vh] noscrollbar"
            size="xl"
            placeholder=""
          >
            <DialogHeader
              className="flex w-full justify-between"
              placeholder=""
            >
              {/* <div>Buyer: {order.bname}</div> */}
              <div></div>
              <div>
                <Button
                  onClick={handleInvoice}
                  variant="outlined"
                  className="btn-gold"
                  placeholder=""
                >
                  Download Invoice
                </Button>
              </div>
            </DialogHeader>
            <DialogBody placeholder="">
              <div ref={targetRef} className="p-[1rem]">
                <div className="invoice-head text-[1rem] font-bold">
                  <div className="logo-date flex justify-between items-center">
                    <div className="logo">
                      <img src="/logo.png" alt="" className="h-[5rem]" />
                    </div>
                    <div className="date flex flex-col items-end">
                      <span>Invoice Id: <span>{order._id}</span></span>
                      <span>
                        Date: <span>{new Date().toLocaleDateString()}</span>
                      </span>
                    </div>
                  </div>
                  <div className="buyer py-[1rem] my-[1rem] w-full border-y-2 border-[#A1A1A1]">
                    <span>
                      Buyer: <span>{order.bname}</span>
                    </span>
                  </div>
                </div>
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
                    </tr>
                  </thead>
                  <tbody>{orderItemComponentSet}</tbody>
                </table>
                <div className="invoice-footer">
                  <div className="w-full flex justify-evenly gap-[2rem] px-[1rem] py-[1rem] my-[1rem] text-[1rem] font-bold border-y-2 border-[#A1A1A1]">
                    <div></div>
                    <div></div>
                    {/* <div className="total-quantity text-center">
                      <span>
                        Quanity: <span>{orderItems.length}</span>
                      </span>
                    </div> */}
                    <div className="total-amount text-center">
                      <span>
                        Amount: <span>{order.totalAmount}</span>
                      </span>
                    </div>
                  </div>
                  <div className="my-[5rem]">
                    <div className="my-[1rem] text-[1rem] font-bold">Thank You</div>
                    <div className="my-[1rem] text-[1rem] font-bold">info@impeto.tech</div>
                    <div className="my-[1rem] text-[1rem] font-bold">+91 9023884687</div>
                  </div>
                </div>
              </div>
            </DialogBody>
            <DialogFooter placeholder="">
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
                placeholder=""
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
