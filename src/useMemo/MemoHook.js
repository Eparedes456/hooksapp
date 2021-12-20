import React, { useState, useMemo } from 'react';
import '../useEffect/effets.css';
import { useCounter } from '../useState/hooks/useCounter';


export const MemoHook = () => {

    const { counter , increment} = useCounter(10);
    const [show, setshow] = useState(true); 


    const proceso_pesado = (iteraciones)=>{
        for (let i = 0; i < iteraciones; i++) {
            
            console.log('Ahi vamos..');
            
        }

        return `${iteraciones} iteraciones realizadas`
    }

    const memoProcesoPesado =  useMemo(() => proceso_pesado(counter), [counter])

    return (
        <div>
            <h1>Use Memo</h1>
            <h3>Counter : { counter } </h3>
            <hr/>

            <p> { memoProcesoPesado } </p>

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
