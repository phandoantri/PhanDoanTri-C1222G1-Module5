import React, {useState} from "react";
import {useIncrement} from "../hook/useIncrement";


 export function CountNumber1()  {
     const [count, setCount] = useIncrement(1);
return(
    <>
         <h1>number1 :{count}</h1>
         <button onClick={()=>{setCount()}}>Add</button>
    </>
)
}