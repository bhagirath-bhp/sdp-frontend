import {
  Button,
  ButtonGroup,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { DefaultPagination } from "../../components/bhp/DefaultPagination";
import OrderItem from "../../components/bhp/OrderItem";
import { AddIcon } from "../../assets";
import { useNavigate } from "react-router-dom";
import { getOrderMutation } from "../../api/order";
import { ToastContainer, toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { userState } from "../../components/state/recoilState";
import Handler from "../../components/state/handler";


const AllOrdersAdminPage = () => {
  const getOrders = getOrderMutation();
  const [orders, setOrders] = useState([]);
  const user = useRecoilValue(userState)
  // const [pagination, setPagination] = useState({
  //   page: 1,
  //   pageSize: 6,
  //   totalPages: 1,
  //   totalProducts: 1,
  // });

  // async function fetchOrders(page) {
  async function fetchOrders() {
    const response = await getOrders.mutateAsync(user.userId);
    console.log(response)
    if(response.error){
      toast.error(response.error, {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
      });
    }
    setOrders(response);
    // setPagination(response.pagination);
  }
  // const handlePageChange = (newpage) => {
  //   fetchOrders(newpage);
  // };
  useEffect(() => {
    // fetchOrders(1);
    fetchOrders();
  }, []);


  const ordersComponentSet = Array.isArray(orders) 
  ? orders.map((orderItem, index) => (
    <OrderItem key={index} index={index} order={orderItem} />
  ))
  : <tr className="text-center">No orders found </tr>

   const navigate = useNavigate();
  return (
    <div className="relative overflow-x-auto shadow-md">
      <Handler/>
      {/* <AdminNavbar /> */}
      <div className="info flex w-full justify-between">
        <h1>Orders</h1>
        <Button
          onClick={() => navigate("/order/add")}
          variant="outlined"
          className="btn-gold flex gap-2"
          placeholder=""
        >
          <img src={AddIcon} alt="" className="h-5" />
          <span className="leading-5">Add Order</span>
        </Button>
      </div>
      <div className="container py-[3rem] flex flex-col">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3 text-sm">
                Id
              </th>
              <th scope="col" className="px-6 py-3 text-sm">
                Buyer
              </th>
              {/* <th scope="col" className="px-6 py-3 text-sm">
                                Product
                            </th> */}
              <th scope="col" className="px-6 py-3 text-sm">
                Items
              </th>
              <th scope="col" className="px-6 py-3 text-sm">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 text-sm">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{ordersComponentSet}</tbody>
        </table>
        {/* <div className="pagination-container mt-6">
          <DefaultPagination
            totalPages={pagination.totalPages}
            currentPage={pagination.page}
            onPageChange={handlePageChange}
            visiblePages={5}
          />
        </div> */}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default AllOrdersAdminPage;
