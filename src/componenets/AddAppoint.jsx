import React from "react";
import "../styles/addAppoint.css";
import { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

function AddAppoint() {
  const [newAppoint, setNewAppoint] = useState({
    name: "",
    date: "",
    description: "",
  });
  const [emptyValues, setEmptyValues] = useState(false);

  const handleOnChange = (e) => {
    setNewAppoint({ ...newAppoint, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Object.values(newAppoint).map(function (value) {
      if (value == null || !value) {
        setEmptyValues(true);
      }
    });

    console.log(newAppoint);
  };
  useEffect(() => {
    if (emptyValues) {
      toast.error('No pueden haber campos vacios.', {
        position:'top-right'
      })
      setEmptyValues(false);
    }
  }, [emptyValues]);

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
                type="date"
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
