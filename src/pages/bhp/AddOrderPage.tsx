import { useState, useEffect } from "react";
import { Button, Card, Input, List } from "@material-tailwind/react";
import { SearchItem } from "../../components/bhp/SearchItem";
import AddOrderItem from "../../components/bhp/AddOrderItem";
import { searchMutation } from "../../api/products";

const AddOrderPage = () => {
  const [order, setOrder] = useState({
    name: "",
    description: "",
    price: "",
    images: [],
    quantity: 0,
    categoryId: "",
    collectionId: "",
  });
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(10);
  const [searchItems, setSearcchItems] = useState([]);
  const search = searchMutation();
  const [isBtnLoading, setIsBtnLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSearchChange = (e: any) => {
    setSearchText(e.target.value);
    let newTimeout = 0;
    clearTimeout(searchTimeout);
    if (e.target.value.length > 2) {
      newTimeout = setTimeout(async () => {
        const response = await search(searchText);
        setSearcchItems(response);
      }, 500);
    } else {
      setSearcchItems([]);
    }
    setSearchTimeout(newTimeout);
  };

  // const handleSubmit = async (e) => {
  //   setIsBtnLoading(true);
  //   e.preventDefault();

  //   // Call the updated addNeworder function
  //   const result = await addNewOrder(order);

  //   if (result) {
  //     setIsBtnLoading(false);
  //     setOrder({
  //       name: "",
  //       description: "",
  //       price: "",
  //       images: [],
  //       quantity: 0,
  //       categoryId: "",
  //       collectionId: "",
  //     });
  //   } else {
  //     // TODO: Handle failure
  //   }
  // };

  return (
    <>
      <div className="container mx-auto p-[2rem] flex flex-col">
        <h2 className="text-3xl font-semibold mb-4">Add Order</h2>
        <form onSubmit={() => {}} className="flex flex-col space-y-4">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Order Name
            </label>
            <input
              id="name"
              className="p-2 border-[1px] border-golden rounded w-full outline-none"
              type="text"
              name="name"
              value={order.name}
              onChange={handleChange}
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
              <Input label="search" onChange={handleSearchChange} />
            </div>
            <Card className="w-96]" placeholder="hii">
              <List>
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
              </List>
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
              <List>
                <AddOrderItem />
                <AddOrderItem />
                <AddOrderItem />
              </List>
            </Card>
          </div>
          <Button
            type="submit"
            variant="outlined"
            className="bg-golden text-sm"
            loading={isBtnLoading}
          >
            Add Order
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddOrderPage;
