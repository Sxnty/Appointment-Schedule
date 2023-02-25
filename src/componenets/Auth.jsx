import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Loading from "./Loading";
function Auth({ children }) {
  console.log('first')
  const { userLoading, userLoged } = useContext(AuthContext);
  if (userLoading) {
    return <Loading/>;
  }
  if (!userLoged) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}

export default Auth;