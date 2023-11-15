import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, redirectTo = "/" }: any) => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;
