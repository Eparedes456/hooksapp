import React, { useState } from 'react'
import { MultipleCustomHooks } from '../components/examples/MultipleCustomHooks';
import '../useEffect/effets.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    


    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr/>

            {
                show && < MultipleCustomHooks />
            }
            
            <button className='btn btn-primary mt-5' onClick={
                ()=>{
                    setShow(!show);
                }
            }>
                mostrar
            </button>

        </div>
    )
}
