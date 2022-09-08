import React, { useContext } from "react";
import { Global } from "../../App";
import SuperChild from "./SuperChild";

export default function Child(){
    const {appColor,getDay}=useContext(Global);
    const day="sunday";
    console.log("appColor",appColor);
    return (
        <div>
            <h1 style={{color:appColor}}>Child Component</h1>
            <button onClick={()=>getDay(day)}>Click me</button>
            <SuperChild/>
        </div>
    )
}