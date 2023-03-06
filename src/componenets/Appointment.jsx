import React from "react";
import {
  RiDeleteBin7Line,
  RiUser3Fill,
  RiCalendar2Line,
  RiMessage2Line,
  RiTimeLine,
  RiEdit2Line,
} from "react-icons/ri";
import "../styles/appointmentCard.css";
import moment from "moment";
import { Link } from "react-router-dom";
import { Timestamp } from "firebase/firestore";

function Appointment({ appointment, handleDelete }) {
  let timeStamp = new Timestamp(
    appointment.date.seconds,
    appointment.date.nanoseconds
  );
  timeStamp = moment(timeStamp.toDate()).format("DD-MM-YYYY");
  let className =
    timeStamp == moment().format("YYYY-MM-DD")
      ? "card__footer"
      : "card__footer fix-right";
  const handleModify = (e) => {
    e.preventDefault()
     history.push()
  }
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
            <p>{timeStamp}</p>
          </div>
          <div className="card__hour">
            <RiTimeLine />
            <p>{appointment.hour}</p>
          </div>
        </div>
        <div>
          <RiMessage2Line />
          <p>{appointment.description}</p>
        </div>
      </div>
      <div className={className}>
        {moment(appointment.date).format("YYYY-MM-DD") ==
        moment().format("YYYY-MM-DD") ? (
          <p>Hoy</p>
        ) : null}
        <Link to={'/edit/'+appointment.id} >
          <RiEdit2Line />
        </Link>
        <RiDeleteBin7Line
          onClick={() => {
            handleDelete(appointment.id);
          }}
        />
      </div>
    </div>
  );
}

export default Appointment;
