import React, { useState } from "react";

export default function Counter(){
    let [count,setCountValue]=useState(0)

    const increment=()=>{
        setCountValue(++count);
    }

    const decrement=()=>{
        setCountValue(--count);
    }
    return(
        
        <>
            <div>
                <h2>{count}</h2>
                <button onClick={increment}>Increment</button><br/>
                <button onClick={decrement}>Decrement</button>
            </div>
        </>
    )
}

