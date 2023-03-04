import React, {useContext} from "react";
import "../styles/appointments.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Appointment from "./Appointment";
import moment from "moment";
import {AppointmentsContext} from '../context/AppointmentsContext'


function Appointments() {

  const data = [];

  const [dataFilter, setDataFilter] = useState([]);
  const [fullData, setFullData] = useState([]);

  const {appointments} = useContext(AppointmentsContext);
  

  useEffect( () => {
    setDataFilter(appointments);
    setFullData(appointments);
  }, []);


  const dataNameFiltered = (e) => {
    let dataFiltrada = fullData.filter((data) =>
      data.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDataFilter(dataFiltrada);
  };

  const dataDateFiltered = (e) => {
    let formDate = "";
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

          {dataFilter && dataFilter.length ? dataFilter.map((e) => {
            return (
              <Appointment
                appointment={e}
                key={e.id}
                handleDelete={handleDelete}
              />
            );
          }) : <p className="not_cites"> No se han encontrado Citas, <Link to={'/add-appoint'}> Crear una</Link> </p>}
        </div>
      </main>
    </>
  );
}

export default Appointments;
