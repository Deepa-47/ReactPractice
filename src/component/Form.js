import React, { useState } from "react";

export default function Form(){
    let [name,setName]=useState("")
    let [roll,setRoll]=useState(0);
    const [data,setData]=useState([]);
    const [uid,setuid]=useState(-1)
    const [btntext,setbuttontext]=useState("Submit");
    
    const nameInputHandler=(event)=>{
        setName(event.target.value);
    }
    const rollInputHandler=(event)=>{
        setRoll(event.target.value);
    }
    const print=()=>{
        if(uid>=0){
            // const udata=data.filter((value,index)=>{
            //     if(index==uid)
            //     {
            //         return value;
            //     }
            // })
            const udata=[...data];
            udata[uid].sname=name;
            udata[uid].sroll=roll;
            setData(udata);
            setName("");
            setRoll(0);
            setuid(-1);
            setbuttontext("Submit");
        }
        else{
            const inputdata={sname:name,sroll:roll}
            setData([...data,inputdata]);
            setName("");
            setRoll("");
        }
    }

    const update=(event)=>{
        console.log(event.target.id)
        const udata=data.filter((value,index)=>{
            if(index===event.target.id)
            {
                return value;
            }
        })
        setName(udata[0].sname)
        setRoll(udata[0].sroll)
        setbuttontext("Update");
        setuid(event.target.id);
        console.log(udata);
    }

    const remove=(event)=>{
        
        const udata=data.filter((value,index)=>{
            if(index!=event.target.id)
            {
                return value;
            }
        })
        console.log(udata);
        setData(udata);
    }
    return(
        <>
            <input type={"text"} placeholder={"Enter your Name:"} onChange={nameInputHandler} value={name}/><br/>
            <input type={"number"} placeholder={"Enter roll:"} onChange={rollInputHandler} value={roll}/><br/>
            <input type={"submit"} value={btntext} onClick={print}/><br/>
            {data.map((value,i)=>{
               return(
                    <div key={i}>
                         <lable>{i}-{value.sname}-{value.sroll}</lable>
                         <button onClick={update}id={i}>Update</button>
                         <button onClick={remove} id={i}>Delete</button>
                    </div>
               )
               
            })}
        </>
    )
}
