import Cookies from "js-cookie";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../state/recoilState";
import { Button } from "@material-tailwind/react";

const UserBadge = () => {
    const [userCick, setUserClick] = useState(false);
    const user = useRecoilValue(userState);
    return (
        <div className="flex items-center md:order-2 flex-col relative text-black">
            <Button type="button" placeholder="" color="white" className="border-[1px] border-[#A1A1A1] flex items-center gap-[1rem] text-sm focus:ring-1 focus:ring-golden" id="user-menu-button" onClick={() => { (userCick) ? setUserClick(false) : setUserClick(true) }}>
                <span className="sr-only">Open user menu</span>
                <span>{user.name}</span>
                <img className="w-8 h-8 rounded-full" src={user.profileURL} alt="user photo" />
            </Button>
            <div className={`z-50 absolute border-[1px] border-[#000000] top-[3rem] right-[0.02rem] ${userCick ? "max-h-[20rem] opacity-100" : "max-h-0 opacity-0"} transition-height duration-[700ms] ease-in-out overflow-hidden my-4 text-base list-none bg-[#ffffff96] rounded-lg backdrop-blur-md`}>
                <div className="px-4 py-3 border-b-[1px] border-[#727272] flex flex-col gap-[0.3rem]">
                    {/* <span className="block text-sm font-bold">{user.name}</span> */}
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