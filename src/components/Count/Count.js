import React, { useState } from "react";
import './style.css';

export default function Count() {
    const [count, setCount] = useState(0);

    return(
        <>
            <h1>Here it is the total count {count}</h1>
            <button onClick={ () => {
                setCount( count + 1 );
            } } >+</button>
        </>
    )
}