import React from "react";
import "../styles/appointments.css";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Appointment from "./Appointment";


function Appointments() {
  const data = [
    {
      name: "jose",
      date: "2022-12-20 20:30hs",
      notes: "test",
    },
    {
      name: "alejandro",
      date: "2021-12-20 20:30hs",
      notes: "test",
    },
    {
      name: "andres",
      date: "2022-12-22 20:30hs",
      notes: "test",
    },
    {
      name: "fernando",
      date: "1999-12-22 20:30hs",
      notes: "test",
    },
    {
      name: "Fernando",
      date: "1999-12-22 20:30hs",
      notes: "test",
    },
  ];

  const [dataFilter, setDataFilter] = useState([]);
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    setFullData(data);
    setDataFilter(data);
  }, []);

  function compararFechas(a, b) {
    return b.fecha - a.fecha;
  }

  const dataFiltered = (e) => {
    let dataFiltrada = fullData.filter((data) =>
      data.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDataFilter(dataFiltrada);
  };
  return (
    <>
      <main className="appoint__container">
        <div className="appoint__top">
          <input
            type="text"
            placeholder="Jose, fernando, etc"
            onChange={dataFiltered}
          />
          <Link to="/add-appoint">
            <button>Add appointment</button>
          </Link>
        </div>
        <div className="appointments__list">
            {dataFilter.map((e) => {
              return(
                <Appointment appointment={e} key={e.name}/>
              )
            })
            }
        </div>
      </main>
    </>
  );
}

export default Appointments;
