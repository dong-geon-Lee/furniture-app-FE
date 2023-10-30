import { Route, Routes } from "react-router-dom";
import Boarding from "./pages/Boarding/Boarding";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Boarding />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
