import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";

import "./Users.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { userRows } from "../../data";
import { Button } from "@material-tailwind/react";
import { AddIcon } from "../../assets";
import Handler from "../../components/state/handler";

// import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  // { field: "id", headerName: "ID", width: 90 },
  // {
  //   field: "img",
  //   headerName: "Avatar",
  //   width: 100,
  //   renderCell: (params) => {
  //     return <img src={params.row.img || "/noavatar.png"} alt="" />;
  //   },
  // },
  {
    field: "fname",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lname",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  // {
  //   field: "createdAt",
  //   headerName: "Created At",
  //   width: 200,
  //   type: "date",
  //   valueFormatter: (params) => new Date(params?.value).toDateString(),
  // },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "switch",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="users">
      <Handler/>
      <div className="info">
        <h1>Clients</h1>
        {/* <Button onClick={() => setOpen(true)}>Add New Client</Button> */}
        <Button onClick={() => setOpen(true)} variant="outlined" className="btn-gold flex gap-2">
          <img src={AddIcon} alt="" className="h-5" />
          <span className="leading-5">Add New Client</span>
        </Button>
      </div>
      <DataTable slug="clients" columns={columns} rows={userRows} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="client" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
