import React from "react";
import "../styles/appointments.css";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Appointment from "./Appointment";
import moment from "moment";

function Appointments() {
  const data = [
    {
      name: "jose",
      date: "03-04-2023",
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

  let actualDay = moment().format("YYYY-MM-DD");

  function compararFechas(a, b) {
    return b.fecha - a.fecha;
  }

  const dataNameFiltered = (e) => {
    let dataFiltrada = fullData.filter((data) =>
      data.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDataFilter(dataFiltrada);
  };

  const dataDateFiltered = (e) => {
    let formDate = "";
    console.log(e);
    if (typeof e == "object") {
      formDate = e.target.value;
    } else {
      formDate = e;
    }
    let dataFiltrada = fullData.filter((data) => {
      let date = moment(formDate).format("DD-MM-YYYY");
      return data.date.includes(date);
    });
    setDataFilter(dataFiltrada);
  };

  const handleDelete = (e) => {
    let newData = data.filter((appointment) => appointment.name != e);
    setFullData(newData);
    setDataFilter(newData);
  };
  return (
    <>
      <main className="appoint__container">
        <div className="appoint__top">
          <div className="top__filters">
          <input
            type="text"
            placeholder="Jose, fernando, etc"
            onChange={dataNameFiltered}
          />
          <input type="date" onChange={dataDateFiltered} />
          </div>
          <Link to="/add-appoint">
            <button>Add appointment</button>
          </Link>
        </div>
        <div className="appointments__list">
          {dataFilter.map((e) => {
            return (
              <Appointment
                appointment={e}
                key={e.name}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Appointments;
