import UserBadge from "../bhp/UserBadge";
import Cookies from "js-cookie";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.png" alt="" />
        <span>Dashboard</span>
      </div>
      <div className="icons">
        {/* <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />*/}
        {/* <div className="user">
          <img
            src="logo.png"
            alt=""
          />
          <span>Impeto Tech</span>
        </div>
        <img src="/note.svg" alt="" className="icon" />  */}
        {/* <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div> */}
        <div className="signin">
                {Cookies.get('user') ? (
                    <UserBadge/>
                ) :(
                    null
                )}
            </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
