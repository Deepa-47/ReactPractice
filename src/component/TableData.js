import React, { useState } from "react";

export default function TableData(){
    const [id,setId]=useState(0);
    const [name,setName]=useState("");
    const [phone,setPhone]=useState(0);
    const [balance,setBalance]=useState(0);
    const [data,setData]=useState([])

    const idHandler=(e)=>{
        setId(e.target.value);
    }
    const nameHandler=(e)=>{
        setName(e.target.value);
    }
    const phoneHandler=(e)=>{
        setPhone(e.target.value);
    }
    const balanceHandler=(e)=>{
        setBalance(e.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const tempdata={id,name,phone,balance};
        setData([...data,tempdata]);
        

        
    }
    return (
        <div>
            <input type="number" placeholder="Enter user id" value={id} onChange={idHandler}/><br/><br/>
            <input type="text" placeholder="Enter user name" value={name} onChange={nameHandler}/><br/><br/>
            <input type="number" placeholder="Enter user phone" value={phone} onChange={phoneHandler}/><br/><br/>
            <input type="number" placeholder="Enter user balace" value={balance} onChange={balanceHandler}/><br/><br/>
            <button onClick={submitHandler}>Add</button>
            <table border="1">
                <tr>
                    <th>UserId</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Balance</th>
                </tr>
                <tbody>
                {data.map((data,id)=>{
                    return(
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td>{data.balance}</td>
                        </tr>
                    )
                })}                                                                                                                             
                    
                </tbody>
            </table>
        </div>
    )
}