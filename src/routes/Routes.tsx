import { useRoutes } from "react-router-dom";

import Layout from "../layout/Layout";
import Boarding from "../pages/Boarding/Boarding";
import SignUp from "../pages/SignUp/SignUp";
import Product from "../pages/Product/Product";
import Carts from "../pages/Carts/Carts";
import Admin from "../pages/Admin/Admin";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Favorite from "../pages/Favorite/Favorite";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import PublicRoute from "../components/PublicRoute/PublicRoute";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Payment from "../pages/Payments/Payments";
import ShippingSteps from "../pages/ShippingSteps/ShippingSteps";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <PublicRoute redirectTo="/home">
          <Layout>
            <Boarding />
          </Layout>
        </PublicRoute>
      ),
    },
    {
      path: "login",
      element: (
        <PublicRoute redirectTo="/home">
          <Layout>
            <Login />
          </Layout>
        </PublicRoute>
      ),
    },
    {
      path: "signup",
      element: (
        <PublicRoute redirectTo="/home">
          <Layout>
            <SignUp />
          </Layout>
        </PublicRoute>
      ),
    },
    {
      path: "home",
      element: (
        <PrivateRoute>
          <Layout>
            <Home />
          </Layout>
        </PrivateRoute>
      ),
    },
    {
      path: "home/:id",
      element: (
        <Layout>
          <Product />
        </Layout>
      ),
    },
    {
      path: "likes",
      element: (
        <Layout>
          <Favorite />
        </Layout>
      ),
    },
    {
      path: "carts",
      element: (
        <Layout>
          <Carts />
        </Layout>
      ),
    },
    {
      path: "shipping",
      element: (
        <Layout>
          <ShippingSteps />
        </Layout>
      ),
    },
    {
      path: "payments",
      element: (
        <Layout>
          <Payment />
        </Layout>
      ),
    },
    { path: "admin", element: <Admin /> },
    { path: "*", element: <NotFoundPage /> },
  ]);
};

export default AppRoutes;
