import {} from "react"
import{useEffect, useState} from 'react';
import { Link } from 'react-router-dom'

import { auth } from "../../firebase"; 
import { SignOut } from "../accounts/signOut";
import {User, onAuthStateChanged} from "firebase/auth"

import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';


import {LoginScreen} from "../accounts/login"
import {RegisterScreen} from "../accounts/register"


export function Buttons() {
    console.log(auth)
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
        
        <div>
        <div className="buttons">
            

            {authUser != null
                ?
             <div>
                <Link className="button" id="swipe" to="/">Start swiping</Link>
                <br />
                <button className="button" id="logout" onClick={SignOut}>Log Out</button>
             </div>
                : 
               <div>
                {/* <Link className="button" id="login" to="/login">Login</Link>

                <br />
                <Link className="button" id="register" to="/register">Register</Link> */}
                <Popup trigger={<button>Register</button>} position="right center">
                    <RegisterScreen/>
                </Popup>
                <Popup trigger={<button>Sign in</button>}>
                    <LoginScreen/>
                </Popup>
                </div> 

            }
            
        </div>
        </div>

    )
}