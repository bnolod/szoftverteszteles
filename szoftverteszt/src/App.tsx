import './App.scss'
import { Main as Welcome } from './pages/welcome'
import { Login } from './pages/login'
import { Register } from './pages/register'
import {} from 'react'
import { Routes, Route } from "react-router-dom";
import { Main } from './pages/mainPage';
import { auth } from "./firebase"; 
import {User, onAuthStateChanged} from "firebase/auth"
import{useEffect, useState} from 'react';

function App() {

  const [authUser, setAuthUser] = useState<User | null>(null);
  useEffect(() => {
       onAuthStateChanged(auth,(user) => {
          if (user) {
              setAuthUser(user);
          } else {
              setAuthUser(null);
          }
      });
  }, [])
  return (
    <>
      <Routes>
        <Route path="welcome" element={<Welcome />}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

      {/* only on auth */}
        <Route path="*" element={authUser != null ? <Main /> : <Welcome />} />
        
        
      </Routes>
    </>
  )
}

export default App

