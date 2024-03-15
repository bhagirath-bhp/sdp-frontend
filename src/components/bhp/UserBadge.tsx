import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserBadge = () => {
    const [userCick, setUserClick] = useState(false);
    const userString = Cookies.get("user");
    let user: {name: string, email: string, profileURL: string};
    if(userString){
      user = JSON.parse(userString);
    }
    return (
        <div className="flex items-center md:order-2 flex-col relative text-white">
            <button type="button" className="flex text-sm rounded-full focus:ring-1 focus:ring-golden" id="user-menu-button" onClick={() => { (userCick) ? setUserClick(false) : setUserClick(true) }}>
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={user.profileURL} alt="user photo" />
            </button>
            <div className={`z-50 absolute border-[1px] border-golden top-[1.5rem] right-[0.02rem] ${userCick ? "max-h-[20rem] opacity-100" : "max-h-0 opacity-0"} transition-height duration-[700ms] ease-in-out overflow-hidden my-4 text-base list-none bg-[#000000] rounded-lg`}>
                <div className="px-4 py-3 border-b-[1px] border-goldenLight">
                    <span className="block text-sm">{user.name}</span>
                    <span className="block text-sm">{user.email}</span>
                </div>
                <ul className="py-2">
                    <li>
                        <Link to="/user" className="block px-4 py-2 text-sm hover:text-golden hover:bg-goldenLight">Profile</Link>
                    </li>
                    <li>
                        <Link to="/orders" className="block px-4 py-2 text-sm hover:text-golden hover:bg-goldenLight">Orders</Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="block px-4 py-2 text-sm hover:text-golden hover:bg-goldenLight"
                            onClick={() => {
                                Cookies.remove('user')
                                Cookies.remove('token')
                                window.location.replace("/")
                            }}>Sign out</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserBadge