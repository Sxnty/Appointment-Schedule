import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Auth from './componenets/Auth'
import Home from './componenets/Home'
import Login from './componenets/Login'
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Auth><Home/></Auth>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </AuthProvider>
  )
}

export default App