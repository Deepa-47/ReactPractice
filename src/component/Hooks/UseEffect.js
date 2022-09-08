import React, { useEffect, useState } from "react";

export default function UseEffect(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        if(count>0){
            document.title=`Chats(${count})`;
        }
        else{
            document.title=`Chats`;
        }
        
    })
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
}