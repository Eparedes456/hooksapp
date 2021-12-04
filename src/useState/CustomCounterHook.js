import React from 'react';
import '../useState/counter.css';
import { useCounter } from './hooks/useCounter';

export const CustomCounterHook = () => {

    const { state,increment, decrement } =  useCounter( 100 );


    return (
        <>
            <h1>Counter  with Hook : { state }</h1>
            <hr/>

            <button className="btn"> +1</button>
            <button className="btn"> -1</button> 
        </>
    )
}
