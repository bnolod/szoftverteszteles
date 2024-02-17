import {useState} from "react"
// import { useCookies } from "react-cookie";
import "firebase/auth"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";



export function RegisterScreen() {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    const [error, setError] = useState("")
    

function Register(event: any) {

    event.preventDefault()
    createUserWithEmailAndPassword(auth, email, password,)
    .then((userCredential) => {
        console.log(userCredential);
        console.log("Sikeres regisztráció");
        setError("Successful registration. You will be redirected to the login page.")
        setTimeout(() => {
            navigate("/login")
        }, 3000);
    }).catch((error) => {
        console.log(error);
        setError(error.message);
    });

 
}
 return (
    <div className="overlay">
        <form onSubmit={e=>{Register(e)}}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={e=> setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={e=> setPassword(e.target.value)} />
            </div>
            <p className="message">{error}</p>
            <div>
                
                <button type="submit">Register</button>
            </div>
        </form>

    </div>   )
}