import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { ToastContainer, toast } from "react-toastify";
import { toUrlEncoded } from "../../utils";
import { addClientMutation } from "../../api/client";
import { addProductMutation } from "../../api/products";
import { userState } from "../state/recoilState";
import { useRecoilValue } from "recoil";
import { Button } from "@material-tailwind/react";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const [form, setForm] = useState<{ [key: string]: string | Date | File }>({});
  const addClient = addClientMutation();
  const addProduct = addProductMutation();
  const user = useRecoilValue(userState);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormChange = (key: string, value: string | Date | File) => {
    setForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));
    setForm((prevForm) => ({
      ...prevForm,
      userId: user.userId,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    if (props.slug === "client") {
      setTimeout(async () => {
        try {
          const response = await addClient.mutateAsync(toUrlEncoded(form));
          console.log(response);
          if ("success" in response) {
            setIsLoading(false);
            toast.success("Client added successfully!", {
              position: "top-right",
              autoClose: 1000,
              theme: "light",
            });
          }
        } catch (error: { message: string} | any) {
          setIsLoading(false);
          console.error("Error adding client:", error);
          const message = error?.message;
          toast.error(message || "An error occurred", {
            position: "top-right",
            autoClose: 1200,
            theme: "light",
          });
        }
        props.setOpen(false);
        window.location.replace("/users");
      }, 1000);
    } else if (props.slug === "product") {
      const formData = new FormData();
      for (let key in form) {
        if (form.hasOwnProperty(key)) {
          const value = form[key];
          // Check if the value is a Date object and convert it to a string if necessary
          const valueToAdd =
            value instanceof Date ? value.toISOString() : value;
          formData.append(key, valueToAdd);
        }
      }

      setTimeout(async () => {
        try {
          const response = await addProduct.mutateAsync(formData);
          console.log(response);
          if ("success" in response) {
            setIsLoading(false);
            toast.success("Product added successfully!", {
              position: "top-right",
              autoClose: 1000,
              theme: "light",
            });
          }
        } catch (error: { message: string} | any) {
          console.error("Error adding product:", error);
          setIsLoading(false);
          const message = error?.message;
          toast.error(message || "An error occurred", {
            position: "top-right",
            autoClose: 1200,
            theme: "light",
          });
        }
        props.setOpen(false);
        window.location.replace("/products");
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
              .filter((item) => item?.field !== "id" && item?.field !== "img")
              .map((column) => (
                <div className="item" key={column.field}>
                  <label>{column.headerName}</label>
                  {column.type === "file" ? (
                    <input
                      type={column.type}
                      placeholder={column.headerName}
                      onChange={(e) => {
                        const files = e.target.files;
                        if (!files || files.length === 0) {
                          toast.error("Select a file!", {
                            position: "top-right",
                            autoClose: 1200,
                            theme: "light",
                          });
                          return;
                        }
                        handleFormChange(column.field, files[0]);
                      }}
                    />
                  ) : (
                    <input
                      type={column.type}
                      placeholder={column.headerName}
                      onChange={(e) =>
                        handleFormChange(column.field, e.target.value)
                      }
                    />
                  )}
                </div>
              ))}
            <Button
              type="submit"
              loading={isLoading}
              className="button"
              placeholder=""
            >
              {!isLoading ? "Submit" : "Sending"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add;
