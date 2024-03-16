import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";
import { getClientsMutation } from "../../api/client";
import { useEffect, useState } from "react";
import { PaginationInterface } from "../../interfaces";
import { toUrlEncoded } from "../../utils";
import { getProductMutation } from "../../api/products";
import { userState } from "../state/recoilState";
import { useRecoilValue } from "recoil";

// import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  const getClients = getClientsMutation();
  const getProducts =  getProductMutation();
  const [pagination, setPagination] = useState<PaginationInterface>({pageNo: 0, pageSize: 10})
  const [dataRows, setDataRows] = useState([]);
  const user = useRecoilValue(userState);


  useEffect(()=>{
    const fetchData = async () => {
      // const response = await getClients.mutateAsync(toUrlEncoded(pagination));
      if(props.slug==="clients"){
        const response = await getClients.mutateAsync(user.userId);
        console.log(response)
        setDataRows(response)
      }
      else if (props.slug === "products"){
        const response = await getProducts.mutateAsync(user.userId);
        console.log(response)
        setDataRows(response)
      }
    }
    fetchData();
  }, [])


  const handleDelete = (id: number) => {
    //delete the item
    // mutation.mutate(id)
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        // rows={props.rows}
        rows={dataRows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
