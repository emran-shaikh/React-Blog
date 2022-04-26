import React,{useEffect} from "react";

function EffectsProps(props){
   
    useEffect(()=>{
        console.warn('Use Effect working with props')
    },[props.count])
    return(
        <div>
        <h3>Working with count effect conditions{props.count}</h3>
        <h3>Working with data effect conditions{props.data}</h3>
        </div>
    )
}

export default EffectsProps;