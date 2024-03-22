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
  // barChartBoxRevenue,
  barChartBoxVisit,
  // chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
  topDealUsers,
} from "../../data";
import "./home.scss";
import { ReactElement, useEffect, useState } from "react";
import {
  getClientsCountMutation,
  getOrdersCountMutation,
  getProductsCountMutation,
} from "../../api/dailyCounts";
import { useRecoilValue } from "recoil";
import { userState } from "../../components/state/recoilState";
import { getOrderMutation } from "../../api/order";
import { getProductMutation } from "../../api/products";
import { generateRandomColor } from "../../utils";

const Home = () => {
  const navigate = useNavigate();
  const getClientsCount = getClientsCountMutation();
  const getProductsCount = getProductsCountMutation();
  const getOrdersCount = getOrdersCountMutation();
  const getOrders = getOrderMutation();
  const getProducts = getProductMutation();
  const user = useRecoilValue(userState);
  const [bigChartBoxPlaceholder, setBigChartBoxPlaceholder] =
    useState<ReactElement>();
  const [pieChartBoxPlaceholder, setPieChartBoxPlaceholder] =
    useState<ReactElement>();

  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/signup");
    }
    const fetchClientsCount = async () => {
      const query = { userId: user.userId };
      const clientsCount = await getClientsCount.mutateAsync(query);
      const productsCount = await getProductsCount.mutateAsync(query);
      const ordersCount = await getOrdersCount.mutateAsync(query);
      const orders = await getOrders.mutateAsync(query.userId);
      const products = await getProducts.mutateAsync(query.userId);
      chartBoxUser.number = clientsCount.clientsCountLastSeven.reduce(
        (accumulator: number, currentValue: number) =>
          accumulator + currentValue,
        0
      );
      chartBoxProduct.number = productsCount.productsCountLastSeven.reduce(
        (accumulator: number, currentValue: number) =>
          accumulator + currentValue,
        0
      );
      chartBoxRevenue.number = ordersCount.ordersCountLastSeven.reduce(
        (accumulator: number, currentValue: number) =>
          accumulator + currentValue,
        0
      );
      chartBoxUser.chartData.forEach((item, index) => {
        // clientsCount.clientsCountTimelineLastSeven.forEach((item, index) => {
        // const itemExists = chartBoxUser.chartData.some(
        //   (user) => user.id === user.id
        // );
        // if (!itemExists) {
        //   chartBoxUser.chartData.push({
        //     id: item.id,
        //     name: clientsCount.clientsCountTimelineLastSeven[index],
        //     users: clientsCount.clientsCountLastSeven[index],
        //   });
        // }
        item.name = clientsCount.clientsCountTimelineLastSeven[index];
        item.users = clientsCount.clientsCountLastSeven[index];
      });
      chartBoxProduct.chartData.forEach((item, index) => {
        // const itemExists = chartBoxProduct.chartData.some(
        //   (user) => user.id === user.id
        // );
        // if (!itemExists) {
        //   chartBoxProduct.chartData.push({
        //     id: item.id,
        //     name: productsCount.productsCountTimelineLastSeven[index],
        //     products: productsCount.productsCountLastSeven[index],
        //   });
        // }
        item.name = productsCount.productsCountTimelineLastSeven[index];
        item.products = productsCount.productsCountLastSeven[index];
      });
      chartBoxRevenue.chartData.forEach((item, index) => {
        // const itemExists = chartBoxRevenue.chartData.some(
        //   (user) => user.id === user.id
        // );
        // if (!itemExists) {
        //   chartBoxRevenue.chartData.push({
        //     id: item.id,
        //     name: ordersCount.ordersCountTimelineLastSeven[index],
        //     revenue: ordersCount.ordersCountLastSeven[index],
        //   });
        // }
        item.name = ordersCount.ordersCountTimelineLastSeven[index];
        item.revenue = ordersCount.ordersCountLastSeven[index];
      });
      barChartBoxVisit.chartData.forEach((item, index) => {
        // const itemExists = barChartBoxVisit.chartData.some(
        //   (user) => user.id === user.id
        // );
        // if (!itemExists) {
        //   barChartBoxVisit.chartData.push({
        //     id: item.id,
        //     name: ordersCount.ordersCountTimelineLastSeven[index],
        //     sales: ordersCount.ordersCountLastSeven[index],
        //   });
        // }
        item.name = ordersCount.ordersCountTimelineLastSeven[index];
        item.sales = ordersCount.ordersCountLastSeven[index];
      });
      BigChartBoxData.forEach((item, index) => {
        // const itemExists = chartBoxProduct.chartData.some(
        //   (user) => user.id === user.id
        // );
        // if (!itemExists) {
        //   BigChartBoxData.push({
        //     id: item.id,
        //     name: productsCount.productsCountTimelineLastSeven[index],
        //     clients: clientsCount.clientsCountLastSeven[index],
        //     products: productsCount.productsCountLastSeven[index],
        //     revenue: ordersCount.ordersCountLastSeven[index],
        //   });
        // }
        item.name = productsCount.productsCountTimelineLastSeven[index];
        item.clients = clientsCount.clientsCountLastSeven[index];
        item.products = productsCount.productsCountLastSeven[index];
        item.revenue = ordersCount.ordersCountLastSeven[index];
      });
      products.forEach((item: { id: string; pname: string; price: string }) => {
        const itemExists = InventoryProducts.some(
          (product) => product.id === item.id
        );
        if (!itemExists) {
          InventoryProducts.push({
            id: item.id,
            name: item.pname,
            value: parseInt(item.price),
            color: generateRandomColor(),
          });
        }
      });
      topDealUsers.forEach((item, index) => {
        item.amount = parseInt(orders[index]?.totalAmount);
        item.username = orders[index]?.bname;
      });
      // Assuming orders is an array of objects
      orders.sort((a, b) => a.totalAmount - b.totalAmount);

      console.log(orders);
    };
    fetchClientsCount();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setBigChartBoxPlaceholder(<BigChartBox data={BigChartBoxData} />);
      setPieChartBoxPlaceholder(<PieChartBox />);
    }, 1000);
  }, [InventoryProducts]);
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
      <div className="box box4">{pieChartBoxPlaceholder}</div>
      <div className="box box7">{bigChartBoxPlaceholder}</div>
    </div>
  );
};

export default Home;
