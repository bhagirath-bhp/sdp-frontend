import { useSetRecoilState } from "recoil";
import { userState } from "./recoilState";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Handler = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);
  useEffect(()=>{
      const userString = Cookies.get("user");
      if (userString) {
        const temp = JSON.parse(userString);
        setUser(temp);
      } else {
        navigate("/signin");
      }
  }, [])
  return null;
};

export default Handler;
