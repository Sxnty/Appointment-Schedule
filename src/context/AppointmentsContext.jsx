import React, { createContext, useEffect, useState } from "react";

export const AppointmentsContext = createContext();

export const AppointmentsProvider = ({ children }) => {
    
    const [appointments,setAppointments] = useState([]);

    useEffect(() => {
     if(localStorage.getItem("appointments")) {
      setAppointments(JSON.parse(localStorage.getItem("appointments")));
     }
    }, []);

    return (
      <AppointmentsContext.Provider value={{setAppointments,appointments }}>
        {children}
      </AppointmentsContext.Provider>
    );
  };
  