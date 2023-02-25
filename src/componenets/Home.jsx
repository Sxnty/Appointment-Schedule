import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { RiFolderAddLine, RiEyeLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import "../styles/home.css";

function Home() {
  console.log("asd");
  const { logOut, userLoged } = useContext(AuthContext);
  console.log(userLoged);
  const handleLogOut = async () => {
    await logOut();
  };
  return (
    <aside className="sidebar">
      <img src={userLoged.photoURL} alt="photo" />
      <div className="sidebar__icons">
        <span><RiFolderAddLine /> Crear Agenda</span>
        <span><RiEyeLine /> Ver Agendas</span>
      </div>
      <button onClick={handleLogOut}>
        <CiLogout />
        Cerrar Sesion
      </button>
    </aside>
  );
}

export default Home;
