import { useRoutes } from "react-router-dom";
import { Favorite, Home, Login } from "@mui/icons-material";

import Layout from "../layout/Layout";
import Boarding from "../pages/Boarding/Boarding";
import SignUp from "../pages/SignUp/SignUp";
import Product from "../pages/Product/Product";
import Carts from "../pages/Carts/Carts";
import Admin from "../pages/Admin/Admin";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <Layout>
          <Boarding />
        </Layout>
      ),
    },
    {
      path: "login",
      element: (
        <Layout>
          <Login />
        </Layout>
      ),
    },
    {
      path: "signup",
      element: (
        <Layout>
          <SignUp />
        </Layout>
      ),
    },
    {
      path: "home",
      element: (
        <Layout>
          <Home />
        </Layout>
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
    { path: "admin", element: <Admin /> },
  ]);
};

export default AppRoutes;
