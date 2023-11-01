import { Route, Routes } from "react-router-dom";
import Boarding from "./pages/Boarding/Boarding";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Favorite from "./pages/Favorite/Favorite";
import Carts from "./pages/Carts/Carts";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Boarding />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Home />} />
        <Route path="home/:id" element={<Product />} />
        <Route path="likes" element={<Favorite />} />
        <Route path="carts" element={<Carts />} />
      </Routes>
    </div>
  );
};

export default App;
