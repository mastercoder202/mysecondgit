import React from "react";
import "./card.css"
import img from "../images/img.jpg"
const Card=()=>{
    return(
        <>
        <center>
            <card id="card">
                <div id="first-box">
                    <h1>Card</h1>
                    <p>this is amazing card</p>
                    <img src={img} alt="error"></img>
                </div>
                <div id="second-box">
                    <p>enter the details</p>      
                    <p>Quick action</p>
                </div>
                <button>Click me</button>
            </card>
        </center>
         
        </>
    )
}
export default Card;