import React, {useContext} from "react";
import "../styles/addAppoint.css";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import moment from "moment";
import { createAppointment } from "../firestore_api";
import {AuthContext} from '../context/AuthContext'; 
import { useNavigate } from "react-router-dom";

function AddAppoint() {
  const [newAppoint, setNewAppoint] = useState({
    name: "",
    date: "",
    description: "",
  });

  const {userLoged} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setNewAppoint({ ...newAppoint, [e.target.name]: e.target.value });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();

   

    if(!newAppoint.name || !newAppoint.date) {
      toast.error('No pueden haber campos vacios.', {
        position:'top-right'
      })
      return;
    }

    let date = moment(newAppoint.date).format('DD-MM-YYYY')
    let hour = moment(newAppoint.date).format('HH:mm')

    newAppoint.date = date;
    newAppoint.hour = hour;
    newAppoint.userId = userLoged.uid; //el usuario logueado.

    let result = await createAppointment(newAppoint);

    if(result && result.code == 200) {
      setNewAppoint({ ...newAppoint, name: '' });
      setNewAppoint({ ...newAppoint, date: '' });
      setNewAppoint({ ...newAppoint, description: '' });
      toast.success(result.msg, {
        position:'top-right'
      });
      navigate('/appointments');
    } else {
      toast.error(result.msg, {
        position:'top-right'
      });
    }
    
  };

  return (
    <>
      <section className="add__appoint">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h1>Agendar una cita</h1>
          <div className="appoint__info">
            <div className="form__group">
              <label>Nombre</label>
              <input
                name="name"
                type="text"
                value={newAppoint.name}
                onChange={handleOnChange}
              />
            </div>
            <div className="form__group">
              <label>Fecha</label>
              <input
                name="date"
                type="datetime-local"
                value={newAppoint.date}
                onChange={handleOnChange}
              />
            </div>
            <div className="form__group textarea">
              <label>Notas</label>
              <textarea
                name="description"
                value={newAppoint.description}
                onChange={handleOnChange}
              />
            </div>
            <div className="appoint__button">
              <button>Agendar</button>
            </div>
          </div>
        </form>
      </section>
      <Toaster />
    </>
  );
}

export default AddAppoint;
