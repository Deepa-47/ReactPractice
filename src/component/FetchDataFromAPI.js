import React, { useEffect, useState } from "react";
import "../App.css"
import Card from "./Card";
export default function FetchDataFromApi(){
    const [data,setData]=useState([]);
    const url="https://jsonplaceholder.typicode.com/posts";
    useEffect(()=>{
        fetch(url).then((result)=>{
            result.json().then((response)=>{
                setData(response);
            })
        })
    },[]);
    return(
        <div className="container">
            <Card tempData={data}/>
        </div>
    )
}