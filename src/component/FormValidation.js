import React, { useState } from "react";
import './Style/formValidation.css';

export default function FormValidation(){
    const [name,setName]=useState(""); 
    const [password,setPwd]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [error,setError]=useState("");
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(name);
    }
    const passwordHandler=(event)=>{
        let x=event.target.value;
        setPwd(x);
        if(x.length<8){
            setError("Password should must be atleast 8 character")
        }
        else{
            setError("");
        }
    }
    const confirmPasswordHandler=(event)=>{
        let x=event.target.value;
        setConfirmPassword(x);
        if(!password.match(x)){
            setError("Password and confirm password not matched")
        }
        else{
            setError("");
        }
    }
    return(
        <div className="main">
            <form onSubmit={submitHandler}>
                <div >
                    
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name"/>
                    2
                </div>
                <div>
                    <label>Email</label>
                    <input placeholder="Enter Email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={passwordHandler} value={password} placeholder="Enter password"/>
                    <p>{error}</p>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" onChange={confirmPasswordHandler} value={confirmPassword}   placeholder="Confirm password"/>
                    <p>{error}</p>
                </div>
                <div>
                    <button>Submit</button>
                </div>
                
            </form>
        </div>
    )
}