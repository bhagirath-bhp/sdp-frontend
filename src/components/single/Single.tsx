// import {
//   Legend,
//   Line,
//   LineChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
import { useRecoilValue, useSetRecoilState } from "recoil";
import "./single.scss";
import { userState } from "../state/recoilState";
import { Button, IconButton, Input } from "@material-tailwind/react";
import { useState } from "react";
import { value } from "@material-tailwind/react/types/components/chip";
import { useUpdateProfileMutation } from "../../api/user";
import { toUrlEncoded } from "../../utils";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};

const Single = (props: Props) => {
  const currentUser = useRecoilValue(userState);
  const [isEditing, setIsEditing] = useState(false);
  const updateProfile = useUpdateProfileMutation();
  const setGlobalUser = useSetRecoilState(userState);
  const [user, setUser] = useState({
    userId: currentUser.userId,
    companyName: currentUser.companyName,
    ownerName: currentUser.ownerName,
    email: currentUser.email,
    phone: currentUser.phone,
    address: currentUser.address,
  });

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (field: string, value: string) => {
    setUser((prev) => ({ ...prev, [field]: value }));
    console.log(user);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await updateProfile.mutateAsync(toUrlEncoded(user));
    if ("success" in response) {
      // setIsLoading(false);
      Cookies.set("user", JSON.stringify(response));
      setGlobalUser(response);
      toast.success("Profile updated!", {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
      });
      setTimeout(() => {
        window.location.replace("/users/1");
        // navigate("/");
      }, 1000);
    } else {
      const { message } = response;
      // setIsLoading(false);
      toast.error(message, {
        position: "top-right",
        autoClose: 1200,
        theme: "light",
      });
    }
  };
  return (
    <>
      <div className="single">
        <div className="view">
          <div className="info">
            <div className="cover-container">
              <img src={currentUser.profileURL} />
            </div>
            <form
              className="details flex justify-center"
              onSubmit={handleSubmit}
            >
              <div
                className="profile-image-container"
                style={{ backgroundImage: `url(${currentUser.profileURL})` }}
              >
                {/* <img src={user.profileURL} /> */}
              </div>
              <div>
                <div className="item edit-input-container">
                  <span className="itemTitle">Company Name: </span>
                  <input
                    type="text"
                    className="itemValue edit-input-field"
                    placeholder={user.companyName}
                    disabled={!isEditing}
                    onChange={(e) => {
                      handleChange("companyName", e.target.value);
                    }}
                  />
                </div>
                <div className="item edit-input-container">
                  <span className="itemTitle">Owner's Name: </span>
                  <input
                    type="text"
                    className="itemValue edit-input-field"
                    placeholder={user.ownerName}
                    disabled={!isEditing}
                    onChange={(e) => {
                      handleChange("ownerName", e.target.value);
                    }}
                  />
                </div>
                <div className="item edit-input-container">
                  <span className="itemTitle">Contact No: </span>
                  <input
                    type="text"
                    className="itemValue edit-input-field"
                    placeholder={user.phone}
                    disabled={!isEditing}
                    onChange={(e) => {
                      handleChange("phone", e.target.value);
                    }}
                  />
                </div>
                <div className="item edit-input-container">
                  <span className="itemTitle">Email: </span>
                  <input
                    type="text"
                    className="itemValue edit-input-field"
                    placeholder={user.email}
                    disabled={!isEditing}
                    onChange={(e) => {
                      handleChange("email", e.target.value);
                    }}
                  />
                </div>
                <div className="item edit-input-container">
                  <span className="itemTitle">Address: </span>
                  <input
                    type="text"
                    className="itemValue edit-input-field"
                    placeholder={user.address}
                    disabled={!isEditing}
                    onChange={(e) => {
                      handleChange("address", e.target.value);
                    }}
                  />
                </div>
                {/* <div className="item">
                <span className="itemTitle">Status: </span>
                <span className="itemValue">
                {" "}
                {user.status || "Not verified"}
                </span>
              </div> */}
                <Button
                  className="submit-btn"
                  color="green"
                  placeholder=""
                  disabled={!isEditing}
                  type="submit"
                >
                  Save
                </Button>
              </div>
            </form>
          </div>
          {/* <div className="info">
            <div className="topInfo">
            {props.img && <img src={props.img} alt="" />}
              <h1>{props.title}</h1>
              <button>Update</button>
            </div>
            <div className="details">
              {Object.entries(props.info).map((item) => (
                <div className="item" key={item[0]}>
                  <span className="itemTitle">{item[0]}</span>
                  <span className="itemValue">{item[1]}</span>
                </div>
              ))}
            </div>
          </div> */}
          {/* <hr /> */}
        </div>
        <div className="btn-container flex gap-[1rem]">
          <IconButton
            placeholder=""
            className="edit-btn"
            color="white"
            onClick={handleEditing}
          >
            <img src="/edit.svg" alt="" />
          </IconButton>
        </div>
        <ToastContainer position="top-right" autoClose={1000} theme="light" />
      </div>
    </>
  );
};

export default Single;
