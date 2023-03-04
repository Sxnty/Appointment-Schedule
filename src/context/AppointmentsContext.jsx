import React, { createContext, useEffect, useState } from "react";

export const AppointmentsContext = createContext();

export const AppointmentsProvider = ({ children }) => {
    
    const [appointments,setAppointments] = useState([]);

    useEffect(() => {
     if(!appointments.length && localStorage.getItem("appointments")) {
      setAppointments(JSON.parse(localStorage.getItem("appointments")));
     } else if(appointments.length) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
     }
    }, []);

    return (
      <AppointmentsContext.Provider value={{setAppointments,appointments }}>
        {children}
      </AppointmentsContext.Provider>
    );
  };
  