import React, { useState } from "react";
export default function SearchData(){
    const [serachData, setSearchData]=useState("");
    const data=[
                {
                    name: "asdfg",
                    year: 2020,
                    Budget: 50,
                    Rating:5,
                    Cast: ['adf'],
                    Reviews:['Good'],
                    Language:'Hindi',
                },
                {
                    name: "ertyyr",
                    year: 2019,
                    Budget: 40,
                    Rating:4,
                    Cast: ['adf'],
                    Reviews:['best'],
                    Language:'Hindi',
                },
                {
                    name: "ytuio",
                    year: 2019,
                    Budget: 40,
                    Rating:4,
                    Cast: ['adf'],
                    Reviews:['best'],
                    Language:'Hindi',
                },
                {
                    name: "poiytyt",
                    year: 2019,
                    Budget: 40,
                    Rating:4,
                    Cast: ['adf'],
                    Reviews:['best'],
                    Language:'Hindi',
                }
            ]
    return(
        <>
        <div>
            <input type='search' value={serachData} onChange={(e)=>{setSearchData(e.target.value)}}/>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Budget</th>
                        <th>Rating</th>
                        <th>Cast</th>
                        <th>Language</th>
                        <th>Reviews</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter((value)=>{
                        if(serachData==""){
                            return value;
                        }else{
                            if(value.name.toLowerCase().match(serachData.toLowerCase())){
                                return value;
                            }
                        }
                    }).map((d)=>{
                        return (
                            
                            <tr>
                                <td>{d.name}</td>
                                <td>{d.year}</td>
                                <td>{d.Budget}</td>
                                <td>{d.Rating}</td>
                                <td>{d.Cast}</td>
                                <td>{d.Reviews}</td>
                                <td>{d.Language}</td>
                            </tr>
                            
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}