import React, { useEffect, useState } from "react";

export default function FetchDataApi(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
        .then((result)=>{
            result.json().then((res)=>{
                setData(res)
            })
            
        })
    },[]);
    return(
        <>
        <table border="1">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Team</th>
                    <th>Matches</th>
                    <th>Won</th>
                    <th>Lost</th>
                    <th>Ties</th>
                    <th>NRR</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
            {data.map((d)=>{
                    return(
                        <tr>
                            <td>{d.No}</td>
                            <td>{d.Team}</td>
                            <td>{d.Matches}</td>
                            <td>{d.Won}</td>
                            <td>{d.Lost}</td>
                            <td>{d.Tied}</td>
                            <td>{d.NRR}</td>
                            <td>{d.Points}</td>
                        </tr>
                    )
                })}   
            </tbody>
        </table>
        </>
        
    )
}