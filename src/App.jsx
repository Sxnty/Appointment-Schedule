import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { AppointmentsProvider } from "./context/AppointmentsContext";
import Appointments from "./componenets/Appointments";
import Auth from "./componenets/Auth";
import Home from "./componenets/Home";
import Login from "./componenets/Login";
import Sidebar from "./componenets/Sidebar";
import AddAppoint from "./componenets/AddAppoint";
import EditAppointment from "./componenets/EditAppointment";
function App() {
  return (
    <AuthProvider>
      <AppointmentsProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <main className="main">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                <Auth>
                  <Home />
                </Auth>
              }
            />
            <Route
              path="/appointments"
              element={
                <Auth>
                  <Appointments />
                </Auth>
              }
            />
            <Route
              path="/add-appoint"
              element={
                <Auth>
                  <AddAppoint />
                </Auth>
              }
            />
                        <Route
              path="/edit/:id"
              element={
                <Auth>
                  <EditAppointment />
                </Auth>
              }
            />
          </Routes>
        </main>
      </AppointmentsProvider>
    </AuthProvider>
  );
}
export default App;
