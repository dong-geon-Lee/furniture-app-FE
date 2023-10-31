import { Route, Routes } from "react-router-dom";
import Boarding from "./pages/Boarding/Boarding";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Boarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
