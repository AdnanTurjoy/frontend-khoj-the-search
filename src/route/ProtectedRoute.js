import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../App";

function ProtectedRoute({ children, ...rest }) {
  const [loggedInUser, setloggedInUser] = useContext(AuthContext);
  console.log(loggedInUser);

  return loggedInUser.email ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
