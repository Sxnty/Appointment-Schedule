import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Appointments from './componenets/Appointments'
import Appointment from './componenets/Appointment'
import Auth from './componenets/Auth'
import Home from './componenets/Home'
import Login from './componenets/Login'
import Sidebar from './componenets/Sidebar'
import AddAppoint from './componenets/AddAppoint'
function App() {
  return (
    <AuthProvider>
      <Sidebar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Auth><Home/></Auth>}/>
        <Route path='/appointments' element={<Auth><Appointments/></Auth>}/>
        <Route path='/add-appoint' element={<Auth><AddAppoint/></Auth>}/>
      </Routes>
    </AuthProvider>
  )
}
export default App