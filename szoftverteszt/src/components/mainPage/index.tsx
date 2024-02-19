import {} from "react";
import './index.scss'
import { Swipe } from './elements/swipe'


export  function MainPage() {
    return (
        <div className="mainPage">
            <div className="main-1"></div>
            <div className="main-2"><Swipe></Swipe></div>
            <div className="main-3"></div>
        </div>
    )
}