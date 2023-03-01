import React from "react";
import { RiFolderAddLine, RiEyeLine, RiSettings3Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Navigate, Link } from "react-router-dom";
import "../styles/sidebar.css";
function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);
  const { logOut, userLoged } = useContext(AuthContext);
  const handleLogOut = async () => {
    await logOut();
  };

  if (!userLoged) {
    return null;
  }

  return (
    <>
      <aside
        className={`sidebar ${showSidebar ? "show" : ""}`}
        onMouseEnter={() => {
          setShowSidebar(true);
        }}
        onMouseLeave={() => {
          setShowSidebar(true);
        }}
      >
        <div className="sidebar__profile">
          <img src={userLoged.photoURL} alt="photo" />
          <h3>{userLoged.displayName}</h3>
        </div>
        <div className="sidebar__icons">
          <Link to="/add-appoint">
            <span>
              <RiFolderAddLine /> {showSidebar && "Agendar cita"}
            </span>
          </Link>

          <Link to="/appointments">
            <span>
              <RiEyeLine /> {showSidebar && "Ver citas"}
            </span>
          </Link>
          <Link to="/config">
            <span>
              <RiSettings3Line /> {showSidebar && "Configuracion"}
            </span>
          </Link>
        </div>
        <button onClick={handleLogOut}>
          <CiLogout />
          {showSidebar && "Cerrar sesion"}
        </button>
      </aside>
    </>
  );
}

export default Sidebar;
