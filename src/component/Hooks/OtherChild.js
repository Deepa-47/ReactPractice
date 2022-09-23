import React, { useContext } from "react";
import { Global } from "../../App";
export default function OtherChild(){
    const {appColor}=useContext(Global);
    return(
        <div>
            <h1 style={{color:appColor}}>Other Child Component</h1>
        </div>
    )
}