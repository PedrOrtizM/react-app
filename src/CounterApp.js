import React, { useState } from 'react'

export const CounterApp = ()=>{

    const [counter,setCounter] = useState(10);

    const handleAdd = () => {
        setCounter(counter + 1 );
    }


    return(
        <div>
            <h1>HolaMundo</h1>
            Valor: { counter }
           <br></br>
            <button type="button" onClick={handleAdd}>
                Ingrementar
            </button>
        </div>
    )
}