import './App.scss'
import { Main as Welcome } from './pages/welcome'
import { Login } from './pages/login'
import { Register } from './pages/register'
import {} from 'react'
import { Routes, Route } from "react-router-dom";
import { Main } from './pages/mainPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="welcome" element={<Welcome />}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Main />} />
        
      </Routes>
    </>
  )
}

export default App

