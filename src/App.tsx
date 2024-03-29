import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TasksPage from "./pages/bhp/TasksPage";
// import Handler from "./components/state/handler";
import { RecoilRoot } from "recoil";
import ErrorBoundary from "./pages/bhp/ErrorBoundary";
import ComingSoon from "./pages/bhp/ComingSoon";
import ScrollToTop from "./components/bhp/ScrollToTop";
import LandingPage from "./pages/bhp/LandingPage";


const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    const location = useLocation();
    const isMenuHidden = (location.pathname === "/") || (location.pathname === "/signup") || (location.pathname === "/signin");
    return (
      <RecoilRoot>
        <div className="main relative">
          {/* <Handler /> */}
          <div className={`${isMenuHidden?"hidden":"block"}`}>
            <Navbar />
          </div>
          <div className="container">
            <div className={`menuContainer ${isMenuHidden?"hidden":"block"}`}>
              <Menu />
            </div>
            <div className={`contentContainer ${isMenuHidden?"w-full":"w-[80%]"}`}>
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
      element: (
        // <ErrorBoundary>
          <ScrollToTop>
            <Layout />
          </ScrollToTop>
        // </ErrorBoundary>
      ),
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/dashboard",
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
        {
          path: "/settings",
          element: <ComingSoon />,
        },
        {
          path: "/settings/charts",
          element: <ComingSoon />,
        },
        {
          path: "/settings/logs",
          element: <ComingSoon />,
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
