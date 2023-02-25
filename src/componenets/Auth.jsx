import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function Auth({ children }) {
  const { userLoading, userLoged } = useContext(AuthContext);
  if (userLoading) {
    return <h1>Cargando...</h1>;
  }
  if (!userLoged) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}

export default Auth;
