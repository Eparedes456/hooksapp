import React, { useState } from 'react';
import '../useEffect/effets.css';
import { useCounter } from '../useState/hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

    const { counter , increment} = useCounter(10);
    const [show, setshow] = useState(true); 
    return (
        <div>
            <h1>Counter : <Small value = { counter } /> </h1>
            <hr/>

            <button className="btn btn-primary" onClick={increment}> 
                + 1 
            </button>

            <button className="btn btn-secondary ml-3   " onClick={()=>{
                setshow(!show)
            }}> 
                Mostrar / Ocultar { JSON.stringify(show) }
            </button>

        </div>
    )
}
