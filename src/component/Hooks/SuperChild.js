import React, { useContext } from "react";
import { Global } from "../../App";
export default function SuperChild(){
    const {appColor}=useContext(Global);
    return(
        <div>
            <h1 style={{color:appColor}}>SuperChild Component</h1>
        </div>
    )
}