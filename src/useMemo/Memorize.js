import React from 'react';
import '../useEffect/effets.css';
import { useCounter } from '../useState/hooks/useCounter';

export const Memorize = () => {

    const { counter , increment} = useCounter(10);

    return (
        <div>
            <h1>Memorize</h1>
            <hr/>
        </div>
    )
}
