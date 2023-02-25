import React, { useContext } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import "../styles/login.css";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";

function Login() {
  const { loginWithGoogle, userLoged, userLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginWithGoogle();
    navigate("/");
  };

  if (userLoged) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="login">
        <form>
          <h1>Iniciar sesion</h1>
          <button
            onClick={(e) => {
              handleLogin(e);
            }}
          >
            <AiOutlineGoogle /> Google
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
