import { ListItem, ListItemSuffix, IconButton } from "@material-tailwind/react";
import { IoIosAdd } from "react-icons/io";

interface Product {
  _id: string;
  pname: string;
  imageURL: string;
  price: number;
}

interface OrderItem {
  pid: string;
  pname: string;
  quantity: number;
  imageURL: string;
}

interface Props {
  product: Product;
  orderItems: OrderItem[];
  setOrderItems: Function;
}

export function SearchItem({ product, orderItems, setOrderItems }: Props) {
  const handleAddProduct = () => {
    setOrderItems([
      ...orderItems,
      {
        pid: product._id,
        pname: product.pname,
        imageURL: product.imageURL,
        quantity: 1,
        price: product.price,
      },
    ]);
  };

  return (
    <ListItem ripple={false} className="py-1 pr-1 pl-4" placeholder="">
      {product.pname}
      <ListItemSuffix placeholder="">
        <IconButton variant="filled" color="black" onClick={handleAddProduct} placeholder="">
          <IoIosAdd />
        </IconButton>
      </ListItemSuffix>
    </ListItem>
  );
}
