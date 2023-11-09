import { Route, Routes } from "react-router-dom";
import Boarding from "./pages/Boarding/Boarding";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Favorite from "./pages/Favorite/Favorite";
import Carts from "./pages/Carts/Carts";
import Admin from "./pages/Admin/Admin";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Boarding />
          </Layout>
        }
      />
      <Route
        path="login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="signup"
        element={
          <Layout>
            <SignUp />
          </Layout>
        }
      />
      <Route
        path="home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="home/:id"
        element={
          <Layout>
            <Product />
          </Layout>
        }
      />
      <Route
        path="likes"
        element={
          <Layout>
            <Favorite />
          </Layout>
        }
      />
      <Route
        path="carts"
        element={
          <Layout>
            <Carts />
          </Layout>
        }
      />

      <Route path="admin" element={<Admin />} />
    </Routes>
  );
};

export default App;
