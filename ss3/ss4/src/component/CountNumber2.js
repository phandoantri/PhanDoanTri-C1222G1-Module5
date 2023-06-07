import React, {useState} from "react";
import {useIncrement} from "../hook/useIncrement";


export function CountNumber2()  {
    const [count, setCount] = useIncrement(2);
    return(
        <>
            <h1>number2 :{count}</h1>
            <button onClick={()=>{setCount()}}>Add</button>
        </>
    )
}