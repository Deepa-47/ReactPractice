import React,{useRef} from "react";

export default function SubtractionProblem2(){
    let input1=useRef(0);
    let input2=useRef(0);
    let result=useRef(0);
    const input1handler=()=>{
        // let x=parseInt(input1.current.value);
        // input2.current.value=x+1;
        //result=input2.current.value-x;
    }
    const input2handler=()=>{
        // let x=parseInt(input2.current.value);
        // input1.current.value=x-1;
        // result=x-input1.current.value;
    }
    return (
        <div>
            <input ref={input1} type={"number"}  onChange={input1handler}/><br/>
            <input ref={input2} type={"number"} onChange={input2handler}/>
            <p>Result={result}</p>
        </div>
    )
}