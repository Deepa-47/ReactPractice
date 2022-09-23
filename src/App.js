//  import {Component, createContext, useState } from "react";
// // import "./App.css";
// // import FetchDataApi from "./component/FetchDataApi";
// // import FormValidation from "./component/FormValidation";
// // import Child from "./component/Hooks/Child";
// // import OtherChild from "./component/Hooks/OtherChild";
// // import ReactGetApi from "./component/ReactGetApi";
// // import SearchData from "./component/SearchData";
// // import TableData from "./component/TableData";
// // import Form from "./component/Form";
// // import React from 'react';
// // import UpdateCounterAutomatically from "./component/UpdateCounterAutomatically";
// // import HOC from "./component/HOC";
// // import FetchDataFromApi from "./component/FetchDataFromAPI";
// //export const Global=createContext();
// //import React, {Component, useState} from "react";
// //import '../styles/App.css';

// class App extends Component {
//     render() {
//           const relativeList = [
//           {name: 'Shilpi', key: "relativeListItem1"},
//           {name: 'khushi', key: "relativeListItem2"},
//           {name: 'Brajesh', key: "relativeListItem3"},
//           {name: 'Sunny', key: "relativeListItem4"},
//           {name: 'Bittu', key: "relativeListItem5"}
//         ];
//         relativeList.sort((a, b) => b.name > a.name ? -1: 1);
//         return(
//             <div id="main">
              
//                {/* Do not remove the main div */}
//                 <ol>
//                     {relativeList.map(relative => {
//                       return (
//                         <li key={relative.key}>{relative.key}-{relative.name}</li>
//                       );
//                     })}
//               </ol>
//             </div>
//         )
//     }
// }
import React, { useState, useRef } from 'react';
/**
 * @task :add validation to email, if email is not valid, if not valid email, dont allow to submit
 * @error_message :  "Email is invalid"  if email is wrong. (must be same message) 
 * 
 * 
 */

function App() {

   const fnameRef = useRef();
  const emailRef = useRef();
  const[error,setError]=useState('');
  const submitForm=(event)=>{
    event.preventDefault();
if(!emailRef.current.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
  setError('Email is invalid');
  return;
}
  }
  return(
    <div className="App">
       <h1>How About Them Apples</h1>
      <form onSubmit={submitForm}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name"  ref={fnameRef}/>
            <br></br>
            <p>Email</p>
            <input id='lname' name="name"   ref={emailRef}/>
            <h2 style={{color: 'red'}}>{error}</h2>
          </label>
        </fieldset>

        <button id='submit' type="submit" >Submit</button>
      </form>
      {/* {
        data.fname != undefined && (
          <div>
          <h1>{data.fname}</h1>
          <h2>{data.lname}</h2>
          </div>
        ) 
        }*/}
      
      
    </div>
  )
}


export default App;

// export default App;

// // function App() {
// //     // const data=[
// //     //   {
// //     //       name: "asdfg",
// //     //       year: 2020,
// //     //       Budget: 50,
// //     //       Rating:5,
// //     //       Cast: ['adf'],
// //     //       Reviews:['Good'],
// //     //       Language:'Hindi',
// //     //   },
// //     //   {
// //     //       name: "ertyyr",
// //     //       year: 2019,
// //     //       Budget: 40,
// //     //       Rating:4,
// //     //       Cast: ['adf'],
// //     //       Reviews:['best'],
// //     //       Language:'Hindi',
// //     //   },
// //     //   {
// //     //       name: "ytuio",
// //     //       year: 2019,
// //     //       Budget: 40,
// //     //       Rating:4,
// //     //       Cast: ['adf'],
// //     //       Reviews:['best'],
// //     //       Language:'Hindi',
// //     //   },
// //     //   {
// //     //       name: "poiytyt",
// //     //       year: 2019,
// //     //       Budget: 40,
// //     //       Rating:4,
// //     //       Cast: ['adf'],
// //     //       Reviews:['best'],
// //     //       Language:'Hindi',
// //     //   }
// //     // ]
  
// //   return (
// //     <div className="app">
// //       <UpdateCounterAutomatically/>
// //       {/* <FetchDataFromApi/> */}
// //         {/* <h1>{props.name}</h1> */}
// //     </div>
// //   );
// // }
// // //App=HOC(App);
// // export default App;
