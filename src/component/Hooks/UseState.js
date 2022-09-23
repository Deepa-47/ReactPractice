import React,{useState} from "react";

export default function UseState(){
    const [data,setData]=useState(0);
    return(
        <div>
            <h1>{data}</h1>
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
            {/* <button onClick={()=>setData(data+1)}>Click Me</button> */}
        </div>
    )
}
