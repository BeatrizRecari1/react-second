// 1/3 Import 
import React, { useState } from "react";
import './style.css';

// 2/3 Function
export default function Multiply() {
    const [ multiply, setMultiply] = useState(0)

    // 3/3 Return
    return(
        <>
        <h2>Multiply = {multiply} </h2>
        <buton onClick={ () => { setMultiply(multiply*10) } } className="m-btn">*10</buton>
        </>
    )
}