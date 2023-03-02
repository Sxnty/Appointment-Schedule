import React from "react";
import {
  RiDeleteBin7Line,
  RiUser3Fill,
  RiCalendar2Line,
  RiMessage2Line,
  RiTimeLine,
} from "react-icons/ri";
import "../styles/appointmentCard.css";

function Appointment({ appointment }) {
  let newDate = appointment.date.split(" ");
  return (
    <div className="appointment__card">
      <div className="card__name">
        <RiUser3Fill />
        <h2>{appointment.name}</h2>
      </div>
      <div className="card__info">
        <div className="card__date">
          <div className="date__day">
            <RiCalendar2Line />
            <p>{newDate[0]}</p>
          </div>
          <div className="card__hour">
            <RiTimeLine />
            <p>{newDate[1]}</p>
          </div>
        </div>
        <div>
          <RiMessage2Line />
          <p>{appointment.notes}</p>
        </div>
      </div>
      <div className="card__footer">
        <RiDeleteBin7Line />
      </div>
    </div>
  );
}

export default Appointment;
