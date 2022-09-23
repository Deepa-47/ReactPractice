import react from "react";

export default function HOC(HOComponent){
    function NewComponent(){
        return(
            <>
                <h1>
                    <HOComponent name="component"/>
                </h1>
            </>
        )
    }
    return NewComponent;
}