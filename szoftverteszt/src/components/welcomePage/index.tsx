import { Buttons } from "./buttons";
import AuthDetails from '../AuthDetails'
import {} from "react"
import "./index.scss"

// import { Description } from "./description"
// import { NavBar } from "../navbar"

export function MainPage() {
  return (
    <div className="mainpage">
      <div className="bg">
      <div className="maincontent">
        <h3>Meet new people.</h3>
        <AuthDetails/>
        <Buttons/>
      </div>
      </div>
    </div>
  )
}