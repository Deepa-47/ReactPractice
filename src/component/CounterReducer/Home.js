// import React, { useReducer } from "react";

// const intialState=0;
// const reducer =(state,action)=>{
//     if(action.type=="INCREMENT"){
//         return state+1;
//     }
//     if(action.type=="DECREMENT"){
//         return state-1;
//     }
//     return state;
// }
// const Home =()=>{

//     const [state,dispatch]= useReducer(reducer, intialState);
//     return(
//         <div>
//             <span>{state}</span>
//             <button onClick={()=>dispatch({type: "INCREMENT"})}>Increment</button>
//             <button onClick={()=>dispatch({type: "DECREMENT"})}>Decrement</button>
//         </div>
//     )
// }

// export default Home;
const Home = (state,action) =>{
    if(action.type=="INCREMENT"){
          return state+1;
      }
      if(action.type=="DECREMENT"){
          return state-1;
      }
      return state;
}
  
export default Home;