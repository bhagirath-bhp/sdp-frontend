import React, { useState } from "react";
import { FormProps } from "../../interfaces";
import { Button } from "@material-tailwind/react";

import Cookies from "js-cookie";
// import { ErrorResponse, SuccessResponse } from "../interfaces";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
import { toUrlEncoded } from "../../utils";
import { useSignInMutation, useSignUpMutation } from "../../api/user";
import { useSetRecoilState } from "recoil";
import { userState } from "../state/recoilState";

const AnyForm: React.FC<FormProps> = ({ fields, formType }) => {
  const [form, setForm] = useState<{ [key: string]: string | File }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setUser = useSetRecoilState(userState)
  const signin = useSignInMutation();
  const signup = useSignUpMutation();
  // const navigate = useNavigate();

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
        const response = await signup.mutateAsync(formData);
        if ("success" in response) {
          setIsLoading(false);
          Cookies.set("user", JSON.stringify(response));
          Cookies.set("token", response.token);
          setUser(response);
          toast.success("Signed up successfully!", {
            position: "top-right",
            autoClose: 1000,
            theme: "light",
          });
          setTimeout(() => {
            window.location.replace("/dashboard");
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
      console.log(form)
      setTimeout(async () => {
        const response = await signin.mutateAsync(toUrlEncoded(form));
        console.log(response)
        if ("success" in response) {
          setIsLoading(false);
          Cookies.set("user", JSON.stringify(response));
          Cookies.set("token", response.token);
          setUser(response);
          toast.success("Signed in successfully!", {
            position: "top-right",
            autoClose: 1000,
            theme: "light",
          });
          setTimeout(() => {
            window.location.replace("/dashboard");
            // navigate("/");
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
      <form className="bhp-form" onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="bhp-form-input-container">
            <label>{field.label}</label>
            {field.type === "file" ? (
              <input
                className={`bhp-form-input ${field.className}`}
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
                className={`bhp-form-input ${field.className}`}
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
          className="bhp-form-btn"
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
