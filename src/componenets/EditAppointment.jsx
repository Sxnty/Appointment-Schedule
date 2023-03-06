import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { AppointmentsContext } from "../context/AppointmentsContext";
import "../styles/editAppointment.css";
import { AuthContext } from "../context/AuthContext";

function EditAppointment() {
  const { appointments } = useContext(AppointmentsContext);
  const { id } = useParams();
  let thisAppoint = appointments.filter((e) => e.id === id);
  console.log(thisAppoint);
  const { userLoged } = useContext(AuthContext);

  //check if the id is from the user loged
  let permission = false;
  if (userLoged.uid === thisAppoint[0].userId) permission = true;

  return (
    <>
      {!permission ? <h1>No tienes permiso para modificar esta cita.</h1> : (
        <section className="edit__main">
          <div className="edit__container">
            <article className="edit__header">
              <h2>Modify appointment from:</h2>
              <span>{thisAppoint[0].name}</span>
            </article>
            <article className="fieldset__container">
              <article className="edit__time">
                <div className="time__date">
                  <p>Change Date:</p>
                  <input type="date" />
                </div>
                <div className="time__hour">
                  <p>Change Hour:</p>
                  <input type="time" />
                </div>
              </article>
              <article className="edit__info">
                <div className="info__name">
                  <p>Change Name</p>
                  <input type="text" defaultValue={thisAppoint[0].name} />
                </div>
                <div className="info__description">
                  <p>Change Description</p>
                  <textarea
                    name="description"
                    defaultValue={thisAppoint[0].description}
                  ></textarea>
                </div>
              </article>
            </article>
            <button>Edit</button>
          </div>
        </section>
      )}
    </>
  );
}

export default EditAppointment;
