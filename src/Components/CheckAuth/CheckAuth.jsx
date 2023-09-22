import { Navigate } from "react-router-dom";

const CheckAuth = ({ children }) => {
  if (!window.localStorage.getItem("token")) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default CheckAuth;
