import React from "react";

export default function Card(props){

    return(
        <div>
            {props.tempData.map((d)=>{
            return(
                <div className="card">
                    <p>{d.id}</p>
                    <p>{d.title}</p>
                    <p>{d.body}</p>
                </div>
            )
            })}
        </div>
        
    )

}