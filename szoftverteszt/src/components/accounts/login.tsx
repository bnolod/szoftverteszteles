import {useState} from "react"
// import { useCookies } from "react-cookie";
import "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export function LoginScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
     function Login(event: any) {

        event.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            console.log("Sikeres bejelentkezés");
            setError("Successfully logged in. You will be redirected to the welcome page.")
            setTimeout(() => {
                navigate("/welcome")
            }, 3000);
        }).catch((error) => {
            console.log(error);
            setError("Invalid email or password")

        });
    }
    return (
        <div className="overlay">
            <form onSubmit={e=>{Login(e)}}>
                <div>
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="email" onChange={e=> setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"  onChange={e=> setPassword(e.target.value)} />
                </div>
                <p className="message">{error}</p>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>

        </div>
    )
    }