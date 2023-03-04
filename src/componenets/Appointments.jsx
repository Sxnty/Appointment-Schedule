import React, {useContext} from "react";
import "../styles/appointments.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Appointment from "./Appointment";
import moment from "moment";
import {AppointmentsContext} from '../context/AppointmentsContext'
import { deleteAppointment } from "../firestore_api";
import toast, {Toaster} from 'react-hot-toast'


function Appointments() {

  const data = [];

  const [dataFilter, setDataFilter] = useState([]);
  const [fullData, setFullData] = useState([]);

  const {appointments,setAppointments} = useContext(AppointmentsContext);
  

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

  const handleDelete = async (id) => {
    let result = await deleteAppointment(id);
    if(result.code == 200) {
      toast.success(result.msg, {
        position: "top-right"
      });
      let appointmentsFiltered = appointments.filter(appointment => {
        return appointment.id != id
      });
      setAppointments(appointmentsFiltered);
      setFullData(appointmentsFiltered);
      setDataFilter(appointmentsFiltered);
      // eliminar desde el localstorage
      localStorage.setItem('appointments',JSON.stringify(appointmentsFiltered));
    }
    
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
      <Toaster/>
    </>
  );
}

export default Appointments;
