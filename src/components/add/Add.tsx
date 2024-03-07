import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { ToastContainer, toast } from "react-toastify";
import { toUrlEncoded } from "../../utils";
import { addClientMutation, getClientsMutation } from "../../api/client";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const [form, setForm] = useState<{ [key: string]: string | Date }>({});
  const addClient = addClientMutation();

  const handleFormChange = (key: string, value: string | Date) => {
    setForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(props.slug);
    if (props.slug === "client") {
      console.log(form);
      setTimeout(async () => {
        if (form) {
          const response = await addClient.mutateAsync(toUrlEncoded(form), ); // Call mutateAsync
          console.log(response);
          if ("success" in response) {
            toast.success("Signed in successfully!", {
              position: "top-right",
              autoClose: 1000,
              theme: "light",
            });
          }
        } else {
          const { message } = response;
          toast.error(message, {
            position: "top-right",
            autoClose: 1200,
            theme: "light",
          });
        }
        props.setOpen(false);
      }, 1000);
    }
  };

  return (
    <>
      <div className="add">
        <ToastContainer position="top-right" autoClose={1000} theme="light" />
        <div className="modal">
          <span className="close" onClick={() => props.setOpen(false)}>
            X
          </span>
          <h1>Add new {props.slug}</h1>
          <form onSubmit={handleSubmit}>
            {props.columns
              .filter((item) => item.field !== "id" && item.field !== "img")
              .map((column) => (
                <div className="item" key={column.field}>
                  <label>{column.headerName}</label>
                  <input
                    type={column.type}
                    placeholder={column.headerName}
                    onChange={(e) =>
                      handleFormChange(column.field, e.target.value)
                    }
                  />
                </div>
              ))}
            <button className="button">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add;
