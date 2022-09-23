import React,{ useReducer } from "react";

const CounterRed = (state,action) =>{
//   console.log("hey state", state, action);
    switch(action.type) {
        case "INCREMENT": 
            return {
                ...state,
                counter: state.counter + 1,
            }
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1,
            }
        default: 
            return state;
    } 

}

const IncrementAction = {
    type: "INCREMENT",

}

const DecrementAction = {
    type: "DECREMENT",

}

const defaultState = {
    counter: 0,
    loading: false
}

function CounterReducer() {
    //const [state, dispatch ] = useReducer(CounterRed, defaultState);

    
    return(
        <>
            //<span id="counter">{state.counter}</span>
            <button id="increment-btn" onClick={() => dispatch(IncrementAction)}>Increase</button>
            <button id="decrement-btn" onClick={() => dispatch(DecrementAction)}>Decrease</button>
        </>
    );

}

export {CounterReducer}