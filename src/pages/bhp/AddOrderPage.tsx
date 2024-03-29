import { useState, useEffect } from "react";
import { Button, Card, Input, List } from "@material-tailwind/react";
import { SearchItem } from "../../components/bhp/SearchItem";
import AddOrderItem from "../../components/bhp/AddOrderItem";
import { searchMutation } from "../../api/products";
import { addOrderMutation } from "../../api/order";
import { ToastContainer, toast } from "react-toastify";
import { orderState, userState } from "../../components/state/recoilState";
import { useRecoilState, useRecoilValue } from "recoil";
import Handler from "../../components/state/handler";
import { useNavigate } from "react-router-dom";

const AddOrderPage = () => {
  const [buyerName, setBuyerName] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | undefined>(undefined);
  const [searchItems, setSearchItems] = useState([]);
  const [searchProductSet, setSearchProductSet] = useState<JSX.Element[]>([]);
  // const [orderItems, setOrderItems] = useState([]);
  const [orderItems, setOrderItems] = useRecoilState(orderState);
  const [orderItemset, setOrderItemsset] = useState<JSX.Element[]>([]);
  const search = searchMutation();
  const addOrder = addOrderMutation();
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  const handleNameChange = (e: { target: { value: string } }) => {
    setBuyerName(e.target.value);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    let newTimeout: NodeJS.Timeout | undefined = undefined; // Initialize newTimeout with undefined
    clearTimeout(searchTimeout);
    if (e.target.value.length > 1) {
        newTimeout = setTimeout(async () => {
            const query = { userId: user.userId, name: searchText };
            const response = await search.mutateAsync(query);
            setSearchItems(response);
        }, 100);
    } else {
        setSearchItems([]);
    }
    setSearchTimeout(newTimeout as NodeJS.Timeout); // Assert newTimeout as NodeJS.Timeout
};

  useEffect(()=>{
    console.log("                                                         ");
    console.log("---------------------------------------------------------");
    console.log("Order Items: ", orderItems)
    console.log("Search Items: ", searchItems)
    console.log("Order Items Set: ", orderItemset)
    console.log("Search ProductSet: ", searchProductSet)
    console.log("---------------------------------------------------------");
    console.log("                                                         ");
  }, [orderItems]);

  useEffect(() => {
    const temp = searchItems.map((item: { pname: string, _id: string, price: number, imageURL: string }) => {
      console.log(orderItems)
      return (
        <SearchItem
          key={item._id}
          product={item}
          // orderItems={orderItems}
          // setOrderItems={setOrderItems}
        />
      );
    });
    setSearchProductSet(temp);
  }, [searchItems, orderItems]);

  useEffect(() => {
    setTimeout(() => {

      const temp = orderItems?.map((item: {pid: string, pname: string, imageURL: string, price: number, quantity: number}) => (
        <AddOrderItem
          key={item?.pid}
          product={item}
          // orderItems={orderItems}
          // setOrderItems={setOrderItems}
        />
      ));
      console.log(temp)
      setOrderItemsset(temp);
    }, 0);
  }, [orderItems]);

  const handleSubmit = async (e: any) => {
    setIsBtnLoading(true);
    e.preventDefault();

    const totalAmount = orderItems.reduce(
      (accumulator, item: { quantity: number; price: number }) => {
        return accumulator + item.quantity * item.price;
      },
      0
    );
    const order = {
      userId: user.userId,
      bname: buyerName,
      products: orderItems,
      totalAmount: totalAmount,
    };
    const response = await addOrder.mutateAsync(order);

    if (response.success) {
      setIsBtnLoading(false);
      setOrderItems([]);
      toast.success(response.message, {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/orders");
      }, 1000);
    } else {
      setIsBtnLoading(false);
      setOrderItems([]);
      toast.error(response.message, {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="container mx-auto p-[2rem] flex flex-col">
        <Handler />
        <h2 className="text-3xl font-semibold mb-4">Add Order</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Buyer Name
            </label>
            <input
              id="name"
              className="p-2 border-[1px] border-golden rounded w-full outline-none"
              type="text"
              name="name"
              value={buyerName}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Search Products
            </label>
            <div>
              <Input label="search" onChange={handleSearchChange} crossOrigin=""/>
            </div>
            <Card className="w-96]" placeholder="hii">
              <List placeholder="">{searchProductSet}</List>
            </Card>
          </div>
          <div className="mb-2">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Order Products
            </label>
            <Card className="w-96]" placeholder="hii">
              <List placeholder="">
                {/* <AddOrderItem />
                <AddOrderItem />
                <AddOrderItem /> */}
                {orderItemset}
              </List>
            </Card>
          </div>
          <Button
            type="submit"
            variant="outlined"
            className="bg-golden text-sm"
            loading={isBtnLoading}
            placeholder=""
          >
            Add Order
          </Button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddOrderPage;
