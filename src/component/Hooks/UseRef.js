import React, { useRef } from "react";

export default function UseRef(){
    let input1=useRef("");
    const inputHandler=()=>{
        input1.current.value="Pooja";
        input1.current.style.display="none";
    }
    return(
        <div>
            <input ref={input1} type="text" />
            <button onClick={inputHandler}>Click me</button>
        </div>
    )
}