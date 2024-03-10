import { Button } from "@material-tailwind/react"
import { useState } from "react"

const OrderProductItem = ({ id, pname, uname, quantity, price }) => {
    const [btnState, setBtnState] = useState("Remove");
    const [btnColor, setBtnColor] = useState("golden")
    const handleClick = () => {
        if (btnState === "Remove") {
            setBtnState("Confirm?")
            setBtnColor("green");
        }
        else {
            setBtnState("Remove")
            setBtnColor("golden");
        }
    }
    return (
        <tr>
            <td className="p-4">
                1
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {pname}
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {quantity}
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {price}
            </td>

        </tr>
        // <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        //     <td className="p-4">
        //         1
        //     </td>
        //     <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        //         {name}
        //     </td>
        //     <td className="px-6 py-4">
        //         {quantity}
        //     </td>
        //     <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        //         ${price}
        //     </td>
        //     {/* <td className="w-[15rem] py-4">
        //         <Button className="btn-gold" onClick={handleClick}>{btnState}</Button>
        //     </td> */}
        // </tr>
    )
}

export default OrderProductItem