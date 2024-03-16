import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import SignInPage from "./pages/bhp/SignInPage";
import SignUpPage from "./pages/bhp/SignUpPage";
import AllOrdersAdminPage from "./pages/bhp/AllOrdersAdminPage";
import AddOrderPage from "./pages/bhp/AddOrderPage";
import Cookies from "js-cookie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TasksPage from "./pages/bhp/TasksPage";
import { useEffect } from "react";
import Handler from "./components/state/handler";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <RecoilRoot>
        <div className="main relative">
          <Handler />
          <Navbar />
          <div className="container">
            <div className="menuContainer">
              <Menu />
            </div>
            <div className="contentContainer">
              <QueryClientProvider client={queryClient}>
                <Outlet />
              </QueryClientProvider>
            </div>
          </div>
          <Footer />
        </div>
      </RecoilRoot>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
        {
          path: "/signin",
          element: <SignInPage />,
        },
        {
          path: "/orders",
          element: <AllOrdersAdminPage />,
        },
        {
          path: "/order/add",
          element: <AddOrderPage />,
        },
        {
          path: "/tasks",
          element: <TasksPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
