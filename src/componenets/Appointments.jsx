import React from "react";
import "../styles/appointments.css";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

function Appointments() {
  const data = [
    {
      name: "jose",
      date: "2022-12-20",
      notes: "test",
    },
    {
      name: "alejandro",
      date: "2021-12-20",
      notes: "test",
    },
    {
      name: "andres",
      date: "2022-12-22",
      notes: "test",
    },
    {
      name: "fernando",
      date: "1999-12-22",
      notes: "test",
    },
  ];
  function compararFechas(a, b) {
    return b.fecha - a.fecha;
  }

  return (
    <>
      <main className="appoint__container">
        <div className="appoint__top">
          <input type="text" placeholder="Jose, fernando, etc" />
          <button>Add appointment</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Notes</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => {
              return (
                <tr key={e.name}>
                  <td>
                    <span className="appoint__name">{e.name}</span>
                  </td>
                  <td>
                    <span className="appoint__date">{e.date}</span>
                  </td>
                  <td>
                    <span className="appoint__note">{e.notes}</span>
                  </td>
                  <td>
                    <span className="appoint__buttons">
                      <RiEdit2Line />
                      <RiDeleteBin6Line />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default Appointments;
