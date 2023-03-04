import React from "react";
import {
  RiDeleteBin7Line,
  RiUser3Fill,
  RiCalendar2Line,
  RiMessage2Line,
  RiTimeLine,
} from "react-icons/ri";
import "../styles/appointmentCard.css";
import moment from "moment";

function Appointment({ appointment, handleDelete }) {
  let newDate = appointment.date.split(" ");
  let className =
    moment(appointment.date).format("YYYY-MM-DD") ==
    moment().format("YYYY-MM-DD")
      ? "card__footer"
      : "card__footer fix-right";

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
      <div className={className}>
        {moment(appointment.date).format("YYYY-MM-DD") ==
        moment().format("YYYY-MM-DD") ? (
          <p>Hoy</p>
        ) : null}
        <RiDeleteBin7Line
          onClick={() => {
            handleDelete(appointment.name);
          }}
        />
      </div>
    </div>
  );
}

export default Appointment;
