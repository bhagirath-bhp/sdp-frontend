import { useNavigate } from "react-router-dom";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import Cookies from "js-cookie";
import {
  BigChartBoxData,
  InventoryProducts,
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
  topDealUsers,
} from "../../data";
import "./home.scss";
import { ReactElement, useEffect, useState } from "react";
import { getClientsCountMutation, getOrdersCountMutation, getProductsCountMutation } from "../../api/dailyCounts";
import { useRecoilValue } from "recoil";
import { userState } from "../../components/state/recoilState";
import { getOrderMutation } from "../../api/order";
import { getProductMutation } from "../../api/products";



const Home = () => {
  const navigate = useNavigate();
  const getClientsCount = getClientsCountMutation();
  const getProductsCount = getProductsCountMutation();
  const getOrdersCount = getOrdersCountMutation();
  const getOrders = getOrderMutation();
  const getProducts = getProductMutation();
  const user = useRecoilValue(userState);
  const [bigChartBoxPlaceholder, setBigChartBoxPlaceholder] = useState<ReactElement>();
  const [pieChartBoxPlaceholder, setPieChartBoxPlaceholder] = useState<ReactElement>();

  useEffect(()=>{
    if(!Cookies.get("token")){
      navigate("/signup");
    }
    const fetchClientsCount = async () => {
      const query = {userId: user.userId};
      const clientsCount = await getClientsCount.mutateAsync(query);
      const productsCount = await getProductsCount.mutateAsync(query);
      const ordersCount = await getOrdersCount.mutateAsync(query);
      const orders = await getOrders.mutateAsync(query.userId);
      const products = await getProducts.mutateAsync(query.userId);
      chartBoxUser.number = clientsCount.clientsCountLastSeven.reduce((accumulator, currentValue) => {return accumulator + currentValue})
      chartBoxProduct.number = productsCount.productsCountLastSeven.reduce((accumulator, currentValue) => {return accumulator + currentValue})
      chartBoxRevenue.number = ordersCount.ordersCountLastSeven.reduce((accumulator, currentValue) => {return accumulator + currentValue})

      chartBoxUser.chartData.forEach((item, index)=>{
        item.name = clientsCount.clientsCountTimelineLastSeven[index];
        item.users = clientsCount.clientsCountLastSeven[index];
      })
      chartBoxProduct.chartData.forEach((item, index)=>{
        item.name = productsCount.productsCountTimelineLastSeven[index];
        item.products = productsCount.productsCountLastSeven[index];
      })
      chartBoxRevenue.chartData.forEach((item, index)=>{
        item.name = ordersCount.ordersCountTimelineLastSeven[index];
        item.revenue = ordersCount.ordersCountLastSeven[index];
      })
      barChartBoxVisit.chartData.forEach((item, index) => {
        item.name = ordersCount.ordersCountTimelineLastSeven[index];
        item.sales = ordersCount.ordersCountLastSeven[index]
      })
      BigChartBoxData.forEach((item,index)=>{
        item.name = productsCount.productsCountTimelineLastSeven[index];
        item.clients = clientsCount.clientsCountLastSeven[index];
        item.products = productsCount.productsCountLastSeven[index];
        item.revenue = ordersCount.ordersCountLastSeven[index];
      })
      products.forEach((item)=>{
        InventoryProducts.push({name: item.pname, value: item.price, color: "#0088FE"})
      })
      topDealUsers.forEach((item,index)=>{
        item.amount = orders[index].totalAmount;
        item.username = orders[index].bname;
      })
    }
    fetchClientsCount();
  }, [])
  setTimeout(()=>{
    setBigChartBoxPlaceholder(<BigChartBox data={BigChartBoxData}/>)
    setPieChartBoxPlaceholder(<PieChartBox />)
  }, 300)
  return (
    <div className="home">
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      {/* <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div> */}
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      {/* <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>       */}
      <div className="box box1 max-h-[370px]">
        <TopBox />
      </div>
      <div className="box box4">
        {pieChartBoxPlaceholder}
      </div>
      <div className="box box7">
        {bigChartBoxPlaceholder}
      </div>
    </div>
  );
};

export default Home;
