import { useState } from "react";
import "./Products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";
import { Button } from "@material-tailwind/react";
import { AddIcon } from "../../assets";
import Handler from "../../components/state/handler";

const columns: GridColDef[] = [
  // { field: "id", headerName: "ID", width: 90 },
  {
    field: "image",
    headerName: "Image",
    width: 150,
    type: "file",
    renderCell: (params) => <img src={params.value} />
  },
  {
    field: "pname",
    type: "string",
    headerName: "Product Name",
    width: 200,
  },
  // {
  //   field: "color",
  //   type: "string",
  //   headerName: "Color",
  //   width: 150,
  // },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  // {
  //   field: "lastUpdated",
  //   headerName: "Last Updated",
  //   width: 200,
  //   type: "date",
  //   valueFormatter: (params) => new Date(params?.value).toDateString(),
  // },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
    type: "number",
  },
  // {
  //   field: "inStock",
  //   headerName: "In Stock",
  //   width: 150,
  //   type: "boolean",
  // },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="products">
      <Handler/>
        <div className="info">
          <h1>Products</h1>
          <Button
            onClick={() => setOpen(true)}
            variant="outlined"
            className="btn-gold flex gap-2"
          >
            <img src={AddIcon} alt="" className="h-5" />
            <span className="leading-5">Add Product</span>
          </Button>
        </div>
        <DataTable slug="products" columns={columns} rows={products} />
        {/* TEST THE API */}

        {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
        {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
      </div>
    </>
  );
};

export default Products;
