import React, { useState } from "react";
import { FormProps } from "../../interfaces";
import { Button } from "@material-tailwind/react";

import Cookies from "js-cookie";
// import { ErrorResponse, SuccessResponse } from "../interfaces";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { toUrlEncoded } from "../../utils";
import { useSignInMutation, useSignUpMutation } from "../../api/user";

const AnyForm: React.FC<FormProps> = ({ fields, formType }) => {
  const [form, setForm] = useState<{ [key: string]: string | File }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signin = useSignInMutation();
  const signup = useSignUpMutation();
  const navigate = useNavigate();



  const handleFormChange = (key: string, value: string | File) => {
    setForm((prevform) => ({
      ...prevform,
      [key]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData();
    for (let key in form) {
      if (form.hasOwnProperty(key)) {
        formData.append(key, form[key]);
      }
    }
    if (formType === "signup") {
      setTimeout(async () => {
        const response = await signup.mutateAsync(formData)
        if ("success" in response) {
          setIsLoading(false);
          Cookies.set("user", JSON.stringify(response));
          toast.success("Signed up successfully!", {
            position: "top-right",
            autoClose: 1000,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          const { message } = response;
          setIsLoading(false);
          toast.error(message, {
            position: "top-right",
            autoClose: 1200,
            theme: "light",
          });
        }
      }, 1000);
    } else if (formType === "signin") {
      setTimeout( async () => {
        const response = await signin.mutateAsync(toUrlEncoded(form))
        if ("success" in response) {
          setIsLoading(false);
          Cookies.set("user", JSON.stringify(response));
          toast.success("Signed in successfully!", {
            position: "top-right",
            autoClose: 1000,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          const { message } = response;
          setIsLoading(false);
          toast.error(message, {
            position: "top-right",
            autoClose: 1200,
            theme: "light",
          });
        }
      }, 1000);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="form-input-container">
            <label>{field.label}</label>
            {field.type === "file" ? (
              <input
                className={`form-input ${field.className}`}
                type={field.type}
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
                  handleFormChange(field.label, files[0]);
                }}
              />
            ) : (
              <input
                className={`form-input ${field.className}`}
                type={field.type}
                onChange={(e) => handleFormChange(field.label, e.target.value)}
              />
            )}
          </div>
        ))}
        <Button
          variant="filled"
          type="submit"
          loading={isLoading}
          className="text-sm"
          color="green"
          fullWidth={true}
          placeholder="Submit"
        >
          Submit
        </Button>
      </form>
      <ToastContainer position="top-right" autoClose={1000} theme="light" />
    </>
  );
};

export default AnyForm;
