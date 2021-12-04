import React from 'react';
import '../useState/counter.css';
import { useCounter } from './hooks/useCounter';

export const CustomCounterHook = () => {

    const { state,increment, decrement, resetear } =  useCounter( 100 );


    return (
        <>
            <h1>Counter  with Hook : { state }</h1>
            <hr/>

            <button onClick = { increment } className="btn"> +1</button>
            <button onClick = { decrement } className="btn"> -1</button> 
            <button onClick = { resetear } className="btn"> Resetear</button> 
        </>
    )
}
