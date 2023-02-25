import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "./Sidebar";
import "../styles/home.css";


function Home() {
  const { logOut, userLoged } = useContext(AuthContext);
  const handleLogOut = async () => {
    await logOut();
  };
  return (
    <Sidebar/>
  );
}

export default Home;
