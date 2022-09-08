import React, { useState } from "react";

export default function Subtraction(){
    let [input1,setInput1]=useState(0);
    let [input2,setInput2]=useState(0);

    const input1handler=(event)=>{
        let x=event.target.value;
        setInput1(parseInt(x));
        setInput2(parseInt(x)+1);
    }
    const input2handler=(event)=>{
        let y=event.target.value;
        setInput2(parseInt(y));
        setInput1(parseInt(y)-1);
    }
    return (
        <div>
            <input type={"number"} value={input1} onChange={input1handler}/><br/>
            <input type={"number"} value={input2}onChange={input2handler}/>
            <p>Result={input2-input1}</p>
        </div>
    )
}