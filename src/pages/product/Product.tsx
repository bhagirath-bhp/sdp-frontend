import Single from "../../components/single/Single"
import { singleProduct } from "../../data"
import ComingSoon from "../bhp/ComingSoon"
import "./product.scss"

const Product = () => {
  
  //Fetch data and send to Single Component
  return (
    <div className="product">
      <ComingSoon/>
       {/* <Single {...singleProduct}/> */}
    </div>
  )
}

export default Product