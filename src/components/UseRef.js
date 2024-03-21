import React,{useRef,useState} from "react";


export default function UseRef(){

    const countRef= useRef(0);
    const [count,setCount]= useState(0);


    return(
        <>
        <h1>{countRef.current}</h1>
        <button onClick={()=>countRef.current+=1}>Inc Ref</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Inc State</button>
        </>
    )
}