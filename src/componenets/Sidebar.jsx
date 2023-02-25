import React from "react";
import { RiFolderAddLine, RiEyeLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Navigate, Link } from "react-router-dom";

function Sidebar() {
  const { logOut, userLoged } = useContext(AuthContext);

  const handleLogOut = async () => {
    await logOut();
  };

  if (!userLoged) {
    return null;
  }

  return (
    <>
      <aside className="sidebar">
        <img src={userLoged.photoURL} alt="photo" />
        <div className="sidebar__icons">
          <Link to="/add-appoint">
            <span>
              <RiFolderAddLine /> Crear Agenda
            </span>
          </Link>

          <Link to="/appointments">
            <span>
              <RiEyeLine /> Ver Agendas
            </span>
          </Link>
        </div>
        <button onClick={handleLogOut}>
          <CiLogout />
          Cerrar Sesion
        </button>
      </aside>
    </>
  );
}

export default Sidebar;
