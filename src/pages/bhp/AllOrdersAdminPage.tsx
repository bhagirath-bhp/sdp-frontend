import {
  Button,
  ButtonGroup,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
// import AdminNavbar from "../../components/admin/AdminNavbar";
// import { getAllOrdersForAdmin } from "../../api/order";
import { DefaultPagination } from "../../components/bhp/DefaultPagination";
import OrderItem from "../../components/bhp/OrderItem";
import { AddIcon } from "../../assets";
import { useNavigate } from "react-router-dom";

const AllOrdersAdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 6,
    totalPages: 1,
    totalProducts: 1,
  });

  async function fetchOrders(page) {
    // const response = await getAllOrdersForAdmin(page);
    const response = {
      orders: [
        {
          orderId: "af7520c2-0a99-4259-8128-a585f0ed7f4e",
          totalAmount: null,
          orderitems: [
            {
              quantity: 1,
              price: "11.00",
              product: {
                name: " DSP 1— Draco Beneficia Petitionem or DBP",
              },
            },
          ],
          user: {
            first_name: "J",
            last_name: "G",
            email: "jai@guru.dev",
            addresses: [
              {
                address_line_1: "ahbjhskd",
                address_line_2: "ahmedabad",
                city: "Ahmedabad",
                state: null,
                zipCode: "123455",
                country: {
                  countryName: "usa",
                },
              },
              {
                address_line_1: "ahbjhskd",
                address_line_2: "ahmedabad",
                city: "Ahmedabad",
                state: null,
                zipCode: "123455",
                country: {
                  countryName: "india",
                },
              },
            ],
          },
        },
        {
          orderId: "d4663026-7abb-4760-b6aa-8caef4b7b175",
          totalAmount: null,
          orderitems: [
            {
              quantity: 2,
              price: "11.00",
              product: {
                name: " DSP 1— Draco Beneficia Petitionem or DBP",
              },
            },
            {
              quantity: 1,
              price: "22.00",
              product: {
                name: " DSP 2 — Draco Beneficia Petitionem or DBP",
              },
            },
          ],
          user: {
            first_name: "J",
            last_name: "G",
            email: "jai@guru.dev",
            addresses: [
              {
                address_line_1: "ahbjhskd",
                address_line_2: "ahmedabad",
                city: "Ahmedabad",
                state: null,
                zipCode: "123455",
                country: {
                  countryName: "usa",
                },
              },
              {
                address_line_1: "ahbjhskd",
                address_line_2: "ahmedabad",
                city: "Ahmedabad",
                state: null,
                zipCode: "123455",
                country: {
                  countryName: "india",
                },
              },
            ],
          },
        },
        {
          orderId: "b2211fd9-0463-4bb4-8535-ca76b88f51b0",
          totalAmount: null,
          orderitems: [
            {
              quantity: 3,
              price: "11.00",
              product: {
                name: " DSP 1— Draco Beneficia Petitionem or DBP",
              },
            },
            {
              quantity: 1,
              price: "22.00",
              product: {
                name: " DSP 2 — Draco Beneficia Petitionem or DBP",
              },
            },
          ],
          user: {
            first_name: "J",
            last_name: "G",
            email: "jai@guru.dev",
            addresses: [
              {
                address_line_1: "ahbjhskd",
                address_line_2: "ahmedabad",
                city: "Ahmedabad",
                state: null,
                zipCode: "123455",
                country: {
                  countryName: "usa",
                },
              },
              {
                address_line_1: "ahbjhskd",
                address_line_2: "ahmedabad",
                city: "Ahmedabad",
                state: null,
                zipCode: "123455",
                country: {
                  countryName: "india",
                },
              },
            ],
          },
        },
        {
          orderId: "f124a32a-ad18-4edb-b1b3-d92a89fe6d0c",
          totalAmount: null,
          orderitems: [
            {
              quantity: 1,
              price: "22.00",
              product: {
                name: " DSP 2 — Draco Beneficia Petitionem or DBP",
              },
            },
          ],
          user: {
            first_name: "J",
            last_name: "G",
            email: "jai@guru.dev",
            addresses: [
              {
                address_line_1: "ahbjhskd",
                address_line_2: "ahmedabad",
                city: "Ahmedabad",
                state: null,
                zipCode: "123455",
                country: {
                  countryName: "usa",
                },
              },
              {
                address_line_1: "ahbjhskd",
                address_line_2: "ahmedabad",
                city: "Ahmedabad",
                state: null,
                zipCode: "123455",
                country: {
                  countryName: "india",
                },
              },
            ],
          },
        },
      ],
      pagination: {
        page: 1,
        pageSize: 6,
        totalProducts: 12,
        totalPages: 2,
      },
    };
    console.log(response);
    setOrders(response.orders);
    setPagination(response.pagination);
  }
  const handlePageChange = (newpage) => {
    fetchOrders(newpage);
  };
  useEffect(() => {
    fetchOrders(1);
  }, []);

  const ordersComponentSet = orders.map((orderItem, index) => (
    <OrderItem key={index} index={index} order={orderItem} />
  ));

   const navigate = useNavigate();
  return (
    <div className="relative overflow-x-auto shadow-md">
      {/* <AdminNavbar /> */}
      <div className="info flex w-full justify-between">
        <h1>Orders</h1>
        <Button
          onClick={() => navigate("/order/add")}
          variant="outlined"
          className="btn-gold flex gap-2"
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
                Qty
              </th>
              <th scope="col" className="px-6 py-3 text-sm">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 text-sm">
                Action
              </th>
              <th scope="col" className="px-6 py-3 text-sm">
                Invoice
              </th>
            </tr>
          </thead>
          <tbody>{ordersComponentSet}</tbody>
        </table>
        <div className="pagination-container mt-6">
          <DefaultPagination
            totalPages={pagination.totalPages}
            currentPage={pagination.page}
            onPageChange={handlePageChange}
            visiblePages={5}
          />
        </div>
      </div>
    </div>
  );
};

export default AllOrdersAdminPage;
