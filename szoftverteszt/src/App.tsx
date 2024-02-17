import './App.scss'
import { Main } from './pages/main'
import { Login } from './pages/login'
import { Register } from './pages/register'
import {} from 'react'
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Routes>
        <Route path="welcome" element={<Main />}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        
      </Routes>
    </>
  )
}

export default App

